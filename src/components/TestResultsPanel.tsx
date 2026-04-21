import React, { useState, useEffect } from 'react'
import { ExecutionResult, Problem } from '../types'
import { Loader2, CheckCircle2, XCircle, AlertCircle, Info, Terminal, ChevronUp } from 'lucide-react'

interface TestResultsPanelProps {
  results: Record<number, ExecutionResult>
  isRunning?: boolean
  problem: Problem
  customInput: string
  setCustomInput: (val: string) => void
  isSubmitting?: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({
  results,
  isRunning = false,
  problem,
  customInput,
  setCustomInput,
  isSubmitting = false
}) => {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase')
  const [selectedTestCase, setSelectedTestCase] = useState(0)

  useEffect(() => {
    if (isRunning) {
      setActiveTab('result')
      setSelectedTestCase(0)
    } else if (Object.keys(results).length > 0) {
      setActiveTab('result')
      setSelectedTestCase(0)
    }
  }, [isRunning, results])

  useEffect(() => {
    if (activeTab === 'testcase' && problem.testcases[selectedTestCase]) {
      setCustomInput(problem.testcases[selectedTestCase].input);
    }
  }, [selectedTestCase, problem, setCustomInput, activeTab])

  const currentResult = results[selectedTestCase];
  const testcase = problem.testcases[selectedTestCase] || problem.testcases[0] || { input: "", expected: "" };

  const isPassed = (res: ExecutionResult, expected: string) => {
    if (!res || res.status.id !== 3) return false;
    if (res.stdout === undefined) return false;
    return res.stdout.trim() === expected.trim();
  }

  const getStatusColor = (res: ExecutionResult, expected: string) => {
    if (!res) return '#444';
    if (res.status.id !== 3) return '#ef4743'; // Compilation error, runtime error, etc.
    return isPassed(res, expected) ? '#2cbb5d' : '#ef4743'; // Accepted vs Wrong Answer
  };

  const getStatusLabel = (res: ExecutionResult, expected: string) => {
    if (!res) return 'N/A';
    if (res.status.id !== 3) return res.status.description;
    return isPassed(res, expected) ? 'Accepted' : 'Wrong Answer';
  };

  const getStatusIcon = (res: ExecutionResult, expected: string) => {
    if (!res) return <Info size={24} color="#888" />;
    if (res.status.id !== 3) return <AlertCircle size={24} color="#ef4743" />;
    return isPassed(res, expected) ? <CheckCircle2 size={24} color="#2cbb5d" /> : <XCircle size={24} color="#ef4743" />;
  };

  const allPassed = isSubmitting && Object.keys(results).length === problem.testcases.length &&
                    problem.testcases.every((tc, i) => results[i] && isPassed(results[i], tc.expected));

  return (
    <div className="test-results-panel" style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--panel-bg)', borderTop: '1px solid var(--border-color)' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        height: '40px',
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--dark-bg)'
      }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <button
            onClick={() => setActiveTab('testcase')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'testcase' ? 'var(--text-color)' : 'var(--secondary-text)',
              borderBottom: activeTab === 'testcase' ? '2px solid var(--text-color)' : '2px solid transparent',
              padding: '0 15px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: activeTab === 'testcase' ? 600 : 400
            }}
          >
            Testcase
          </button>
          <button
            onClick={() => setActiveTab('result')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'result' ? 'var(--text-color)' : 'var(--secondary-text)',
              borderBottom: activeTab === 'result' ? '2px solid var(--text-color)' : '2px solid transparent',
              padding: '0 15px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: activeTab === 'result' ? 600 : 400
            }}
          >
            Result
          </button>
        </div>
        <div style={{ display: 'flex', gap: '15px', color: 'var(--secondary-text)' }}>
           <Terminal size={16} />
           <ChevronUp size={16} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }} className="custom-scrollbar">
        {activeTab === 'testcase' ? (
          <div className="fade-in">
            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
              {problem.testcases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTestCase(idx)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: selectedTestCase === idx ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.03)',
                    color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: 'var(--secondary-text)', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Input</div>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '100px',
                  backgroundColor: 'var(--darker-bg)',
                  padding: '15px',
                  borderRadius: '8px',
                  color: 'var(--text-color)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.9rem',
                  border: '1px solid var(--border-color)',
                  resize: 'vertical',
                  outline: 'none',
                  lineHeight: '1.5'
                }}
              />
            </div>
          </div>
        ) : (
          <div className="fade-in">
            {isRunning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', gap: '20px' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                  <Loader2 className="animate-spin" size={48} color="#2cbb5d" style={{ position: 'absolute' }} />
                </div>
                <div style={{ color: 'var(--secondary-text)', fontSize: '1rem', fontWeight: 500 }}>{isSubmitting ? 'Submitting...' : 'Running...'}</div>
              </div>
            ) : Object.keys(results).length === 0 ? (
              <div style={{ color: 'var(--secondary-text)', textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <Terminal size={40} opacity={0.3} />
                <div style={{ fontSize: '0.95rem' }}>Run your code to see the test results.</div>
              </div>
            ) : (
              <div>
                {/* Summary bar */}
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
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
                          border: 'none',
                          backgroundColor: selectedTestCase === idx ? 'rgba(0,0,0,0.05)' : 'transparent',
                          color: selectedTestCase === idx ? 'var(--text-color)' : 'var(--secondary-text)',
                          cursor: 'pointer',
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: color }}></div>
                        Case {idx + 1}
                      </button>
                    );
                  })}
                </div>

                {currentResult && (
                  <div className="fade-in">
                    <div style={{
                      backgroundColor: `${getStatusColor(currentResult, testcase.expected)}15`,
                      borderRadius: '12px',
                      padding: '20px',
                      marginBottom: '25px',
                      border: `1px solid ${getStatusColor(currentResult, testcase.expected)}30`
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          {getStatusIcon(currentResult, testcase.expected)}
                          <span style={{
                            color: getStatusColor(currentResult, testcase.expected),
                            fontWeight: 700,
                            fontSize: '1.4rem'
                          }}>
                            {getStatusLabel(currentResult, testcase.expected)}
                          </span>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                           {currentResult.time && (
                             <div style={{ textAlign: 'right' }}>
                               <div style={{ fontSize: '0.7rem', color: 'var(--secondary-text)', textTransform: 'uppercase', marginBottom: '2px' }}>Runtime</div>
                               <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-color)' }}>{Math.round(parseFloat(currentResult.time) * 1000)} ms</div>
                             </div>
                           )}
                        </div>
                      </div>

                      {allPassed && selectedTestCase === 0 && (
                         <div style={{ color: '#2cbb5d', fontSize: '0.9rem', fontWeight: 600, marginTop: '10px' }}>
                            🎉 Well done! You passed all test cases.
                         </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Input</div>
                        <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '15px', borderRadius: '8px', margin: 0, color: 'var(--text-color)', fontFamily: 'JetBrains Mono, monospace', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>{testcase.input}</pre>
                      </div>

                      {currentResult.stdout !== undefined && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Output</div>
                          <pre style={{
                            backgroundColor: 'var(--darker-bg)',
                            padding: '15px',
                            borderRadius: '8px',
                            margin: 0,
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'JetBrains Mono, monospace',
                            fontSize: '0.9rem',
                            border: '1px solid var(--border-color)',
                            color: isPassed(currentResult, testcase.expected) ? 'var(--text-color)' : '#ef4743',
                            lineHeight: '1.5'
                          }}>{currentResult.stdout || "(no output)"}</pre>
                        </div>
                      )}

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Expected</div>
                        <pre style={{ backgroundColor: 'var(--darker-bg)', padding: '15px', borderRadius: '8px', margin: 0, color: 'var(--text-color)', fontFamily: 'JetBrains Mono, monospace', border: '1px solid var(--border-color)', fontSize: '0.9rem' }}>{testcase.expected}</pre>
                      </div>

                      {currentResult.compile_output && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div style={{ color: '#ef4743', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Compilation Error</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.08)', padding: '15px', borderRadius: '8px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.2)', fontSize: '0.85rem' }}>{currentResult.compile_output}</pre>
                        </div>
                      )}

                      {currentResult.stderr && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div style={{ color: '#ef4743', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Stderr</div>
                          <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.05)', padding: '15px', borderRadius: '8px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.15)', fontSize: '0.85rem' }}>{currentResult.stderr}</pre>
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
