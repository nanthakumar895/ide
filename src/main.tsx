import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { IDEProvider } from './context/IDEContext'
import './pages/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IDEProvider>
      <App />
    </IDEProvider>
  </React.StrictMode>,
)
