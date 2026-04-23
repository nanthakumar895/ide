import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { Loader2 } from 'lucide-react'
import { useAuth, useUser } from '@clerk/clerk-react'
import Header from './components/Header'
import EditorPanel from './components/EditorPanel'
import ProblemPanel from './components/ProblemPanel'
import TestResultsPanel from './components/TestResultsPanel'
import MobileFooter from './components/MobileFooter'
import ProblemListDrawer from './components/ProblemListDrawer'
import { useProblem } from './hooks/useProblem'
import { SUPPORTED_LANGUAGES, ExecutionResult } from './constants'
import { useSupabase } from './hooks/useSupabase'

const CE_BASE_URL = "https://ce.judge0.com";

const toBase64 = (str: string) => {
  const bytes = new TextEncoder().encode(str || "");
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
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
    return base64;
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

  const pollingRefs = useRef<Record<number, any>>({});
  const abortRef = useRef(false);

  const syncProfile = useCallback(async () => {
    try {
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
    } catch (err) {
      console.error('Profile sync failed:', err);
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
    if (iteration >= 60) return { status: { id: 5, description: 'Time Limit Exceeded' }, stderr: 'Polling timeout' };

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions/${token}?base64_encoded=true`);
      if (!response.ok) throw new Error('Network failure');
      const data = await response.json();
      if (data.status.id <= 2) {
        return new Promise((resolve) => {
           pollingRefs.current[caseIdx] = setTimeout(() => resolve(fetchSubmission(token, caseIdx, iteration + 1)), 1500);
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
      return { status: { id: 13, description: 'Internal Error' }, stderr: 'Connection lost' };
    }
  }, []);

  const saveSubmissionToSupabase = async (resultsMap: Record<number, ExecutionResult>, code: string) => {
    try {
      const supabase = await getClient();
      if (!supabase || !userId) return;
      const mainResult = resultsMap[0];
      if (!mainResult || mainResult.status.id <= 2) return;

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
      console.error('Save failed:', err);
    }
  };

  const runCode = useCallback(async (code: string, languageId: number, inputs: string[], isSubmit: boolean = false) => {
    Object.values(pollingRefs.current).forEach(clearTimeout);
    pollingRefs.current = {};
    setIsRunning(true);
    setIsSubmitting(isSubmit);
    setExecutionResults({});
    if (isMobile) setActiveTab('testcase');

    const runTimeout = setTimeout(() => {
       setIsRunning(prev => {
          if (prev) {
             setExecutionResults({ 0: { status: { id: 13, description: 'Internal Error' }, stderr: 'Global run timeout exceeded.' } });
             return false;
          }
          return prev;
       });
    }, 90000);

    try {
      const tokens = await Promise.all(inputs.map(async (stdin) => {
        const response = await fetch(`${CE_BASE_URL}/submissions?base64_encoded=true&wait=false`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ source_code: toBase64(code), language_id: languageId, stdin: toBase64(stdin), redirect_stderr_to_stdout: false }),
        });
        if (!response.ok) throw new Error('Init failed');
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
      clearTimeout(runTimeout);
      setIsRunning(false);
      setIsSubmitting(false);
    }
  }, [fetchSubmission, isMobile, userId, getClient, currentProblem.id, selectedLanguageId]);

  const handleRun = () => runCode(sourceCode, selectedLanguageId, [customInput], false);
  const handleSubmit = () => runCode(sourceCode, selectedLanguageId, currentProblem.testcases.map(tc => tc.input), true);
  const handleProblemListClick = () => setIsDrawerOpen(!isDrawerOpen);

  if (!isLoaded) return (
    <div className="h-screen w-screen bg-[#0b0e14] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin text-[#ff5a00]" size={48} />
        <span className="text-slate-400 font-bold text-sm tracking-widest uppercase">ProCode</span>
      </div>
    </div>
  );

  if (!isSignedIn) {
    // Only import Auth when needed to avoid blinking
    const Auth = React.lazy(() => import('./components/Auth'));
    return (
      <React.Suspense fallback={<div className="h-screen w-screen bg-[#0b0e14] flex items-center justify-center"><Loader2 className="animate-spin text-[#ff5a00]" size={48} /></div>}>
        <Auth />
      </React.Suspense>
    );
  }

  return (
    <div className="procode-app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--darker-bg)', color: 'var(--text-color)' }}>
      <Header onRun={handleRun} onSubmit={handleSubmit} isSubmitting={isSubmitting} onToggleTheme={toggleTheme} onProblemListClick={handleProblemListClick} isRunning={isRunning} theme={theme} />
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
