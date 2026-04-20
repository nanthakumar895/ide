import React from 'react'
import Editor from '@monaco-editor/react'
import { SUPPORTED_LANGUAGES } from '../constants'
import LanguageSelector from './LanguageSelector'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
  selectedLanguageId: number
  onLanguageChange: (languageId: number) => void
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange, selectedLanguageId, onLanguageChange }) => {
  const selectedLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId) || SUPPORTED_LANGUAGES[0];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        height: '44px',
        backgroundColor: '#252525',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        borderBottom: '1px solid #111',
        justifyContent: 'flex-start'
      }}>
        <LanguageSelector
          selectedLanguageId={selectedLanguageId}
          onLanguageChange={onLanguageChange}
        />
      </div>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          language={selectedLanguage.monacoMode}
          value={code}
          onChange={onChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
            scrollBeyondLastLine: false,
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
