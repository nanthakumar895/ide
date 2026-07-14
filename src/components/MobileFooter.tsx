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
      backgroundColor: 'rgba(26, 26, 26, 0.95)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-color)',
      zIndex: 1001,
      padding: '0 8px',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.4)'
    }}>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-around' }}>
        <button
          onClick={() => onTabChange('description')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'description' ? 'var(--accent-color)' : 'var(--secondary-text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.65rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '8px 4px',
            transition: 'all 0.2s',
            outline: 'none'
          }}
        >
          <FileText size={20} strokeWidth={activeTab === 'description' ? 2.5 : 2} />
          <span>Description</span>
        </button>

        <button
          onClick={() => onTabChange('editor')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'editor' ? 'var(--accent-color)' : 'var(--secondary-text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.65rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '8px 4px',
            transition: 'all 0.2s',
            outline: 'none'
          }}
        >
          <Code size={20} strokeWidth={activeTab === 'editor' ? 2.5 : 2} />
          <span>Editor</span>
        </button>

        <button
          onClick={() => onTabChange('testcase')}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === 'testcase' ? 'var(--accent-color)' : 'var(--secondary-text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.65rem',
            fontWeight: 700,
            cursor: 'pointer',
            padding: '8px 4px',
            transition: 'all 0.2s',
            outline: 'none'
          }}
        >
          <CheckSquare size={20} strokeWidth={activeTab === 'testcase' ? 2.5 : 2} />
          <span>Testcase</span>
        </button>
      </div>

      <div style={{ display: 'flex', gap: '10px', paddingLeft: '8px', paddingRight: '4px', borderLeft: '1px solid var(--border-color)', marginLeft: '4px' }}>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRun();
          }}
          disabled={isRunning}
          style={{
            backgroundColor: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            color: 'var(--text-color)',
            width: '42px',
            height: '42px',
            cursor: isRunning ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
            outline: 'none',
            opacity: isRunning ? 0.6 : 1
          }}
        >
          {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="var(--success-color)" color="var(--success-color)" />}
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSubmit();
          }}
          disabled={isRunning}
          style={{
            backgroundColor: 'var(--success-color)',
            border: 'none',
            borderRadius: '12px',
            color: 'white',
            width: '42px',
            height: '42px',
            cursor: isRunning ? 'default' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(44, 187, 93, 0.4)',
            transition: 'all 0.2s',
            outline: 'none',
            opacity: isRunning ? 0.6 : 1
          }}
        >
          {isRunning ? <Loader2 size={18} className="animate-spin" /> : <CloudUpload size={20} color="white" />}
        </button>
      </div>
    </footer>
  )
}

export default MobileFooter
