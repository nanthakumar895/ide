import React, { useState, useRef, useEffect } from 'react';
import { useIDE } from '../context/IDEContext';
import { ChevronDown, Search } from 'lucide-react';

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
    <div ref={dropdownRef} style={{ position: 'relative', width: '200px' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          height: '32px',
          padding: '0 12px',
          backgroundColor: '#252525',
          border: 'none',
          borderRadius: '8px',
          color: '#eff1f6',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {selectedLanguage ? selectedLanguage.name : 'Select Language'}
        </span>
        <ChevronDown size={14} style={{ flexShrink: 0, marginLeft: '8px' }} />
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '38px',
          left: 0,
          width: '250px',
          maxHeight: '400px',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '8px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ padding: '8px', borderBottom: '1px solid #333' }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: '8px', top: '8px', color: '#666' }} />
              <input
                autoFocus
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '6px 8px 6px 30px',
                  backgroundColor: '#252525',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  color: '#fff',
                  fontSize: '0.8rem'
                }}
              />
            </div>
          </div>
          <div style={{ overflowY: 'auto', flex: 1, padding: '4px' }}>
            {filtered.map(l => (
              <div
                key={`${l.flavor}-${l.id}`}
                onClick={() => {
                  setSelectedLanguage(l);
                  setIsOpen(false);
                  setSearch('');
                }}
                style={{
                  padding: '8px 12px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  color: selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor ? '#ffa116' : '#ccc',
                  backgroundColor: selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor ? '#2d2d2d' : 'transparent'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2d2d2d'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = selectedLanguage?.id === l.id && selectedLanguage?.flavor === l.flavor ? '#2d2d2d' : 'transparent'}
              >
                {l.name}
              </div>
            ))}
            {filtered.length === 0 && (
              <div style={{ padding: '20px', textAlign: 'center', color: '#666', fontSize: '0.85rem' }}>No results</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
