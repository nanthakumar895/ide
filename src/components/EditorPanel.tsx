import React from 'react'
import Editor from '@monaco-editor/react'
import { SUPPORTED_LANGUAGES } from '../constants'
import LanguageSelector from './LanguageSelector'
import { Settings, Zap, RotateCcw } from 'lucide-react'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
  selectedLanguageId: number
  onLanguageChange: (languageId: number) => void
  theme?: 'dark' | 'light'
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange, selectedLanguageId, onLanguageChange, theme = 'dark' }) => {
  const selectedLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId) || SUPPORTED_LANGUAGES[0];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--panel-bg)', overflow: 'hidden' }}>
      <div style={{
        height: '40px',
        backgroundColor: 'var(--dark-bg)',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        borderBottom: '1px solid var(--border-color)',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LanguageSelector
              selectedLanguageId={selectedLanguageId}
              onLanguageChange={onLanguageChange}
            />
            <div style={{ width: '1px', height: '18px', backgroundColor: 'var(--border-color)', margin: '0 4px' }}></div>
            <button style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 500 }} title="Auto Complete">
                <Zap size={14} fill="currentColor" /> Auto
            </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button title="Reset Code" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', padding: '4px' }}>
                <RotateCcw size={16} />
            </button>
            <button title="Settings" style={{ background: 'none', border: 'none', color: 'var(--secondary-text)', cursor: 'pointer', padding: '4px' }}>
                <Settings size={18} />
            </button>
        </div>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Editor
          height="100%"
          language={selectedLanguage.monacoMode}
          value={code}
          onChange={onChange}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontLigatures: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 12, bottom: 12 },
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorStyle: 'line',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            contextmenu: true,
            scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
                useShadows: false,
            },
            hideCursorInOverviewRuler: true,
            overviewRulerBorder: false,
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
