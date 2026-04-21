import React, { useState } from 'react'
import { X, Search, CheckCircle2, ChevronRight } from 'lucide-react'
import { Problem } from '../types'

interface ProblemListDrawerProps {
  isOpen: boolean
  onClose: () => void
  problems: Problem[]
  onSelectProblem: (id: number) => void
  currentProblemId: number
}

const ProblemListDrawer: React.FC<ProblemListDrawerProps> = ({
  isOpen,
  onClose,
  problems,
  onSelectProblem,
  currentProblemId
}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProblems = problems.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.topics.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`problem-list-drawer ${isOpen ? 'open' : ''}`} id="procode-problem-list-drawer">
      <div style={{ padding: '20px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#1a1a1a' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'white' }}>Problems</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#888' }}>
             <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid #333', borderTopColor: '#2cbb5d' }}></div>
             <span>0/{problems.length}</span>
          </div>
          <button style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer' }} onClick={onClose}>
            <X size={20} />
          </button>
        </div>
      </div>

      <div style={{ padding: '15px 20px', display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1, position: 'relative' }}>
          <input
            type="text"
            placeholder="Search problems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
                width: '100%',
                backgroundColor: '#0f0f0f',
                border: '1px solid #333',
                color: 'white',
                borderRadius: '8px',
                padding: '10px 10px 10px 35px',
                fontSize: '0.9rem',
                outline: 'none'
            }}
          />
          <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }} />
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }} className="custom-scrollbar">
        {filteredProblems.map(p => (
          <div
            key={p.id}
            onClick={() => {
              onSelectProblem(p.id)
              onClose()
            }}
            style={{
               padding: '15px 20px',
               display: 'flex',
               alignItems: 'center',
               justifyContent: 'space-between',
               cursor: 'pointer',
               backgroundColor: p.id === currentProblemId ? 'rgba(255, 161, 22, 0.08)' : 'transparent',
               borderLeft: p.id === currentProblemId ? '3px solid #ffa116' : '3px solid transparent',
               transition: 'all 0.2s'
            }}
            className="problem-item-row"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={14} color="#2cbb5d" style={{ opacity: 0.2 }} />
                <span style={{ color: p.id === currentProblemId ? '#fff' : '#ccc', fontWeight: p.id === currentProblemId ? 600 : 400, fontSize: '0.9rem' }}>{p.id}. {p.title}</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#666', marginLeft: '25px' }}>
                {p.topics}
              </div>
            </div>
            <div style={{
              color: p.difficulty === 'Easy' ? '#2cbb5d' : p.difficulty === 'Medium' ? '#ffa116' : '#ef4743',
              fontSize: '0.75rem',
              fontWeight: 600,
              backgroundColor: p.difficulty === 'Easy' ? 'rgba(44, 187, 93, 0.1)' : p.difficulty === 'Medium' ? 'rgba(255, 161, 22, 0.1)' : 'rgba(239, 71, 67, 0.1)',
              padding: '2px 8px',
              borderRadius: '10px',
              minWidth: '60px',
              textAlign: 'center'
            }}>
              {p.difficulty}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '15px 20px', borderTop: '1px solid #333', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'center' }}>
         <button style={{ background: 'none', border: 'none', color: '#ffa116', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            View all problems <ChevronRight size={14} />
         </button>
      </div>
    </div>
  )
}

export default ProblemListDrawer
