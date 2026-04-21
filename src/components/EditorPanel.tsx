import React from 'react'
import Editor from '@monaco-editor/react'
import { SUPPORTED_LANGUAGES } from '../constants'
import LanguageSelector from './LanguageSelector'
import { Settings, Zap } from 'lucide-react'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
  selectedLanguageId: number
  onLanguageChange: (languageId: number) => void
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange, selectedLanguageId, onLanguageChange }) => {
  const selectedLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId) || SUPPORTED_LANGUAGES[0];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1e1e1e' }}>
      <div style={{
        height: '40px',
        backgroundColor: '#1a1a1a',
        display: 'flex',
        alignItems: 'center',
        padding: '0 10px',
        borderBottom: '1px solid #222',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LanguageSelector
              selectedLanguageId={selectedLanguageId}
              onLanguageChange={onLanguageChange}
            />
            <div style={{ width: '1px', height: '20px', backgroundColor: '#333', margin: '0 5px' }}></div>
            <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.8rem' }}>
                <Zap size={14} /> Auto
            </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button title="Settings" style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }}>
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
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            fontLigatures: true,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 15, bottom: 15 },
            lineNumbers: 'on',
            renderLineHighlight: 'all',
            cursorStyle: 'line',
            cursorBlinking: 'smooth',
            smoothScrolling: true,
            contextmenu: true,
            scrollbar: {
                vertical: 'visible',
                horizontal: 'visible',
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
                useShadows: false,
                verticalHasArrows: false,
                horizontalHasArrows: false,
            }
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
