import React from 'react'
import { Problem } from '../types'
import { CheckCircle2, Lock, MessageSquare, BookOpen, Code2 } from 'lucide-react'

interface ProblemPanelProps {
  problem: Problem
}

const ProblemPanel: React.FC<ProblemPanelProps> = ({ problem }) => {
  const [activeTab, setActiveTab] = React.useState<'description' | 'editorial' | 'solutions' | 'submissions'>('description');
  const diffColor = problem.difficulty === 'Easy' ? '#2cbb5d' : problem.difficulty === 'Medium' ? '#ffa116' : '#ef4743';

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#1a1a1a', borderRight: '1px solid #222' }}>
      {/* Tabs */}
      <div style={{
        display: 'flex',
        height: '40px',
        borderBottom: '1px solid #222',
        padding: '0 10px',
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        gap: '15px'
      }}>
        <button
          onClick={() => setActiveTab('description')}
          style={{
            background: 'none', border: 'none', height: '100%', padding: '0 10px', fontSize: '0.8rem', cursor: 'pointer',
            color: activeTab === 'description' ? '#fff' : '#888',
            borderBottom: activeTab === 'description' ? '2px solid #fff' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <BookOpen size={14} /> Description
        </button>
        <button
          onClick={() => setActiveTab('editorial')}
          style={{
            background: 'none', border: 'none', height: '100%', padding: '0 10px', fontSize: '0.8rem', cursor: 'pointer',
            color: activeTab === 'editorial' ? '#fff' : '#888',
            borderBottom: activeTab === 'editorial' ? '2px solid #fff' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <Lock size={14} /> Editorial
        </button>
        <button
          onClick={() => setActiveTab('solutions')}
          style={{
            background: 'none', border: 'none', height: '100%', padding: '0 10px', fontSize: '0.8rem', cursor: 'pointer',
            color: activeTab === 'solutions' ? '#fff' : '#888',
            borderBottom: activeTab === 'solutions' ? '2px solid #fff' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <MessageSquare size={14} /> Solutions
        </button>
        <button
          onClick={() => setActiveTab('submissions')}
          style={{
            background: 'none', border: 'none', height: '100%', padding: '0 10px', fontSize: '0.8rem', cursor: 'pointer',
            color: activeTab === 'submissions' ? '#fff' : '#888',
            borderBottom: activeTab === 'submissions' ? '2px solid #fff' : '2px solid transparent',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}
        >
          <Code2 size={14} /> Submissions
        </button>
      </div>

      <div className="custom-scrollbar" style={{ flex: 1, padding: '25px', overflowY: 'auto' }}>
        {activeTab === 'description' ? (
          <div className="fade-in">
            <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, color: '#fff' }}>{problem.id}. {problem.title}</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2rem', alignItems: 'center' }}>
              <div style={{
                color: diffColor,
                backgroundColor: `${diffColor}15`,
                padding: '2px 10px',
                borderRadius: '12px',
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                {problem.difficulty}
              </div>
              <div style={{ color: '#666', fontSize: '1.2rem' }}>•</div>
              {problem.topics.split(',').map((topic, i) => (
                <div key={i} style={{
                  color: '#aaa',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  padding: '2px 10px',
                  borderRadius: '12px',
                  fontSize: '0.75rem'
                }}>
                  {topic.trim()}
                </div>
              ))}
              <div style={{ marginLeft: 'auto', display: 'flex', gap: '15px' }}>
                 <CheckCircle2 size={18} color="#2cbb5d" style={{ opacity: 0.5 }} />
              </div>
            </div>

            <div
              className="problem-description"
              style={{ color: '#eff1f6', lineHeight: '1.7', fontSize: '0.95rem' }}
              dangerouslySetInnerHTML={{ __html: problem.description }}
            />

            {problem.testcases && problem.testcases.length > 0 && (
              <div style={{ marginTop: '2.5rem' }}>
                {problem.testcases.slice(0, 2).map((tc, idx) => (
                  <div key={idx} style={{ marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                        <div style={{ width: '4px', height: '16px', backgroundColor: '#333', borderRadius: '2px' }}></div>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: 600, margin: 0, color: '#fff' }}>Example {idx + 1}</h3>
                    </div>
                    <div style={{ backgroundColor: '#0f0f0f', padding: '15px', borderRadius: '8px', border: '1px solid #333' }}>
                      <div style={{ marginBottom: '12px' }}>
                        <div style={{ color: '#888', fontWeight: 600, fontSize: '0.75rem', marginBottom: '5px', textTransform: 'uppercase' }}>Input</div>
                        <pre style={{ margin: 0, color: '#eff1f6', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {tc.input}
                        </pre>
                      </div>
                      <div>
                        <div style={{ color: '#888', fontWeight: 600, fontSize: '0.75rem', marginBottom: '5px', textTransform: 'uppercase' }}>Output</div>
                        <pre style={{ margin: 0, color: '#eff1f6', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'pre-wrap', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          {tc.expected}
                        </pre>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {problem.constraints && problem.constraints.length > 0 && (
              <div style={{ marginTop: '2.5rem', borderTop: '1px solid #333', paddingTop: '2rem', paddingBottom: '2rem' }}>
                <h3 style={{ fontSize: '0.95rem', color: '#fff', marginBottom: '15px', fontWeight: 600 }}>Constraints:</h3>
                <ul style={{ color: '#aaa', paddingLeft: '1.2rem', fontSize: '0.9rem', lineHeight: '1.8' }}>
                  {problem.constraints.map((c, i) => (
                    <li key={i} style={{ marginBottom: '8px' }}><code>{c}</code></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', color: '#666', textAlign: 'center' }}>
            <Lock size={40} style={{ marginBottom: '15px', opacity: 0.3 }} />
            <div style={{ fontSize: '1rem', fontWeight: 600, color: '#888' }}>This content is locked</div>
            <p style={{ fontSize: '0.85rem', maxWidth: '250px', marginTop: '10px' }}>Subscribe to ProCode Premium to unlock editorials and optimized solutions.</p>
            <button className="ui orange button mini" style={{ marginTop: '20px', borderRadius: '20px' }}>Unlock Now</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProblemPanel
