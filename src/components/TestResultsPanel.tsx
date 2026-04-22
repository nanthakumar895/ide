import React, { useState } from 'react'
import { CheckCircle2, XCircle, Terminal, Loader2 } from 'lucide-react'
import { ExecutionResult, Problem } from '../types'

interface TestResultsPanelProps {
  results: Record<number, ExecutionResult>
  isRunning: boolean
  problem: Problem
  customInput: string
  setCustomInput: (val: string) => void
  isSubmitting?: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({
  results,
  isRunning,
  problem,
  customInput,
  setCustomInput,
  isSubmitting = false
}) => {
  const [selectedTestCase, setSelectedTestCase] = useState(0)
  const [activeMode, setActiveMode] = useState<'testcase' | 'result'>('testcase')

  const resultsExist = Object.keys(results).length > 0
  const currentResult = results[selectedTestCase]
  const testcase = problem.testcases[selectedTestCase] || problem.testcases[0]

  const isPassed = (res: ExecutionResult, expected: string) => {
    if (!res || res.status.id !== 3) return false
    return (res.stdout || "").trim() === expected.trim()
  }

  const getStatusColor = (res: ExecutionResult | undefined, expected: string) => {
    if (!res) return 'var(--secondary-text)'
    if (res.status.id !== 3) return 'var(--error-color)'
    return isPassed(res, expected) ? 'var(--success-color)' : 'var(--error-color)'
  }

  const getStatusLabel = (res: ExecutionResult, expected: string) => {
    if (res.status.id === 3) {
      return isPassed(res, expected) ? 'Accepted' : 'Wrong Answer'
    }
    return res.status.description
  }

  const getStatusIcon = (res: ExecutionResult, expected: string) => {
    const color = getStatusColor(res, expected)
    if (res.status.id === 3 && isPassed(res, expected)) {
        return <CheckCircle2 size={24} color={color} />
    }
    return <XCircle size={24} color={color} />
  }

  const allPassed = problem.testcases.every((tc, idx) => results[idx] && isPassed(results[idx], tc.expected))

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--panel-bg)', overflow: 'hidden' }}>
      <div style={{
        height: '40px',
        backgroundColor: 'var(--dark-bg)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 15px',
        borderBottom: '1px solid var(--border-color)',
        gap: '20px'
      }}>
        <button
          onClick={() => setActiveMode('testcase')}
          style={{
            background: 'none',
            border: 'none',
            height: '100%',
            padding: '0 5px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeMode === 'testcase' ? 'var(--text-color)' : 'var(--secondary-text)',
            borderBottom: activeMode === 'testcase' ? '2px solid var(--text-color)' : '2px solid transparent',
            transition: 'all 0.2s'
          }}
        >
          Testcase
        </button>
        <button
          onClick={() => setActiveMode('result')}
          style={{
            background: 'none',
            border: 'none',
            height: '100%',
            padding: '0 5px',
            fontSize: '0.85rem',
            fontWeight: 600,
            cursor: 'pointer',
            color: activeMode === 'result' ? 'var(--text-color)' : 'var(--secondary-text)',
            borderBottom: activeMode === 'result' ? '2px solid var(--text-color)' : '2px solid transparent',
            transition: 'all 0.2s',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}
        >
          Test Result
          {resultsExist && !isRunning && (
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: allPassed ? 'var(--success-color)' : 'var(--error-color)' }}></div>
          )}
        </button>
      </div>

      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }} className="custom-scrollbar">
        {activeMode === 'testcase' ? (
          <div className="fade-in">
            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
              {problem.testcases.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTestCase(idx)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '10px',
                    backgroundColor: selectedTestCase === idx ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
                    color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    transition: 'all 0.2s',
                    border: selectedTestCase === idx ? '1px solid var(--border-color)' : '1px solid transparent'
                  }}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ color: 'var(--secondary-text)', marginBottom: '10px', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Input</div>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                spellCheck={false}
                style={{
                  width: '100%',
                  minHeight: '120px',
                  backgroundColor: 'var(--darker-bg)',
                  padding: '16px',
                  borderRadius: '10px',
                  color: 'var(--text-color)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.9rem',
                  border: '1px solid var(--border-color)',
                  resize: 'vertical',
                  outline: 'none',
                  lineHeight: '1.6',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)'
                }}
              />
            </div>
          </div>
        ) : (
          <div className="fade-in">
            {isRunning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '240px', gap: '20px' }}>
                <div style={{ position: 'relative', width: '56px', height: '56px' }}>
                  <Loader2 className="animate-spin" size={56} color="var(--success-color)" strokeWidth={1.5} />
                </div>
                <div style={{ color: 'var(--secondary-text)', fontSize: '1rem', fontWeight: 500, letterSpacing: '0.5px' }}>
                    {isSubmitting ? 'Submitting solution...' : 'Running code...'}
                </div>
              </div>
            ) : !resultsExist ? (
              <div style={{ color: 'var(--secondary-text)', textAlign: 'center', marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '50%' }}>
                    <Terminal size={48} opacity={0.2} />
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 500 }}>Run your code to see the test results.</div>
              </div>
            ) : (
              <div>
                {/* Summary bar */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
                  {problem.testcases.map((tc, idx) => {
                    const res = results[idx];
                    const color = getStatusColor(res, tc.expected);

                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedTestCase(idx)}
                        style={{
                          padding: '8px 14px',
                          borderRadius: '10px',
                          border: 'none',
                          backgroundColor: selectedTestCase === idx ? 'rgba(255,255,255,0.05)' : 'transparent',
                          color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                          cursor: 'pointer',
                          fontSize: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontWeight: 600,
                          transition: 'all 0.2s'
                        }}
                      >
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color, boxShadow: `0 0 8px ${color}50` }}></div>
                        Case {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {currentResult && (
                  <div className="fade-in">
                    <div style={{
                      backgroundColor: `${getStatusColor(currentResult, testcase.expected)}08`,
                      borderRadius: '14px',
                      padding: '24px',
                      marginBottom: '28px',
                      border: `1px solid ${getStatusColor(currentResult, testcase.expected)}20`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          {getStatusIcon(currentResult, testcase.expected)}
                          <span style={{
                            color: getStatusColor(currentResult, testcase.expected),
                            fontWeight: 800,
                            fontSize: '1.6rem',
                            letterSpacing: '-0.5px'
                          }}>
                            {getStatusLabel(currentResult, testcase.expected)}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '20px' }}>
                           {currentResult.time && (
                             <div style={{ textAlign: 'right' }}>
                               <div style={{ fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase', fontWeight: 700, marginBottom: '4px' }}>Runtime</div>
                               <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-color)' }}>{Math.round(parseFloat(currentResult.time) * 1000)} ms</div>
                             </div>
                           )}
                        </div>
                      </div>

                      {allPassed && selectedTestCase === 0 && (
                         <div style={{ color: 'var(--success-color)', fontSize: '0.95rem', fontWeight: 600, marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--success-color)' }}></div>
                            You passed all test cases!
                         </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Input</div>
                        <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '16px', borderRadius: '10px', margin: 0, color: 'var(--text-color)', fontFamily: "'JetBrains Mono', monospace", border: '1px solid var(--border-color)', fontSize: '0.9rem', lineHeight: '1.6' }}>{testcase.input}</pre>
                      </div>

                      {currentResult.stdout !== undefined && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Output</div>
                          <pre style={{
                            backgroundColor: 'var(--darker-bg)',
                            padding: '16px',
                            borderRadius: '10px',
                            margin: 0,
                            whiteSpace: 'pre-wrap',
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.9rem',
                            border: '1px solid var(--border-color)',
                            color: isPassed(currentResult, testcase.expected) ? 'var(--text-color)' : 'var(--error-color)',
                            lineHeight: '1.6',
                            boxShadow: isPassed(currentResult, testcase.expected) ? 'none' : 'inset 0 0 10px rgba(239, 71, 67, 0.05)'
                          }}>{currentResult.stdout || "(no output)"}</pre>
                        </div>
                      )}

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Expected</div>
                        <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '16px', borderRadius: '10px', margin: 0, color: 'var(--text-color)', fontFamily: "'JetBrains Mono', monospace", border: '1px solid var(--border-color)', fontSize: '0.9rem', lineHeight: '1.6' }}>{testcase.expected}</pre>
                      </div>

                      {currentResult.compile_output && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ color: 'var(--error-color)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Compilation Error</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.05)', padding: '18px', borderRadius: '10px', margin: 0, color: 'var(--error-color)', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.15)', fontSize: '0.85rem', lineHeight: '1.6' }}>{currentResult.compile_output}</pre>
                        </div>
                      )}

                      {currentResult.stderr && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          <div style={{ color: 'var(--error-color)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Runtime Error (Stderr)</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.03)', padding: '18px', borderRadius: '10px', margin: 0, color: 'var(--error-color)', fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.1)', fontSize: '0.85rem', lineHeight: '1.6' }}>{currentResult.stderr}</pre>
                        </div>
                      )}
                    </div>
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
