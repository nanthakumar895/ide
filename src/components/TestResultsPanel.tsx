import React, { useState, useEffect } from 'react'
import { ExecutionResult, Problem } from '../types'
import { Loader2, CheckCircle2, XCircle, AlertCircle, Info, Terminal, ChevronUp } from 'lucide-react'

interface TestResultsPanelProps {
  result: ExecutionResult | null
  isRunning?: boolean
  problem: Problem
  customInput: string
  setCustomInput: (val: string) => void
  isSubmitting?: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({
  result,
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
    } else if (result) {
      setActiveTab('result')
    }
  }, [isRunning, result])

  useEffect(() => {
    if (problem.testcases[selectedTestCase]) {
      setCustomInput(problem.testcases[selectedTestCase].input);
    }
  }, [selectedTestCase, problem, setCustomInput])

  const testcase = problem.testcases[selectedTestCase] || problem.testcases[0] || { input: "", expected: "" };

  const getStatusColor = (id: number) => {
    switch (id) {
      case 3: return '#2cbb5d'; // Accepted
      case 4: return '#ef4743'; // Wrong Answer
      case 5: return '#ffa116'; // Time Limit Exceeded
      case 6: return '#ef4743'; // Compilation Error
      default: return '#ef4743'; // Error
    }
  };

  const getStatusIcon = (id: number) => {
    switch (id) {
      case 3: return <CheckCircle2 size={24} color="#2cbb5d" />;
      case 4: return <XCircle size={24} color="#ef4743" />;
      case 5: return <AlertCircle size={24} color="#ffa116" />;
      default: return <Info size={24} color="#ef4743" />;
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1a1a1a', borderTop: '1px solid #222' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        height: '40px',
        borderBottom: '1px solid #222',
        backgroundColor: '#1a1a1a'
      }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <button
            onClick={() => setActiveTab('testcase')}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === 'testcase' ? '#fff' : '#888',
              borderBottom: activeTab === 'testcase' ? '2px solid #fff' : '2px solid transparent',
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
              color: activeTab === 'result' ? '#fff' : '#888',
              borderBottom: activeTab === 'result' ? '2px solid #fff' : '2px solid transparent',
              padding: '0 15px',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: activeTab === 'result' ? 600 : 400
            }}
          >
            Result
          </button>
        </div>
        <div style={{ display: 'flex', gap: '15px', color: '#666' }}>
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
                    backgroundColor: selectedTestCase === idx ? '#333' : 'rgba(255,255,255,0.03)',
                    color: selectedTestCase === idx ? '#fff' : '#888',
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
              <div style={{ color: '#888', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Input</div>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '100px',
                  backgroundColor: '#0f0f0f',
                  padding: '15px',
                  borderRadius: '8px',
                  color: '#eff1f6',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.9rem',
                  border: '1px solid #333',
                  resize: 'vertical',
                  outline: 'none',
                  lineHeight: '1.5'
                }}
              />
            </div>
            <div>
              <div style={{ color: '#888', marginBottom: '10px', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Expected</div>
              <pre style={{
                backgroundColor: '#0f0f0f',
                padding: '15px',
                borderRadius: '8px',
                margin: 0,
                whiteSpace: 'pre-wrap',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.9rem',
                border: '1px solid #333',
                color: '#eff1f6',
                lineHeight: '1.5'
              }}>
                {testcase.expected}
              </pre>
            </div>
          </div>
        ) : (
          <div className="fade-in" style={{ color: '#fff' }}>
            {isRunning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', gap: '20px' }}>
                <div style={{ position: 'relative', width: '48px', height: '48px' }}>
                  <Loader2 className="animate-spin" size={48} color="#2cbb5d" style={{ position: 'absolute' }} />
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '24px', height: '24px', background: '#1a1a1a', borderRadius: '50%' }}></div>
                </div>
                <div style={{ color: '#aaa', fontSize: '1rem', fontWeight: 500 }}>{isSubmitting ? 'Submitting...' : 'Running...'}</div>
              </div>
            ) : !result ? (
              <div style={{ color: '#666', textAlign: 'center', marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                <Terminal size={40} opacity={0.3} />
                <div style={{ fontSize: '0.95rem' }}>Run your code to see the test results.</div>
              </div>
            ) : (
              <div>
                <div style={{
                  backgroundColor: `${getStatusColor(result.status.id)}15`,
                  borderRadius: '12px',
                  padding: '20px',
                  marginBottom: '25px',
                  border: `1px solid ${getStatusColor(result.status.id)}30`
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {getStatusIcon(result.status.id)}
                      <span style={{
                        color: getStatusColor(result.status.id),
                        fontWeight: 700,
                        fontSize: '1.4rem'
                      }}>
                        {result.status.description}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                       {result.time && (
                         <div style={{ textAlign: 'right' }}>
                           <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', marginBottom: '2px' }}>Runtime</div>
                           <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{Math.round(parseFloat(result.time) * 1000)} ms</div>
                         </div>
                       )}
                       {result.memory && (
                         <div style={{ textAlign: 'right', marginLeft: '15px' }}>
                           <div style={{ fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', marginBottom: '2px' }}>Memory</div>
                           <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{(result.memory / 1024).toFixed(1)} MB</div>
                         </div>
                       )}
                    </div>
                  </div>

                  {result.status.id === 3 && (
                    <div style={{ fontSize: '0.9rem', color: '#2cbb5d', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={16} /> All test cases passed!
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {result.compile_output && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#ef4743', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Compilation Error</div>
                      <pre style={{
                        backgroundColor: 'rgba(239, 71, 67, 0.08)',
                        padding: '15px',
                        borderRadius: '8px',
                        margin: 0,
                        color: '#ef4743',
                        fontFamily: 'JetBrains Mono, monospace',
                        whiteSpace: 'pre-wrap',
                        border: '1px solid rgba(239, 71, 67, 0.2)',
                        fontSize: '0.85rem',
                        lineHeight: '1.5'
                      }}>{result.compile_output}</pre>
                    </div>
                  )}

                  {result.stdout && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#888', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Standard Output</div>
                      <pre style={{
                        backgroundColor: '#0f0f0f',
                        padding: '15px',
                        borderRadius: '8px',
                        margin: 0,
                        whiteSpace: 'pre-wrap',
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '0.9rem',
                        border: '1px solid #333',
                        color: '#eff1f6',
                        lineHeight: '1.5'
                      }}>{result.stdout}</pre>
                    </div>
                  )}

                  {result.stderr && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#ef4743', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Standard Error</div>
                      <pre style={{
                        backgroundColor: 'rgba(239, 71, 67, 0.05)',
                        padding: '15px',
                        borderRadius: '8px',
                        margin: 0,
                        color: '#ef4743',
                        fontFamily: 'JetBrains Mono, monospace',
                        whiteSpace: 'pre-wrap',
                        border: '1px solid rgba(239, 71, 67, 0.15)',
                        fontSize: '0.85rem',
                        lineHeight: '1.5'
                      }}>{result.stderr}</pre>
                    </div>
                  )}

                  {result.status.id === 4 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ color: '#ef4743', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>Expected Output</div>
                      <pre style={{
                        backgroundColor: 'rgba(239, 71, 67, 0.05)',
                        padding: '15px',
                        borderRadius: '8px',
                        margin: 0,
                        color: '#eff1f6',
                        fontFamily: 'JetBrains Mono, monospace',
                        whiteSpace: 'pre-wrap',
                        border: '1px solid rgba(239, 71, 67, 0.2)',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>{testcase.expected}</pre>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestResultsPanel
