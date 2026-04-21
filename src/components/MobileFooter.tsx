import React from 'react'
import { Play, CloudUpload, FileText, Code, CheckSquare, Loader2 } from 'lucide-react'

interface MobileFooterProps {
  onRun: () => void
  onSubmit: () => void
  onTabChange: (tab: string) => void
  activeTab: string
  isRunning?: boolean
}

const MobileFooter: React.FC<MobileFooterProps> = ({
  onRun,
  onSubmit,
  onTabChange,
  activeTab,
  isRunning = false
}) => {
  return (
    <footer style={{
      display: 'flex',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '65px',
      backgroundColor: '#1a1a1a',
      borderTop: '1px solid #333',
      zIndex: 100,
      padding: '0 5px',
      alignItems: 'center',
      justifyContent: 'space-around',
      boxShadow: '0 -4px 10px rgba(0,0,0,0.3)'
    }}>
      <button
        onClick={() => onTabChange('description')}
        aria-pressed={activeTab === 'description'}
        aria-label="Problem Description"
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'description' ? '#ffa116' : '#888',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.7rem',
          cursor: 'pointer',
          flex: 1,
          transition: 'color 0.2s'
        }}
      >
        <FileText size={20} />
        <span>Description</span>
      </button>

      <button
        onClick={() => onTabChange('editor')}
        aria-pressed={activeTab === 'editor'}
        aria-label="Code Editor"
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'editor' ? '#ffa116' : '#888',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.7rem',
          cursor: 'pointer',
          flex: 1,
          transition: 'color 0.2s'
        }}
      >
        <Code size={20} />
        <span>Editor</span>
      </button>

      <button
        onClick={() => onTabChange('testcase')}
        aria-pressed={activeTab === 'testcase'}
        aria-label="Test Cases and Results"
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === 'testcase' ? '#ffa116' : '#888',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          fontSize: '0.7rem',
          cursor: 'pointer',
          flex: 1,
          transition: 'color 0.2s'
        }}
      >
        <CheckSquare size={20} />
        <span>Testcase</span>
      </button>

      <div style={{ display: 'flex', gap: '8px', padding: '0 10px' }}>
        <button
          onClick={onRun}
          disabled={isRunning}
          aria-label="Run Code"
          style={{
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            padding: '8px 12px',
            cursor: isRunning ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isRunning ? 0.6 : 1,
            transition: 'opacity 0.2s'
          }}
        >
          {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="#2cbb5d" color="#2cbb5d" />}
        </button>

        <button
          onClick={onSubmit}
          disabled={isRunning}
          aria-label="Submit Solution"
          style={{
            backgroundColor: '#2cbb5d',
            border: 'none',
            borderRadius: '8px',
            color: '#fff',
            padding: '8px 12px',
            cursor: isRunning ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: isRunning ? 0.6 : 1,
            transition: 'opacity 0.2s'
          }}
        >
          {isRunning ? <Loader2 size={18} className="animate-spin" /> : <CloudUpload size={18} />}
        </button>
      </div>
    </footer>
  )
}

export default MobileFooter
