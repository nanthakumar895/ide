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
    // Reset abort flag on problem change if needed, but usually unmount is what matters.
    // However, if we stay on the same component but change state, we just need to cancel pending polls.
  }, [currentProblem])

  const handleLanguageChange = (id: number) => {
    setSelectedLanguageId(id)
    const lang = SUPPORTED_LANGUAGES.find(l => l.id === id)
    if (lang) {
      setSourceCode(lang.defaultCode)
    }
  }

  const fetchSubmission = useCallback(async (token: string, iteration = 1): Promise<void> => {
    if (abortRef.current) return;

    if (iteration >= 100) {
      setExecutionResult({
        status: { id: 5, description: 'Time Limit Exceeded' },
        stderr: 'Maximum number of probe requests reached.'
      });
      setIsRunning(false);
      return;
    }

    try {
      const response = await fetch(`${CE_BASE_URL}/submissions/${token}?base64_encoded=true`);
      if (abortRef.current) return;

      const data = await response.json();

      if (data.status.id <= 2) { // In Queue or Processing
        pollingRef.current = setTimeout(() => fetchSubmission(token, iteration + 1), 1000);
      } else {
        setExecutionResult({
          status: data.status,
          time: data.time,
          memory: data.memory,
          stdout: data.stdout ? fromBase64(data.stdout) : undefined,
          stderr: data.stderr ? fromBase64(data.stderr) : undefined,
          compile_output: data.compile_output ? fromBase64(data.compile_output) : undefined,
        });
        setIsRunning(false);
      }
    } catch (error) {
      if (abortRef.current) return;
      console.error('Error fetching submission:', error);
      setExecutionResult({
        status: { id: 13, description: 'Internal Error' },
        stderr: 'Failed to fetch submission results.'
      });
      setIsRunning(false);
    }
  }, []);

  const runCode = useCallback(async (code: string, languageId: number, stdin: string = "") => {
    if (pollingRef.current) clearTimeout(pollingRef.current);

    setIsRunning(true);
    setExecutionResult(null);
    if (isMobile) setActiveTab('testcase');

    try {
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
        fetchSubmission(data.token);
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
      setIsRunning(false);
    }
  }, [fetchSubmission, isMobile]);

  const handleRun = () => {
    runCode(sourceCode, selectedLanguageId, customInput);
  }

  const handleSubmit = () => {
    runCode(sourceCode, selectedLanguageId, customInput);
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
          <div className="mobile-layout" style={{ height: '100%', overflowY: 'auto' }}>
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
              <Panel defaultSize={30} minSize={20}>
                <ProblemPanel problem={currentProblem} />
              </Panel>

              <Separator className="resize-handle-h" />

              <Panel defaultSize={70}>
                <Group orientation="vertical">
                  <Panel defaultSize={70} minSize={30}>
                    <EditorPanel
                      code={sourceCode}
                      onChange={(value) => setSourceCode(value || '')}
                      selectedLanguageId={selectedLanguageId}
                      onLanguageChange={handleLanguageChange}
                    />
                  </Panel>

                  <Separator className="resize-handle-v" />

                  <Panel defaultSize={30} minSize={20}>
                    <TestResultsPanel
                      result={executionResult}
                      isRunning={isRunning}
                      problem={currentProblem}
                      customInput={customInput}
                      setCustomInput={setCustomInput}
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
        <div className="procode-showCopyright" style={{ height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#666', borderTop: '1px solid #222' }}>
          © 2016-2026 ProCode – All Rights Reserved.
        </div>
      )}
    </div>
  )
}

export default App
