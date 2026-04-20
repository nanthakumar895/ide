import React from 'react'
import {
  Settings, User, Plus, LayoutGrid, Moon, Sun,
  Flame, Play, CloudUpload, ChevronLeft, ChevronRight,
  RefreshCw, FileCode, Stopwatch, UserPlus, CircleUser
} from 'lucide-react'

interface HeaderProps {
  onRun: () => void
  onSubmit: () => void
}

const Header: React.FC<HeaderProps> = ({ onRun, onSubmit }) => {
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

        <button className="ui basic inverted button" style={{ borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <LayoutGrid size={16} />
          <span>Problem List</span>
        </button>

        <div style={{ display: 'flex', gap: '2px' }}>
          <button className="ui basic inverted icon button" style={{ padding: '6px' }}><ChevronLeft size={16} /></button>
          <button className="ui basic inverted icon button" style={{ padding: '6px' }}><ChevronRight size={16} /></button>
        </div>

        <button className="ui basic inverted icon button" style={{ padding: '6px' }}><RefreshCw size={16} /></button>

        <div className="ui dropdown" style={{ marginLeft: '5px' }}>
          <button className="ui basic inverted button" style={{ borderRadius: '8px', padding: '6px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span>File</span>
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Center Section - Execution Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="ui inverted selection dropdown" style={{ minWidth: '150px', height: '32px', padding: '5px 10px', background: '#252525', borderRadius: '8px', display: 'flex', alignItems: 'center', fontSize: '0.85rem' }}>
          <span>C++ (GCC 14.1.0)</span>
          <ChevronDown size={14} style={{ marginLeft: 'auto' }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1px', background: '#252525', borderRadius: '8px', padding: '2px' }}>
          <button onClick={onRun} className="ui basic inverted icon button" style={{ padding: '6px 12px', color: '#eff1f6' }}>
            <Play size={16} fill="currentColor" />
          </button>
          <div style={{ width: '1px', height: '20px', background: '#444' }}></div>
          <button onClick={onSubmit} className="ui basic inverted button" style={{ padding: '6px 12px', color: '#2cbb5d', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <CloudUpload size={16} />
            <span>Submit</span>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
         <button className="ui basic inverted icon button" style={{ padding: '6px' }}><Moon size={18} /></button>
         <button className="ui basic inverted icon button" style={{ padding: '6px' }}><LayoutGrid size={18} /></button>
         <button className="ui basic inverted icon button" style={{ padding: '6px' }}><Settings size={18} /></button>

         <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#aaa', fontSize: '0.85rem' }}>
           <Flame size={16} color="#ffa116" /> <span>0</span>
         </div>

         <div style={{ color: '#aaa' }}><Stopwatch size={18} /></div>

         <button className="ui basic inverted icon button" style={{ padding: '6px' }}><UserPlus size={18} /></button>

         <div className="profile-capsule" style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <CircleUser size={20} />
         </div>

         <div className="ui orange button" style={{ borderRadius: '20px', padding: '6px 15px', fontSize: '0.85rem' }}>Premium</div>
      </div>
    </header>
  )
}

const ChevronDown = ({ size, style }: { size: number, style?: any }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
)

export default Header
