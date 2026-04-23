import React from 'react'
import { Sun, Moon, Flame, Play, CloudUpload, Loader2, Home, ChevronLeft, ChevronRight, List, Bell, User } from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
  onToggleTheme: () => void
  onProblemListClick: () => void
  isRunning?: boolean
  isSubmitting?: boolean
  theme?: 'dark' | 'light'
}

const Header: React.FC<HeaderProps> = ({
  onRun,
  onSubmit,
  onToggleTheme,
  onProblemListClick,
  isRunning = false,
  isSubmitting = false,
  theme = 'dark'
}) => {
  return (
    <header className="procode-main-header">
      <div className="header-left">
        <a href="/" className="header-home-link" title="Home">
          <Home size={20} />
        </a>

        <button onClick={onProblemListClick} className="header-problem-list-btn">
          <List size={18} />
          <span className="desktop-only-inline">Problem List</span>
        </button>

        <div className="header-nav-arrows desktop-only-flex">
           <button className="header-arrow-btn" title="Previous Problem"><ChevronLeft size={18} /></button>
           <button className="header-arrow-btn" title="Next Problem"><ChevronRight size={18} /></button>
        </div>
      </div>

      <div className="header-center desktop-only-flex">
         <div className="header-action-group">
           <button
             onClick={onRun}
             disabled={isRunning}
             className="header-run-btn-new"
           >
             {(isRunning && !isSubmitting) ? <Loader2 size={16} className="animate-spin" /> : <Play size={14} fill="currentColor" />}
             <span>Run</span>
           </button>
           <button
             onClick={onSubmit}
             disabled={isRunning}
             className="header-submit-btn-new"
           >
             {(isRunning && isSubmitting) ? <Loader2 size={16} className="animate-spin" /> : <CloudUpload size={16} />}
             <span>Submit</span>
           </button>
         </div>
      </div>

      <div className="header-right">
         <button onClick={onToggleTheme} className="header-icon-btn" title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
         </button>
         <button className="header-icon-btn desktop-only-flex" title="Notifications">
            <Bell size={20} />
         </button>
         <div className="header-streak-info desktop-only-flex">
           <Flame size={20} fill="#ffa116" color="#ffa116" />
           <span>12</span>
         </div>
         <a href="/premium.html" className="header-premium-btn-new">Premium</a>
         <div className="header-profile-avatar-new" onClick={() => window.location.href='/profile.html'}>
            <User size={18} />
         </div>
      </div>
    </header>
  )
}

export default Header
