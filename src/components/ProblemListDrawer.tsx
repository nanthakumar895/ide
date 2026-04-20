import React, { useState } from 'react';
import { useIDE } from '../context/IDEContext';
import { X, Search, ChevronRight, CheckCircle2 } from 'lucide-react';

const ProblemListDrawer: React.FC = () => {
  const { allProblems, selectProblem, isProblemListOpen, setIsProblemListOpen, currentProblem } = useIDE();
  const [search, setSearch] = useState('');

  if (!isProblemListOpen) return null;

  const filtered = allProblems.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toString().includes(search)
  );

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '350px',
      height: '100vh',
      backgroundColor: '#1a1a1a',
      borderRight: '1px solid #333',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '10px 0 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0, color: '#eff1f6', fontSize: '1.2rem' }}>Problem List</h2>
        <button onClick={() => setIsProblemListOpen(false)} style={{ background: 'none', border: 'none', color: '#aaa', cursor: 'pointer' }}>
          <X size={20} />
        </button>
      </div>

      <div style={{ padding: '15px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '10px', color: '#666' }} />
          <input
            type="text"
            placeholder="Search problems..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px 8px 35px',
              backgroundColor: '#252525',
              border: '1px solid #444',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '0.9rem'
            }}
          />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '0 10px 20px' }}>
        {filtered.map(p => (
          <div
            key={p.id}
            onClick={() => {
                selectProblem(p.id);
                setIsProblemListOpen(false);
            }}
            style={{
              padding: '12px 15px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: currentProblem.id === p.id ? '#333' : 'transparent',
              marginBottom: '5px',
              transition: 'background 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#252525'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = currentProblem.id === p.id ? '#333' : 'transparent'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: '#2cbb5d', width: '16px' }}>
                {p.id % 7 === 0 && <CheckCircle2 size={16} />}
              </div>
              <span style={{ color: '#eff1f6', fontSize: '0.95rem' }}>{p.id}. {p.title}</span>
            </div>
            <span style={{
                fontSize: '0.75rem',
                color: p.difficulty === 'Easy' ? '#00af9b' : p.difficulty === 'Medium' ? '#ffb800' : '#ff2d55'
            }}>
                {p.difficulty}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemListDrawer;
