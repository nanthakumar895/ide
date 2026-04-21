import React from 'react'
import { Settings, LayoutGrid, Sun, Flame, Play, CloudUpload, Loader2, Home } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
  onToggleTheme: () => void
  onSettingsClick: () => void
  onAppsClick: () => void
  onProblemListClick: () => void
  isRunning?: boolean
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onSubmit,
  onToggleTheme,
  onSettingsClick,
  onAppsClick,
  onProblemListClick,
  isRunning = false
}) => {
  return (
    <header style={{
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 1rem',
      borderBottom: '1px solid #222',
      backgroundColor: '#1a1a1a',
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="procode-logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ffa116' }}>θ</div>
          <Home size={18} color="#aaa" />
        </a>
        <button
          onClick={onProblemListClick}
          className="ui basic inverted button"
          style={{ borderRadius: '20px', padding: '6px 15px', fontSize: '0.85rem' }}
        >
          Problem List
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
         <button
           onClick={onRun}
           disabled={isRunning}
           className="ui basic inverted icon button"
           style={{ color: '#2cbb5d' }}
           title="Run Code"
         >
           {isRunning ? <Loader2 size={18} className="animate-spin" /> : <Play size={18} fill="#2cbb5d" />}
         </button>
         <button
           onClick={onSubmit}
           disabled={isRunning}
           className="ui green button"
           style={{ borderRadius: '8px', padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}
         >
           {isRunning ? <Loader2 size={18} className="animate-spin" /> : <CloudUpload size={18} />}
           <span>Submit</span>
         </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <button onClick={onToggleTheme} className="ui basic inverted icon button" title="Theme"><Sun size={18} /></button>
         <button onClick={onAppsClick} className="ui basic inverted icon button" title="Apps"><LayoutGrid size={18} /></button>
         <button onClick={onSettingsClick} className="ui basic inverted icon button" title="Settings"><Settings size={18} /></button>
         <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#aaa', fontSize: '0.9rem' }}>
           <Flame size={18} /> <span>0</span>
         </div>
         <a href="/premium.html" className="ui orange button" style={{ borderRadius: '20px', padding: '8px 15px', textDecoration: 'none' }}>Premium</a>
      </div>
    </header>
  )
}

export default Header
