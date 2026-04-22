import React from 'react'
import { Sun, Moon, Flame, Play, CloudUpload, Loader2, Home, ChevronLeft, ChevronRight, List, Bell, User } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
  onToggleTheme: () => void
  onProblemListClick: () => void
  isRunning?: boolean
  theme?: 'dark' | 'light'
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onSubmit,
  onToggleTheme,
  onProblemListClick,
  isRunning = false,
  theme = 'dark'
}) => {
  return (
    <header className="procode-main-header">
      <div className="header-left">
        <div className="logo-box">
           <span>L</span>
        </div>
        <div className="divider desktop-only-flex" style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 4px' }}></div>
        <a href="/" className="icon-link desktop-only-flex" title="Home" style={{ color: 'var(--secondary-text)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-color)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--secondary-text)'}>
          <Home size={20} />
        </a>
        <button onClick={onProblemListClick} className="problem-list-btn">
          <List size={18} />
          <span className="desktop-only-inline">Problem List</span>
        </button>
        <div className="nav-arrows desktop-only-flex" style={{ display: 'flex', gap: '4px' }}>
           <button className="arrow-btn" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', padding: '4px' }}><ChevronLeft size={18} /></button>
           <button className="arrow-btn" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', padding: '4px' }}><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className="header-center desktop-only-flex">
         <button
           onClick={onRun}
           disabled={isRunning}
           className="header-run-btn"
         >
           {isRunning ? <Loader2 size={16} className="animate-spin" /> : <Play size={14} fill="var(--success-color)" color="var(--success-color)" />}
           <span>Run</span>
         </button>
         <button
           onClick={onSubmit}
           disabled={isRunning}
           className="header-submit-btn"
         >
           {isRunning ? <Loader2 size={16} className="animate-spin" /> : <CloudUpload size={16} />}
           <span>Submit</span>
         </button>
      </div>

      <div className="header-right">
         <button onClick={onToggleTheme} className="header-icon-btn" title="Toggle Theme" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
         </button>
         <button className="header-icon-btn desktop-only-flex" title="Notifications" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px' }}>
            <Bell size={20} />
         </button>
         <div className="streak-info desktop-only-flex" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-color)', fontSize: '0.9rem', fontWeight: 600 }}>
           <Flame size={20} fill="#ffa116" color="#ffa116" />
           <span>12</span>
         </div>
         <a href="/premium.html" className="header-premium-btn">Premium</a>
         <div className="header-profile-avatar" onClick={() => window.location.href='/profile.html'} style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--secondary-text)', border: '1px solid var(--border-color)' }}>
            <User size={18} />
         </div>
      </div>
    </header>
  )
}

export default Header
