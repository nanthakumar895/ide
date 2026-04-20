import React, { useState } from 'react'
import { Terminal, Play, AlertCircle, Clock, Database, CheckCircle2, XCircle } from 'lucide-react'
import { ExecutionResult } from '../types'

interface TestResultsPanelProps {
  stdin: string
  setStdin: (val: string) => void
  result: ExecutionResult | null
  isLoading: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({ stdin, setStdin, result, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');

  React.useEffect(() => {
    if (result) setActiveTab('result');
  }, [result]);

  const isSuccess = result?.status.id === 3;

  return (
    <div className="panel-container" style={{ height: 'calc(100% - 8px)', margin: '4px' }}>
      <div className="panel-header" style={{ display: 'flex', gap: '15px' }}>
        <div
            onClick={() => setActiveTab('testcase')}
            style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: activeTab === 'testcase' ? '#eff1f6' : '#aaa',
                borderBottom: activeTab === 'testcase' ? '2px solid #eff1f6' : 'none',
                height: '100%',
                padding: '0 4px',
                fontWeight: 500
            }}
        >
          <Terminal size={14} style={{ marginRight: '8px' }} />
          <span>Testcase</span>
        </div>
        <div
            onClick={() => setActiveTab('result')}
            style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                color: activeTab === 'result' ? '#eff1f6' : '#aaa',
                borderBottom: activeTab === 'result' ? '2px solid #eff1f6' : 'none',
                height: '100%',
                padding: '0 4px',
                fontWeight: 500
            }}
        >
          <Play size={14} style={{ marginRight: '8px' }} />
          <span>Result</span>
        </div>
      </div>

      <div className="panel-content" style={{ padding: '20px' }}>
        {activeTab === 'testcase' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{ color: '#eff1f6', background: '#333', padding: '6px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: 500 }}>Case 1</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ color: '#aaa', fontSize: '0.85rem', fontWeight: 500 }}>Input:</div>
                <textarea
                  value={stdin}
                  onChange={(e) => setStdin(e.target.value)}
                  style={{
                    width: '100%',
                    minHeight: '120px',
                    background: '#252525',
                    border: '1px solid #333',
                    borderRadius: '8px',
                    color: '#eff1f6',
                    fontFamily: "'JetBrains Mono', monospace",
                    padding: '12px',
                    resize: 'none',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                  placeholder="Enter input here..."
                />
            </div>
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100px', gap: '12px', color: '#aaa' }}>
                <div className="ui active mini inline loader"></div>
                <span style={{ fontSize: '0.95rem' }}>Executing code...</span>
              </div>
            ) : result ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {isSuccess ? <CheckCircle2 size={24} color="#2cbb5d" /> : <XCircle size={24} color="#ef4444" />}
                    <div>
                        <div style={{
                            fontSize: '1.25rem',
                            fontWeight: '700',
                            color: isSuccess ? '#2cbb5d' : '#ef4444',
                        }}>
                            {result.status.description}
                        </div>
                        <div style={{ display: 'flex', gap: '15px', color: '#aaa', fontSize: '0.8rem', marginTop: '4px' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Clock size={12} /> {result.time || 0}s
                            </span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Database size={12} /> {result.memory || 0} KB
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {result.stdout !== null && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ color: '#aaa', fontSize: '0.85rem', fontWeight: 500 }}>Output:</div>
                            <pre style={{
                                background: '#252525',
                                padding: '12px',
                                borderRadius: '8px',
                                color: '#eff1f6',
                                margin: 0,
                                overflowX: 'auto',
                                fontFamily: "'JetBrains Mono', monospace",
                                fontSize: '0.9rem',
                                border: '1px solid #333'
                            }}>
                                {result.stdout || <span style={{ color: '#666', fontStyle: 'italic' }}>no output</span>}
                            </pre>
                        </div>
                    )}

                    {(result.stderr || result.compile_output) && (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ color: '#ef4444', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '5px' }}>
                                <AlertCircle size={14} /> Error:
                            </div>
                            <pre style={{
                                background: '#2d1e1e',
                                padding: '12px',
                                borderRadius: '8px',
                                color: '#ffb3b3',
                                margin: 0,
                                overflowX: 'auto',
                                fontSize: '0.85rem',
                                fontFamily: "'JetBrains Mono', monospace",
                                border: '1px solid #4a2a2a'
                            }}>
                                {result.stderr || result.compile_output}
                            </pre>
                        </div>
                    )}
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '150px', color: '#666', gap: '10px' }}>
                <Play size={40} style={{ opacity: 0.2 }} />
                <span style={{ fontSize: '0.95rem' }}>Click "Run" to execute your code</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestResultsPanel
