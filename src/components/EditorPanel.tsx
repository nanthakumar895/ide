<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react'
import { Code } from 'lucide-react'
import { useIDE } from '../context/IDEContext'
=======
import React from 'react'
import Editor from '@monaco-editor/react'
>>>>>>> origin/master

interface EditorPanelProps {
  code: string
  onChange: (value: string | undefined) => void
}

const EditorPanel: React.FC<EditorPanelProps> = ({ code, onChange }) => {
<<<<<<< HEAD
  const { selectedLanguage } = useIDE();
  const [langMode, setLangMode] = useState('cpp');

  useEffect(() => {
    if (selectedLanguage) {
        const name = selectedLanguage.name.toLowerCase();
        if (name.includes('python')) setLangMode('python');
        else if (name.includes('java')) setLangMode('java');
        else if (name.includes('javascript')) setLangMode('javascript');
        else if (name.includes('typescript')) setLangMode('typescript');
        else if (name.includes('c#')) setLangMode('csharp');
        else if (name.includes('go')) setLangMode('go');
        else if (name.includes('rust')) setLangMode('rust');
        else if (name.includes('php')) setLangMode('php');
        else if (name.includes('ruby')) setLangMode('ruby');
        else setLangMode('cpp');
    }
  }, [selectedLanguage]);

  return (
    <div className="panel-container" style={{ height: 'calc(100% - 8px)', margin: '4px' }}>
      <div className="panel-header">
        <Code size={14} style={{ marginRight: '8px' }} />
        <span>Code</span>
        <span style={{ marginLeft: 'auto', fontSize: '0.75rem', opacity: 0.6 }}>{selectedLanguage?.name}</span>
      </div>
      <div style={{ flex: 1, position: 'relative' }}>
        <Editor
          height="100%"
          language={langMode}
=======
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ height: '40px', backgroundColor: '#252525', display: 'flex', alignItems: 'center', padding: '0 10px', borderBottom: '1px solid #111' }}>
        <span style={{ fontSize: '0.8rem', color: '#aaa' }}>C++ (GCC 14.1.0)</span>
      </div>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          defaultLanguage="cpp"
>>>>>>> origin/master
          value={code}
          onChange={onChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            automaticLayout: true,
            scrollBeyondLastLine: false,
<<<<<<< HEAD
            padding: { top: 10 },
            fontFamily: "'JetBrains Mono', monospace",
=======
>>>>>>> origin/master
          }}
        />
      </div>
    </div>
  )
}

export default EditorPanel
