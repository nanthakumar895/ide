import React from 'react'
import { Problem } from '../types'

interface ProblemPanelProps {
  problem: Problem
}

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  const diffColor = problem.difficulty === 'Easy' ? '#2cbb5d' : problem.difficulty === 'Medium' ? '#ffa116' : '#ef4743';

  return (
    <div className="custom-scrollbar" style={{ height: '100%', padding: '25px', overflowY: 'auto', backgroundColor: '#1a1a1a', borderRight: '1px solid #222' }}>
      <h1 className="ui header inverted" style={{ fontSize: '1.6rem', marginBottom: '1rem', fontWeight: 600 }}>{problem.id}. {problem.title}</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem' }}>
        <div style={{
          color: diffColor,
          backgroundColor: `${diffColor}15`,
          padding: '4px 12px',
          borderRadius: '15px',
          fontSize: '0.8rem',
          fontWeight: 600
        }}>
          {problem.difficulty}
        </div>
        {problem.topics.split(',').map((topic, i) => (
          <div key={i} style={{
            color: '#aaa',
            backgroundColor: 'rgba(255,255,255,0.05)',
            padding: '4px 12px',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}>
            {topic.trim()}
          </div>
        ))}
      </div>

      <div
        className="problem-description"
        style={{ color: '#eff1f6', lineHeight: '1.7', fontSize: '0.95rem' }}
        dangerouslySetInnerHTML={{ __html: problem.description }}
      />

      {problem.testcases && problem.testcases.length > 0 && (
        <div style={{ marginTop: '2.5rem' }}>
          {problem.testcases.slice(0, 2).map((tc, idx) => (
            <div key={idx} style={{ marginBottom: '2rem' }}>
              <h3 className="ui header inverted" style={{ fontSize: '1rem', marginBottom: '10px' }}>Example {idx + 1}:</h3>
              <div style={{ backgroundColor: '#252525', padding: '15px', borderRadius: '10px', border: '1px solid #333' }}>
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ color: '#aaa', fontWeight: 600, fontSize: '0.85rem', marginBottom: '5px' }}>Input:</div>
                  <pre style={{ margin: 0, color: '#fff', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>
                    {tc.input}
                  </pre>
                </div>
                <div>
                  <div style={{ color: '#aaa', fontWeight: 600, fontSize: '0.85rem', marginBottom: '5px' }}>Output:</div>
                  <pre style={{ margin: 0, color: '#fff', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', fontSize: '0.9rem' }}>
                    {tc.expected}
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {problem.constraints && problem.constraints.length > 0 && (
        <div style={{ marginTop: '2.5rem', borderTop: '1px solid #333', paddingTop: '1.5rem', paddingBottom: '2rem' }}>
          <h3 className="ui header inverted" style={{ fontSize: '1rem', color: '#eee', marginBottom: '12px' }}>Constraints:</h3>
          <ul style={{ color: '#aaa', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.6' }}>
            {problem.constraints.map((c, i) => (
              <li key={i} style={{ marginBottom: '8px' }}><code>{c}</code></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default ProblemPanel
