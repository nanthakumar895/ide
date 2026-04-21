import React, { useState, useCallback, useEffect, useRef } from 'react'
import { Panel, Group, Separator } from 'react-resizable-panels'
import Header from './components/Header'
import ProblemPanel from './components/ProblemPanel'
import EditorPanel from './components/EditorPanel'
import TestResultsPanel from './components/TestResultsPanel'
import ProblemListDrawer from './components/ProblemListDrawer'
import MobileFooter from './components/MobileFooter'
import { useProblem } from './hooks/useProblem'
import { SUPPORTED_LANGUAGES } from './constants'
import { ExecutionResult } from './types'

const CE_BASE_URL = "https://ce.judge0.com";

const toBase64 = (str: string) => {
  try {
    return btoa(unescape(encodeURIComponent(str || "")));
  } catch (e) {
    return btoa(str || "");
  }
};

const fromBase64 = (bytes: string) => {
  try {
    const escaped = escape(atob(bytes || ""));
    return decodeURIComponent(escaped);
  } catch {
    try {
       return atob(bytes || "");
    } catch {
       return bytes || "";
    }
  }
};

const App: React.FC = () => {
  const { currentProblem, selectProblem, allProblems } = useProblem()
  const [selectedLanguageId, setSelectedLanguageId] = useState(105) // Default to C++
  const [sourceCode, setSourceCode] = useState(SUPPORTED_LANGUAGES[0].defaultCode)
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('editor')
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [customInput, setCustomInput] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const pollingRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize);
      abortRef.current = true;
      if (pollingRef.current) clearTimeout(pollingRef.current);
    }
  }, [])

  useEffect(() => {
    if (currentProblem.testcases[0]) {
      setCustomInput(currentProblem.testcases[0].input);
    }
    const lang = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId);
    if (lang) {
        setSourceCode(lang.defaultCode);
    }
  }, [currentProblem, selectedLanguageId])

  const handleLanguageChange = (id: number) => {
    setSelectedLanguageId(id)
  }

  const fetchSubmission = useCallback(async (token: string, iteration = 1): Promise<ExecutionResult | null> => {
    if (abortRef.current) return null;

    if (iteration >= 100) {
      return {
        status: { id: 5, description: 'Time Limit Exceeded' },
        stderr: 'Maximum number of probe requests reached.'
      };
    }

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions/${token}?base64_encoded=true`);
      if (abortRef.current) return null;

      const data = await response.json();

      if (data.status.id <= 2) { // In Queue or Processing
        return new Promise((resolve) => {
           pollingRef.current = setTimeout(() => resolve(fetchSubmission(token, iteration + 1)), 1000);
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
      if (abortRef.current) return null;
      console.error('Error fetching submission:', error);
      return {
        status: { id: 13, description: 'Internal Error' },
        stderr: 'Failed to fetch submission results.'
      };
    }
  }, []);

  const runCode = useCallback(async (code: string, languageId: number, stdin: string = "", isSubmit: boolean = false) => {
    if (pollingRef.current) clearTimeout(pollingRef.current);

    setIsRunning(true);
    setIsSubmitting(isSubmit);
    setExecutionResult(null);
    if (isMobile) setActiveTab('testcase');

    try {
      // If it's a submit, we could potentially run all testcases.
      // For now, let's just mark it as submit in the result.
      const response = await fetch(`${CE_BASE_URL}/submissions?base64_encoded=true&wait=false`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source_code: toBase64(code),
          language_id: languageId,
          stdin: toBase64(stdin),
          redirect_stderr_to_stdout: false
        }),
      });

      if (abortRef.current) return;

      const data = await response.json();
      if (data.token) {
        const result = await fetchSubmission(data.token);
        if (result) {
            setExecutionResult(result);
        }
      } else {
        throw new Error('No token received');
      }
    } catch (error) {
      if (abortRef.current) return;
      console.error('Error running code:', error);
      setExecutionResult({
        status: { id: 13, description: 'Internal Error' },
        stderr: 'Failed to initiate code execution.'
      });
    } finally {
      setIsRunning(false);
      setIsSubmitting(false);
    }
  }, [fetchSubmission, isMobile]);

  const handleRun = () => {
    runCode(sourceCode, selectedLanguageId, customInput, false);
  }

  const handleSubmit = () => {
    // For submit, use the first testcase input as default if customInput is empty
    const input = customInput || currentProblem.testcases[0]?.input || "";
    runCode(sourceCode, selectedLanguageId, input, true);
  }

  const handleToggleTheme = () => {
    const themeBtn = document.getElementById('procode-theme-toggle-btn')
    if (themeBtn) themeBtn.click()
  }

  const handleSettingsClick = () => {
    window.location.href = 'settings.html'
  }

  const handleAppsClick = () => {
    window.location.href = 'apps.html'
  }

  const handleProblemListClick = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <div className="procode-app" style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0f0f0f' }}>
      <Header
        onRun={handleRun}
        onSubmit={handleSubmit}
        onToggleTheme={handleToggleTheme}
        onSettingsClick={handleSettingsClick}
        onAppsClick={handleAppsClick}
        onProblemListClick={handleProblemListClick}
        isRunning={isRunning}
      />

      <ProblemListDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        problems={allProblems}
        onSelectProblem={selectProblem}
        currentProblemId={currentProblem.id}
      />

      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {isMobile ? (
          <div className="mobile-layout" style={{ height: '100%', overflowY: 'auto', paddingBottom: '70px' }}>
            {activeTab === 'description' && <ProblemPanel problem={currentProblem} />}
            {activeTab === 'editor' && (
              <EditorPanel
                code={sourceCode}
                onChange={(value) => setSourceCode(value || '')}
                selectedLanguageId={selectedLanguageId}
                onLanguageChange={handleLanguageChange}
              />
            )}
            {activeTab === 'testcase' && (
              <TestResultsPanel
                result={executionResult}
                isRunning={isRunning}
                problem={currentProblem}
                customInput={customInput}
                setCustomInput={setCustomInput}
              />
            )}
          </div>
        ) : (
          <div className="desktop-layout" style={{ height: '100%' }}>
            <Group orientation="horizontal">
              <Panel defaultSize={35} minSize={20}>
                <ProblemPanel problem={currentProblem} />
              </Panel>

              <Separator className="resize-handle-h" />

              <Panel defaultSize={65}>
                <Group orientation="vertical">
                  <Panel defaultSize={65} minSize={30}>
                    <EditorPanel
                      code={sourceCode}
                      onChange={(value) => setSourceCode(value || '')}
                      selectedLanguageId={selectedLanguageId}
                      onLanguageChange={handleLanguageChange}
                    />
                  </Panel>

                  <Separator className="resize-handle-v" />

                  <Panel defaultSize={35} minSize={20}>
                    <TestResultsPanel
                      result={executionResult}
                      isRunning={isRunning}
                      problem={currentProblem}
                      customInput={customInput}
                      setCustomInput={setCustomInput}
                      isSubmitting={isSubmitting}
                    />
                  </Panel>
                </Group>
              </Panel>
            </Group>
          </div>
        )}
      </main>

      {isMobile && (
        <MobileFooter
          onRun={handleRun}
          onSubmit={handleSubmit}
          onTabChange={setActiveTab}
          activeTab={activeTab}
          isRunning={isRunning}
        />
      )}

      {!isMobile && (
        <div className="procode-showCopyright" style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666', borderTop: '1px solid #222', backgroundColor: '#1a1a1a' }}>
          © 2016-2026 ProCode IDE – All Rights Reserved. Empowering developers worldwide.
        </div>
      )}
    </div>
  )
}

export default App
