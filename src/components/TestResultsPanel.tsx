import React from 'react'
import { Terminal, CheckCircle2 } from 'lucide-react'

const TestResultsPanel: React.FC = () => {
  return (
    <div className="panel-container" style={{ height: 'calc(100% - 8px)', margin: '4px' }}>
      <div className="panel-header" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Terminal size={14} style={{ marginRight: '8px' }} />
          <span>Testcase</span>
        </div>
      </div>
      <div className="panel-content">
        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div style={{ color: '#eff1f6', borderBottom: '2px solid #eff1f6', paddingBottom: '5px', fontSize: '0.9rem', cursor: 'pointer' }}>Case 1</div>
          <div style={{ color: '#aaa', paddingBottom: '5px', fontSize: '0.9rem', cursor: 'pointer' }}>Case 2</div>
          <div style={{ color: '#aaa', paddingBottom: '5px', fontSize: '0.9rem', cursor: 'pointer' }}>Case 3</div>
        </div>
        <div style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '8px' }}>nums =</div>
        <div style={{ background: '#252525', padding: '12px', borderRadius: '8px', color: '#eff1f6', fontFamily: 'monospace', marginBottom: '15px' }}>
          [2,7,11,15]
        </div>
        <div style={{ color: '#aaa', fontSize: '0.85rem', marginBottom: '8px' }}>target =</div>
        <div style={{ background: '#252525', padding: '12px', borderRadius: '8px', color: '#eff1f6', fontFamily: 'monospace' }}>
          9
        </div>
      </div>
    </div>
  )
}

export default TestResultsPanel
