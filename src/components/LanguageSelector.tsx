import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { SUPPORTED_LANGUAGES } from '../constants'

interface LanguageSelectorProps {
  selectedLanguageId: number
  onLanguageChange: (languageId: number) => void
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selectedLanguageId, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedLanguage = SUPPORTED_LANGUAGES.find(l => l.id === selectedLanguageId) || SUPPORTED_LANGUAGES[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="language-selector" ref={dropdownRef} style={{ position: 'relative', userSelect: 'none' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--dark-bg)',
          color: 'var(--text-color)',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '0.85rem',
          cursor: 'pointer',
          minWidth: '200px',
          border: '1px solid var(--border-color)',
          transition: 'background 0.2s'
        }}
      >
        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {selectedLanguage.name}
        </span>
        <ChevronDown size={14} style={{ marginLeft: '8px', opacity: 0.7, transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </div>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            backgroundColor: 'var(--panel-bg)',
            border: '1px solid var(--border-color)',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            maxHeight: '400px',
            overflowY: 'auto',
            padding: '4px 0'
          }}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <div
              key={lang.id}
              onClick={() => {
                onLanguageChange(lang.id)
                setIsOpen(false)
              }}
              style={{
                padding: '8px 12px',
                fontSize: '0.85rem',
                color: lang.id === selectedLanguageId ? '#fff' : 'var(--text-color)',
                backgroundColor: lang.id === selectedLanguageId ? 'var(--accent-color)' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.1s'
              }}
              onMouseEnter={(e) => {
                if (lang.id !== selectedLanguageId) {
                  e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.05)'
                }
              }}
              onMouseLeave={(e) => {
                if (lang.id !== selectedLanguageId) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              <span>{lang.name}</span>
              {lang.id === selectedLanguageId && <Check size={14} />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
