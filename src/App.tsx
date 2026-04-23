import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Panel, Group, Separator } from 'react-resizable-panels'
import { Loader2 } from 'lucide-react'
import Header from './components/Header'
import ProblemPanel from './components/ProblemPanel'
import EditorPanel from './components/EditorPanel'
import TestResultsPanel from './components/TestResultsPanel'
import MobileFooter from './components/MobileFooter'
import ProblemListDrawer from './components/ProblemListDrawer'
import Auth from './components/Auth'
import { useProblem } from './hooks/useProblem'
import { SUPPORTED_LANGUAGES } from './constants'
import { ExecutionResult } from './types'
import { useAuth, useUser } from '@clerk/clerk-react'
import { useSupabase } from './hooks/useSupabase'

const CE_BASE_URL = "https://ce.judge0.com";

const toBase64 = (str: string) => {
  try {
    const bytes = new TextEncoder().encode(str || "");
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  } catch (e) {
    return btoa(str || "");
  }
};

const fromBase64 = (base64: string) => {
  try {
    const binary = atob(base64 || "");
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return new TextDecoder().decode(bytes);
  } catch {
    return base64 || "";
  }
};

const App: React.FC = () => {
  const { currentProblem, selectProblem, allProblems } = useProblem()
  const [selectedLanguageId, setSelectedLanguageId] = useState(105)
  const [sourceCode, setSourceCode] = useState(SUPPORTED_LANGUAGES[0].defaultCode)
  const [executionResults, setExecutionResults] = useState<Record<number, ExecutionResult>>({})
  const [isRunning, setIsRunning] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('editor')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [customInput, setCustomInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>((localStorage.getItem('procode-theme') as 'dark' | 'light') || 'dark')

  const { isLoaded, isSignedIn, userId } = useAuth()
  const { user } = useUser()
  const { getClient } = useSupabase()

  const pollingRefs = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const abortRef = useRef(false);

  const syncProfile = useCallback(async () => {
    const supabase = await getClient();
    if (!supabase || !userId || !user) return;

    const { data } = await supabase.from('profiles').select('id').eq('id', userId).maybeSingle();
    if (!data) {
       await supabase.from('profiles').insert({
          id: userId,
          username: user.username || user.emailAddresses[0].emailAddress.split('@')[0],
          full_name: user.fullName,
          avatar_url: user.imageUrl
       });
    }
  }, [getClient, userId, user]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize)
    if (theme === 'light') document.documentElement.classList.add('light-mode');
    else document.documentElement.classList.remove('light-mode');

    if (isSignedIn && user) {
       syncProfile();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      abortRef.current = true;
      Object.values(pollingRefs.current).forEach(clearTimeout);
    }
  }, [theme, isSignedIn, user, syncProfile])

  useEffect(() => {
    if (currentProblem.testcases[0]) {
      setCustomInput(currentProblem.testcases[0].input);
    }
    const lang = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId);
    if (lang) {
        setSourceCode(lang.defaultCode);
    }
    setExecutionResults({});
  }, [currentProblem, selectedLanguageId])

  const handleLanguageChange = (id: number) => setSelectedLanguageId(id)

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('procode-theme', newTheme);
    if (newTheme === 'light') document.documentElement.classList.add('light-mode');
    else document.documentElement.classList.remove('light-mode');
  }

  const fetchSubmission = useCallback(async (token: string, caseIdx: number, iteration = 1): Promise<ExecutionResult | null> => {
    if (abortRef.current) return null;
    if (iteration >= 100) return { status: { id: 5, description: 'Time Limit Exceeded' }, stderr: 'Timeout' };

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions/${token}?base64_encoded=true`);
      const data = await response.json();
      if (data.status.id <= 2) {
        return new Promise((resolve) => {
           pollingRefs.current[caseIdx] = setTimeout(() => resolve(fetchSubmission(token, caseIdx, iteration + 1)), 1000);
        });
      } else {
        return {
          status: data.status,
          time: data.time,
          memory: data.memory,
          stdout: data.stdout ? fromBase64(data.stdout) : undefined,
          stderr: data.stderr ? fromBase64(data.stderr) : undefined,
          compile_output: data.compile_output ? fromBase64(data.compile_output) : undefined,
          token: data.token
        };
      }
    } catch (error) {
      return { status: { id: 13, description: 'Internal Error' }, stderr: 'Network Failure' };
    }
  }, []);

  const saveSubmissionToSupabase = async (resultsMap: Record<number, ExecutionResult>, code: string) => {
    const supabase = await getClient();
    if (!supabase || !userId) return;
    const mainResult = resultsMap[0];
    if (!mainResult) return;

    try {
      await supabase.from('submissions').insert({
        user_id: userId,
        problem_id: currentProblem.id,
        language_id: selectedLanguageId,
        code: code,
        status: mainResult.status.description,
        runtime: mainResult.time ? Math.round(parseFloat(mainResult.time) * 1000) : null,
        memory: mainResult.memory ? parseInt(mainResult.memory.toString()) : null
      });
    } catch (err) {
      console.error('Failed to persist submission:', err);
    }
  };

  const runCode = useCallback(async (code: string, languageId: number, inputs: string[], isSubmit: boolean = false) => {
    Object.values(pollingRefs.current).forEach(clearTimeout);
    pollingRefs.current = {};
    setIsRunning(true);
    setIsSubmitting(isSubmit);
    setExecutionResults({});
    if (isMobile) setActiveTab('testcase');

    try {
      const tokens = await Promise.all(inputs.map(async (stdin) => {
        const response = await fetch(`${CE_BASE_URL}/submissions?base64_encoded=true&wait=false`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source_code: toBase64(code), language_id: languageId, stdin: toBase64(stdin), redirect_stderr_to_stdout: false }),
        });
        const data = await response.json();
        return data.token;
      }));
      if (abortRef.current) return;
      const results = await Promise.all(tokens.map((token, idx) => fetchSubmission(token, idx)));
      const resultsMap: Record<number, ExecutionResult> = {};
      results.forEach((res, idx) => { if (res) resultsMap[idx] = res; });
      setExecutionResults(resultsMap);
      if (results.length > 0) saveSubmissionToSupabase(resultsMap, code);
    } catch (error) {
      setExecutionResults({ 0: { status: { id: 13, description: 'Internal Error' }, stderr: 'Failed to initiate execution.' } });
    } finally {
      setIsRunning(false);
      setIsSubmitting(false);
    }
  }, [fetchSubmission, isMobile, userId, getClient, currentProblem.id, selectedLanguageId]);

  const handleRun = () => runCode(sourceCode, selectedLanguageId, [customInput], false);
  const handleSubmit = () => runCode(sourceCode, selectedLanguageId, currentProblem.testcases.map(tc => tc.input), true);
  const handleProblemListClick = () => setIsDrawerOpen(!isDrawerOpen);

  if (!isLoaded) return <div className="h-screen w-screen bg-[#0b0e14] flex items-center justify-center"><Loader2 className="animate-spin text-[#ff5a00]" size={48} /></div>;
  if (!isSignedIn) return <Auth />;

  return (
    <div className="procode-app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--darker-bg)', color: 'var(--text-color)' }}>
      <Header onRun={handleRun} onSubmit={handleSubmit} onToggleTheme={toggleTheme} onProblemListClick={handleProblemListClick} isRunning={isRunning} theme={theme} />
      <ProblemListDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} problems={allProblems} onSelectProblem={selectProblem} currentProblemId={currentProblem.id} />
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {isMobile ? (
          <div className="mobile-layout" style={{ height: '100%', overflowY: 'auto', paddingBottom: '70px' }}>
            {activeTab === 'description' && <ProblemPanel problem={currentProblem} />}
            {activeTab === 'editor' && <EditorPanel code={sourceCode} onChange={(value) => setSourceCode(value || '')} selectedLanguageId={selectedLanguageId} onLanguageChange={handleLanguageChange} theme={theme} />}
            {activeTab === 'testcase' && <TestResultsPanel results={executionResults} isRunning={isRunning} problem={currentProblem} customInput={customInput} setCustomInput={setCustomInput} isSubmitting={isSubmitting} />}
          </div>
        ) : (
          <div className="desktop-layout" style={{ height: '100%' }}>
            <Group orientation="horizontal">
              <Panel defaultSize={35} minSize={20}><ProblemPanel problem={currentProblem} /></Panel>
              <Separator className="resize-handle-h" />
              <Panel defaultSize={65}>
                <Group orientation="vertical">
                  <Panel defaultSize={65} minSize={30}><EditorPanel code={sourceCode} onChange={(value) => setSourceCode(value || '')} selectedLanguageId={selectedLanguageId} onLanguageChange={handleLanguageChange} theme={theme} /></Panel>
                  <Separator className="resize-handle-v" />
                  <Panel defaultSize={35} minSize={20}><TestResultsPanel results={executionResults} isRunning={isRunning} problem={currentProblem} customInput={customInput} setCustomInput={setCustomInput} isSubmitting={isSubmitting} /></Panel>
                </Group>
              </Panel>
            </Group>
          </div>
        )}
      </main>
      {isMobile && <MobileFooter onRun={handleRun} onSubmit={handleSubmit} onTabChange={setActiveTab} activeTab={activeTab} isRunning={isRunning} />}
      {!isMobile && <div className="procode-showCopyright" style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666', borderTop: '1px solid var(--border-color)', backgroundColor: 'var(--dark-bg)' }}>© 2016-2026 ProCode IDE – All Rights Reserved.</div>}
    </div>
  )
}

export default App
