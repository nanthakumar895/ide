import React, { useState, useEffect } from 'react'
import { CheckCircle2, XCircle, Terminal, Loader2, AlertCircle, Info } from 'lucide-react'
import { ExecutionResult, Problem } from '../types'

interface TestResultsPanelProps {
  results: Record<number, ExecutionResult>
  isRunning: boolean
  problem: Problem
  customInput: string
  setCustomInput: (val: string) => void
  isSubmitting?: boolean
  isSubmissionResult?: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({
  results,
  isRunning,
  problem,
  customInput,
  setCustomInput,
  isSubmitting = false,
  isSubmissionResult = false
}) => {
  const [selectedTestCase, setSelectedTestCase] = useState(0)
  const [activeMode, setActiveMode] = useState<'testcase' | 'result'>(Object.keys(results).length > 0 ? 'result' : 'testcase')

  const effectiveIsSubmitting = isRunning ? isSubmitting : isSubmissionResult;
  const resultsExist = Object.keys(results).length > 0
  const currentResult = results[selectedTestCase] ?? results[0]

  // Define what the current testcase metadata is for display
  const testcase = effectiveIsSubmitting
    ? (problem.testcases[selectedTestCase] || problem.testcases[0])
    : { input: customInput, expected: problem.testcases[selectedTestCase]?.expected || "" }

  // Automatically switch to result tab when running
  useEffect(() => {
    if (isRunning) {
      setActiveMode('result');
      // Always show first result initially when running/submitting
      setSelectedTestCase(0);
    }
  }, [isRunning]);

  // If results just appeared and we were in testcase mode, maybe switch?
  // No, the useEffect above handles the start. When finished, it stays in result mode.

  const isPassed = (res: ExecutionResult, expected: string) => {
    if (!res || res.status.id !== 3) return false
    if (!expected) return true; // Can't fail if no expectation
    return (res.stdout || "").trim() === expected.trim()
  }

  const getStatusColor = (res: ExecutionResult | undefined, expected: string) => {
    if (!res) return 'var(--secondary-text)'
    if (res.status.id !== 3) return 'var(--error-color)'
    if (!effectiveIsSubmitting) return 'var(--success-color)' // Run mode is green if finished successfully
    return isPassed(res, expected) ? 'var(--success-color)' : 'var(--error-color)'
  }

  const getStatusLabel = (res: ExecutionResult, expected: string) => {
    if (res.status.id === 3) {
      if (!effectiveIsSubmitting) return 'Finished'
      return isPassed(res, expected) ? 'Accepted' : 'Wrong Answer'
    }
    return res.status.description
  }

  const getStatusIcon = (res: ExecutionResult, expected: string) => {
    const color = getStatusColor(res, expected)
    if (res.status.id === 3) {
      if (!effectiveIsSubmitting || isPassed(res, expected)) {
        return <CheckCircle2 size={22} color={color} />
      }
    }
    return <XCircle size={22} color={color} />
  }

  const allPassed = effectiveIsSubmitting && problem.testcases.every((tc, idx) => results[idx] && isPassed(results[idx], tc.expected))

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--panel-bg)', overflow: 'hidden' }}>
      <div style={{
        height: '40px',
        backgroundColor: 'var(--dark-bg)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderBottom: '1px solid var(--border-color)',
        gap: '15px',
        flexShrink: 0
      }}>
        <button
          onClick={() => setActiveMode('testcase')}
          style={{
            background: 'none',
            border: 'none',
            height: '100%',
            padding: '0 8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeMode === 'testcase' ? 'var(--text-color)' : 'var(--secondary-text)',
            borderBottom: activeMode === 'testcase' ? '2px solid var(--accent-color)' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          Testcase
        </button>
        <button
          onClick={() => {
            if (resultsExist || isRunning) setActiveMode('result');
          }}
          style={{
            background: 'none',
            border: 'none',
            height: '100%',
            padding: '0 8px',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: isRunning || resultsExist ? 'pointer' : 'default',
            color: activeMode === 'result' ? 'var(--text-color)' : 'var(--secondary-text)',
            borderBottom: activeMode === 'result' ? '2px solid var(--accent-color)' : '2px solid transparent',
            transition: 'all 0.2s',
            opacity: isRunning || resultsExist ? 1 : 0.5,
          }}
        >
          Result
        </button>
      </div>

      <div style={{ flex: 1, padding: '16px', overflowY: 'auto' }}>
        {activeMode === 'testcase' ? (
          <div className="fade-in">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {problem.testcases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedTestCase(idx);
                    setCustomInput(problem.testcases[idx]?.input || "");
                  }}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    backgroundColor: selectedTestCase === idx ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                    color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    transition: 'all 0.2s'
                  }}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: 'var(--secondary-text)', marginBottom: '8px', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Input</div>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                spellCheck={false}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  backgroundColor: 'var(--darker-bg)',
                  padding: '12px',
                  borderRadius: '8px',
                  color: 'var(--text-color)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  border: '1px solid var(--border-color)',
                  resize: 'vertical',
                  outline: 'none',
                  lineHeight: '1.5'
                }}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-text)', fontSize: '0.75rem', opacity: 0.7 }}>
               <Info size={14} />
               <span>Click 'Run' to execute this input.</span>
            </div>
          </div>
        ) : (
          <div className="fade-in">
            {isRunning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', gap: '15px' }}>
                <Loader2 className="animate-spin" size={40} color="var(--accent-color)" strokeWidth={2} />
                <div style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', fontWeight: 500 }}>
                    {isSubmitting ? 'Submitting...' : 'Running...'}
                </div>
              </div>
            ) : !resultsExist ? (
              <div style={{ color: 'var(--secondary-text)', textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <Terminal size={40} opacity={0.2} />
                <div style={{ fontSize: '0.9rem' }}>Run code to see results.</div>
              </div>
            ) : (
              <div>
                { (effectiveIsSubmitting || resultsExist) && (
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                    {problem.testcases.map((tc, idx) => {
                      const res = results[idx];
                      const color = getStatusColor(res, tc.expected);

                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedTestCase(idx)}
                          style={{
                            padding: '6px 12px',
                            borderRadius: '8px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: selectedTestCase === idx ? 'rgba(255,255,255,0.05)' : 'transparent',
                            color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                            cursor: 'pointer',
                            fontSize: '0.8rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 600,
                          }}
                        >
                          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: color }}></div>
                          Case {idx + 1}
                        </button>
                      );
                    })}
                  </div>
                )}

                {currentResult ? (
                  <div className="fade-in">
                    <div style={{
                      backgroundColor: `${getStatusColor(currentResult, testcase.expected)}10`,
                      borderRadius: '10px',
                      padding: '16px',
                      marginBottom: '20px',
                      border: `1px solid ${getStatusColor(currentResult, testcase.expected)}25`
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          {getStatusIcon(currentResult, testcase.expected)}
                          <span style={{
                            color: getStatusColor(currentResult, testcase.expected),
                            fontWeight: 700,
                            fontSize: '1.2rem',
                          }}>
                            {getStatusLabel(currentResult, testcase.expected)}
                          </span>
                        </div>
                        {currentResult.time && (
                          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--secondary-text)' }}>
                            {Math.round(parseFloat(currentResult.time) * 1000)} ms
                          </div>
                        )}
                      </div>

                      {allPassed && (
                         <div style={{ color: 'var(--success-color)', fontSize: '0.85rem', fontWeight: 600, marginTop: '8px' }}>
                            All test cases passed!
                         </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Input</div>
                        <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '12px', borderRadius: '8px', margin: 0, color: 'var(--text-color)', fontFamily: "'JetBrains Mono', monospace", border: '1px solid var(--border-color)', fontSize: '0.85rem', lineHeight: '1.5', overflowX: 'auto' }}>{testcase.input || "(no input)"}</pre>
                      </div>

                      {currentResult.stdout !== undefined && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ color: 'var(--secondary-text)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Output</div>
                          <pre style={{
                            backgroundColor: 'var(--darker-bg)',
                            padding: '12px',
                            borderRadius: '8px',
                            margin: 0,
                            whiteSpace: 'pre-wrap',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.85rem',
                            border: '1px solid var(--border-color)',
                            color: (effectiveIsSubmitting && !isPassed(currentResult, testcase.expected)) ? 'var(--error-color)' : 'var(--text-color)',
                            lineHeight: '1.5'
                          }}>{currentResult.stdout || "(no output)"}</pre>
                        </div>
                      )}

                      { (effectiveIsSubmitting || resultsExist) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ color: 'var(--secondary-text)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Expected</div>
                          <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '12px', borderRadius: '8px', margin: 0, color: 'var(--text-color)', fontFamily: "'JetBrains Mono', monospace", border: '1px solid var(--border-color)', fontSize: '0.85rem', lineHeight: '1.5', overflowX: 'auto' }}>{testcase.expected}</pre>
                        </div>
                      )}

                      {currentResult.compile_output && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ color: 'var(--error-color)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Compilation Error</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.05)', padding: '12px', borderRadius: '8px', margin: 0, color: 'var(--error-color)', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.15)', fontSize: '0.8rem', lineHeight: '1.5' }}>{currentResult.compile_output}</pre>
                        </div>
                      )}

                      {currentResult.stderr && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          <div style={{ color: 'var(--error-color)', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' }}>Runtime Error</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.03)', padding: '12px', borderRadius: '8px', margin: 0, color: 'var(--error-color)', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.1)', fontSize: '0.8rem', lineHeight: '1.5' }}>{currentResult.stderr}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', gap: '15px' }}>
                      <AlertCircle size={40} color="var(--error-color)" />
                      <div style={{ color: 'var(--secondary-text)', fontSize: '0.9rem' }}>No result received from execution engine.</div>
                   </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestResultsPanel
