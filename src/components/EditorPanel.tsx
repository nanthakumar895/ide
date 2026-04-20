import React from 'react'
import Editor from '@monaco-editor/react'
import { Code } from 'lucide-react'

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange }) => {
  return (
    <div className="panel-container" style={{ height: 'calc(100% - 8px)', margin: '4px' }}>
      <div className="panel-header">
        <Code size={14} style={{ marginRight: '8px' }} />
        <span>Code</span>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={code}
          onChange={onChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
            scrollBeyondLastLine: false,
            padding: { top: 10 },
            fontFamily: "'JetBrains Mono', monospace",
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
