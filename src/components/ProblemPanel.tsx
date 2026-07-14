import React from 'react'
import { Problem } from '../types'
import { FileText, Tag, Lock } from 'lucide-react'

interface ProblemPanelProps {
  problem: Problem
}

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  const diffColor = problem.difficulty === 'Easy' ? '#2cbb5d' : problem.difficulty === 'Medium' ? '#ffa116' : '#ef4444';

  return (
    <div className="panel-container" style={{ height: 'calc(100% - 8px)', margin: '4px' }}>
      <div className="panel-header">
        <FileText size={14} style={{ marginRight: '8px' }} />
        <span>Description</span>
      </div>
      <div className="panel-content">
        <h1 style={{ fontSize: '1.5rem', marginBottom: '12px', marginTop: '0' }}>{problem.id}. {problem.title}</h1>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <div style={{
            color: diffColor,
            background: `${diffColor}20`,
            padding: '2px 10px',
            borderRadius: '12px',
            fontSize: '0.8rem',
            fontWeight: 500
          }}>
            {problem.difficulty}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#aaa', fontSize: '0.8rem', background: '#2d2d2d', padding: '2px 10px', borderRadius: '12px' }}>
            <Tag size={12} /> {problem.topics}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#aaa', fontSize: '0.8rem', background: '#2d2d2d', padding: '2px 10px', borderRadius: '12px' }}>
            <Lock size={12} /> Companies
          </div>
        </div>
        <div
          style={{ color: '#ccc', lineHeight: '1.6', fontSize: '0.95rem' }}
          dangerouslySetInnerHTML={{ __html: problem.description }}
        />
      </div>
    </div>
  )
}

export default ProblemPanel
