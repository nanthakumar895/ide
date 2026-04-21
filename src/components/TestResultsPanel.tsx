import React, { useState, useEffect } from 'react'
import { ExecutionResult, Problem } from '../types'
import { Loader2, CheckCircle2, XCircle, AlertCircle, Info } from 'lucide-react'

interface TestResultsPanelProps {
  result: ExecutionResult | null
  isRunning?: boolean
  problem: Problem
  customInput: string
  setCustomInput: (val: string) => void
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({ result, isRunning = false, problem, customInput, setCustomInput }) => {
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
      case 3: return <CheckCircle2 size={20} color="#2cbb5d" />;
      case 4: return <XCircle size={20} color="#ef4743" />;
      case 5: return <AlertCircle size={20} color="#ffa116" />;
      default: return <Info size={20} color="#ef4743" />;
    }
  };

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1a1a1a', borderTop: '1px solid #222' }}>
      <div className="ui secondary pointing inverted menu" style={{ border: 'none', margin: '0', padding: '5px 15px 0' }}>
        <a
          className={`${activeTab === 'testcase' ? 'active' : ''} item`}
          onClick={() => setActiveTab('testcase')}
          style={{ cursor: 'pointer', fontSize: '0.9rem' }}
        >
          Testcase
        </a>
        <a
          className={`${activeTab === 'result' ? 'active' : ''} item`}
          onClick={() => setActiveTab('result')}
          style={{ cursor: 'pointer', fontSize: '0.9rem' }}
        >
          Result
        </a>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '15px' }}>
        {activeTab === 'testcase' ? (
          <div style={{ color: '#ccc' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
              {problem.testcases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedTestCase(idx)}
                  style={{
                    padding: '4px 12px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: selectedTestCase === idx ? '#333' : 'transparent',
                    color: selectedTestCase === idx ? '#fff' : '#888',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                    transition: 'all 0.2s'
                  }}
                >
                  Case {idx + 1}
                </button>
              ))}
            </div>

            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#aaa', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 500 }}>Input:</div>
              <textarea
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '80px',
                  backgroundColor: '#252525',
                  padding: '12px',
                  borderRadius: '8px',
                  margin: 0,
                  color: '#fff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.9rem',
                  border: '1px solid #333',
                  resize: 'vertical',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ color: '#aaa', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 500 }}>Expected Output:</div>
              <pre style={{ backgroundColor: '#252525', padding: '12px', borderRadius: '8px', margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', border: '1px solid #333', opacity: 0.8 }}>
                {testcase.expected}
              </pre>
            </div>
          </div>
        ) : (
          <div style={{ color: '#fff' }}>
            {isRunning ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', gap: '12px' }}>
                <Loader2 className="animate-spin" size={32} color="#2cbb5d" />
                <div style={{ color: '#aaa', fontSize: '0.95rem' }}>Executing code...</div>
              </div>
            ) : !result ? (
              <div style={{ color: '#888', textAlign: 'center', marginTop: '60px', fontSize: '0.95rem' }}>
                Run your code to see the results here.
              </div>
            ) : (
              <div className="fade-in">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {getStatusIcon(result.status.id)}
                    <span style={{
                      color: getStatusColor(result.status.id),
                      fontWeight: 'bold',
                      fontSize: '1.25rem'
                    }}>
                      {result.status.description}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                     {result.time && <span style={{ color: '#aaa', fontSize: '0.75rem', backgroundColor: '#252525', padding: '4px 10px', borderRadius: '15px', border: '1px solid #333' }}>Runtime: {Math.round(parseFloat(result.time) * 1000)} ms</span>}
                     {result.memory && <span style={{ color: '#aaa', fontSize: '0.75rem', backgroundColor: '#252525', padding: '4px 10px', borderRadius: '15px', border: '1px solid #333' }}>Memory: {result.memory} KB</span>}
                  </div>
                </div>

                {result.compile_output && (
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ color: '#ef4743', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 600 }}>Compile Error:</div>
                    <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.05)', padding: '12px', borderRadius: '8px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.2)', fontSize: '0.85rem' }}>{result.compile_output}</pre>
                  </div>
                )}

                {result.stdout && (
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ color: '#aaa', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 500 }}>Output:</div>
                    <pre style={{ backgroundColor: '#252525', padding: '12px', borderRadius: '8px', margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'JetBrains Mono, monospace', fontSize: '0.9rem', border: '1px solid #333' }}>{result.stdout}</pre>
                  </div>
                )}

                {result.stderr && (
                  <div style={{ marginBottom: '15px' }}>
                    <div style={{ color: '#ef4743', marginBottom: '8px', fontSize: '0.85rem', fontWeight: 500 }}>Stderr:</div>
                    <pre style={{ backgroundColor: 'rgba(239, 71, 67, 0.05)', padding: '12px', borderRadius: '8px', margin: 0, color: '#ef4743', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', border: '1px solid rgba(239, 71, 67, 0.2)', fontSize: '0.85rem' }}>{result.stderr}</pre>
                  </div>
                )}

                {result.status.id === 3 && result.stdout && testcase.expected && (
                  <div style={{
                    marginTop: '20px',
                    padding: '15px',
                    borderRadius: '8px',
                    backgroundColor: result.stdout.trim() === testcase.expected.trim() ? 'rgba(44, 187, 93, 0.1)' : 'rgba(239, 71, 67, 0.1)',
                    border: `1px solid ${result.stdout.trim() === testcase.expected.trim() ? '#2cbb5d' : '#ef4743'}`,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}>
                     {result.stdout.trim() === testcase.expected.trim() ? (
                       <><CheckCircle2 size={18} color="#2cbb5d" /> <span style={{ color: '#2cbb5d', fontWeight: 600 }}>Test Passed!</span></>
                     ) : (
                       <><XCircle size={18} color="#ef4743" /> <span style={{ color: '#ef4743', fontWeight: 600 }}>Test Failed: Output does not match expected.</span></>
                     )}
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
