import React, { useState, useRef, useEffect } from 'react';
import { useIDE } from '../context/IDEContext';
import { ChevronDown, Search, Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { languages, selectedLanguage, setSelectedLanguage } = useIDE();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filtered = languages.filter(l => l.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          height: '32px',
          padding: '0 12px',
          backgroundColor: '#252525',
          border: '1px solid #333',
          borderRadius: '8px',
          color: '#eff1f6',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          transition: 'border-color 0.2s',
          minWidth: '160px'
        }}
        onMouseOver={(e) => e.currentTarget.style.borderColor = '#444'}
        onMouseOut={(e) => e.currentTarget.style.borderColor = '#333'}
      >
        <Globe size={14} style={{ color: '#aaa' }} />
        <span style={{ flex: 1, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selectedLanguage ? selectedLanguage.name : 'Select Language'}
        </span>
        <ChevronDown size={14} style={{ flexShrink: 0, color: '#666' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '38px',
          left: 0,
          width: '280px',
          maxHeight: '400px',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '10px',
          boxShadow: '0 15px 40px rgba(0,0,0,0.6)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.15s ease-out'
        }}>
          <div style={{ padding: '10px', borderBottom: '1px solid #333', backgroundColor: '#202020' }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '10px', top: '9px', color: '#666' }} />
              <input
                autoFocus
                type="text"
                placeholder="Filter languages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '7px 10px 7px 32px',
                  backgroundColor: '#2d2d2d',
                  border: '1px solid #444',
                  borderRadius: '6px',
                  color: '#fff',
                  fontSize: '0.85rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '6px' }}>
            {filtered.map(l => (
              <div
                key={`${l.flavor}-${l.id}`}
                onClick={() => {
                  setSelectedLanguage(l);
                  setIsOpen(false);
                  setSearch('');
                }}
                style={{
                  padding: '10px 14px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  color: selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor ? '#ffa116' : '#ccc',
                  backgroundColor: selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor ? '#2d2d2d' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '2px'
                }}
                onMouseOver={(e) => {
                    if (!(selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor)) {
                        e.currentTarget.style.backgroundColor = '#252525';
                        e.currentTarget.style.color = '#fff';
                    }
                }}
                onMouseOut={(e) => {
                    if (!(selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor)) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#ccc';
                    }
                }}
              >
                <span>{l.name}</span>
                {selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor && (
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffa116' }}></div>
                )}
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: '30px 10px', textAlign: 'center', color: '#666', fontSize: '0.85rem' }}>
                No matching languages found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
