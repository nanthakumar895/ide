import React from 'react'
import {
  Settings, User, Plus, LayoutGrid, Moon, Sun,
  Flame, Play, CloudUpload, ChevronLeft, ChevronRight,
  RefreshCw, Stopwatch, UserPlus, CircleUser, HelpCircle
} from 'lucide-react'
import { useIDE } from '../context/IDEContext'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
}

const Header: React.FC<HeaderProps> = ({ onRun, onSubmit }) => {
  const { theme, setTheme, isRunning, setIsProblemListOpen } = useIDE();

  return (
    <header style={{
      height: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 0.8rem',
      borderBottom: '1px solid #222',
      backgroundColor: '#1a1a1a',
      zIndex: 10,
      color: '#eff1f6'
    }}>
      {/* Left Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div className="procode-logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#ffa116', marginRight: '5px' }}>θ</div>

        <button
            onClick={() => setIsProblemListOpen(true)}
            className="ui basic inverted button"
            style={{ borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}
        >
          <LayoutGrid size={16} />
          <span>Problem List</span>
        </button>

        <div style={{ display: 'flex', gap: '2px' }}>
          <button className="ui basic inverted icon button" style={{ padding: '6px' }}><ChevronLeft size={16} /></button>
          <button className="ui basic inverted icon button" style={{ padding: '6px' }}><ChevronRight size={16} /></button>
        </div>

        <button className="ui basic inverted icon button" style={{ padding: '6px' }}><RefreshCw size={16} /></button>
      </div>

      {/* Center Section - Execution Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <LanguageSelector />

        <div style={{ display: 'flex', alignItems: 'center', gap: '1px', background: '#252525', borderRadius: '8px', padding: '2px' }}>
          <button
            onClick={onRun}
            disabled={isRunning}
            className={`ui basic inverted icon button \${isRunning ? 'loading' : ''}`}
            style={{ padding: '6px 12px', color: '#eff1f6' }}
          >
            <Play size={16} fill="currentColor" />
          </button>
          <div style={{ width: '1px', height: '20px', background: '#444' }}></div>
          <button
            onClick={onSubmit}
            className="ui basic inverted button"
            style={{ padding: '6px 12px', color: '#2cbb5d', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}
          >
            <CloudUpload size={16} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ui basic inverted icon button"
            style={{ padding: '6px' }}
         >
           {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
         </button>

         <a href="/apps.html" className="ui basic inverted icon button" style={{ padding: '6px' }}><HelpCircle size={18} /></a>
         <a href="/settings.html" className="ui basic inverted icon button" style={{ padding: '6px' }}><Settings size={18} /></a>

         <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#aaa', fontSize: '0.85rem' }}>
           <Flame size={16} color="#ffa116" /> <span>0</span>
         </div>

         <div style={{ color: '#aaa' }}><Stopwatch size={18} /></div>

         <a href="/add-user.html" className="ui basic inverted icon button" style={{ padding: '6px' }}><UserPlus size={18} /></a>

         <a href="/profile.html" className="profile-capsule" style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
           <CircleUser size={20} />
         </a>

         <a href="/premium.html" className="ui orange button" style={{ borderRadius: '20px', padding: '6px 15px', fontSize: '0.85rem' }}>Premium</a>
      </div>
    </header>
  )
}

export default Header
