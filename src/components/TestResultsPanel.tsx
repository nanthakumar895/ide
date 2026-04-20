import React, { useState } from 'react'
import { Terminal, Play, AlertCircle, Clock, Database } from 'lucide-react'
import { ExecutionResult } from '../types'

interface TestResultsPanelProps {
  stdin: string
  setStdin: (val: string) => void
  result: ExecutionResult | null
  isLoading: boolean
}

const TestResultsPanel: React.FC<TestResultsPanelProps> = ({ stdin, setStdin, result, isLoading }) => {
  const [activeTab, setActiveTab] = useState<'testcase' | 'result'>('testcase');

  // If result comes in, switch to Result tab
  React.useEffect(() => {
    if (result) setActiveTab('result');
  }, [result]);

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
                padding: '0 4px'
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
                padding: '0 4px'
            }}
        >
          <Play size={14} style={{ marginRight: '8px' }} />
          <span>Result</span>
        </div>
      </div>

      <div className="panel-content">
        {activeTab === 'testcase' ? (
          <div>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
              <div style={{ color: '#eff1f6', background: '#333', padding: '4px 12px', borderRadius: '8px', fontSize: '0.85rem' }}>Case 1</div>
            </div>
            <div style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '8px' }}>Input:</div>
            <textarea
              value={stdin}
              onChange={(e) => setStdin(e.target.value)}
              style={{
                width: '100%',
                minHeight: '100px',
                background: '#252525',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#eff1f6',
                fontFamily: 'monospace',
                padding: '12px',
                resize: 'none',
                outline: 'none'
              }}
            />
          </div>
        ) : (
          <div>
            {isLoading ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#aaa' }}>
                <div className="ui active mini inline loader"></div>
                <span>Executing...</span>
              </div>
            ) : result ? (
              <div>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        color: result.status.id === 3 ? '#2cbb5d' : '#ef4444',
                        marginBottom: '5px'
                    }}>
                        {result.status.description}
                    </div>
                    <div style={{ display: 'flex', gap: '15px', color: '#aaa', fontSize: '0.85rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Clock size={12} /> Runtime: {result.time || 0}s
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Database size={12} /> Memory: {result.memory || 0} KB
                        </span>
                    </div>
                </div>

                {result.stdout && (
                    <div style={{ marginBottom: '15px' }}>
                        <div style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '8px' }}>Output:</div>
                        <pre style={{ background: '#252525', padding: '12px', borderRadius: '8px', color: '#eff1f6', margin: 0, overflowX: 'auto' }}>
                            {result.stdout}
                        </pre>
                    </div>
                )}

                {(result.stderr || result.compile_output) && (
                    <div>
                        <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <AlertCircle size={14} /> Error:
                        </div>
                        <pre style={{ background: '#252525', padding: '12px', borderRadius: '8px', color: '#ef4444', margin: 0, overflowX: 'auto', fontSize: '0.85rem' }}>
                            {result.stderr || result.compile_output}
                        </pre>
                    </div>
                )}
              </div>
            ) : (
              <div style={{ color: '#666', textAlign: 'center', marginTop: '40px' }}>
                No execution results yet. Click "Run" to test your code.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default TestResultsPanel
