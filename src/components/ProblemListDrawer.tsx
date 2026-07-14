import React, { useState, useMemo } from 'react'
import { X, Search, ChevronRight } from 'lucide-react'
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
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All')

  const filteredProblems = useMemo(() => {
    return problems.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDifficulty = difficultyFilter === 'All' || p.difficulty === difficultyFilter
      return matchesSearch && matchesDifficulty
    })
  }, [problems, searchTerm, difficultyFilter])

  const difficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-[#00b8a3]'
      case 'Medium': return 'text-[#ffc01e]'
      case 'Hard': return 'text-[#ff375f]'
      default: return 'text-slate-400'
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[2000] flex">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-[#1a1d23] h-full shadow-2xl flex flex-col border-r border-white/5 animate-in slide-in-from-left duration-300">
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
           <h2 className="text-xl font-black text-white">Problem List</h2>
           <button onClick={onClose} className="p-2 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
        </div>
        <div className="p-4 space-y-4 border-b border-white/5">
           <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#ff5a00] transition-colors" size={16} />
              <input type="text" placeholder="Search by title..." className="w-full bg-[#0b0e14] border border-white/5 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 ring-[#ff5a00]/50" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
           </div>
           <div className="flex gap-2">
              {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                 <button key={diff} onClick={() => setDifficultyFilter(diff as any)} className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${difficultyFilter === diff ? 'bg-white text-black' : 'bg-white/5 text-slate-500 hover:text-slate-300'}`}>{diff}</button>
              ))}
           </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
           {filteredProblems.map((p) => (
              <button key={p.id} onClick={() => { onSelectProblem(p.id); onClose(); }} className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all group ${p.id === currentProblemId ? 'bg-[#ff5a00]/10 border border-[#ff5a00]/20' : 'hover:bg-white/5 border border-transparent'}`}>
                <div className="flex items-center gap-4 text-left">
                   <div className={`w-1.5 h-1.5 rounded-full ${p.id === currentProblemId ? 'bg-[#ff5a00] shadow-[0_0_8px_rgba(255,90,0,1)]' : 'bg-slate-700'}`}></div>
                   <div>
                      <div className={`text-sm font-bold ${p.id === currentProblemId ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>{p.title}</div>
                      <div className={`text-[10px] font-black uppercase tracking-wider ${difficultyColor(p.difficulty)}`}>{p.difficulty}</div>
                   </div>
                </div>
                <ChevronRight size={14} className="text-slate-700 group-hover:text-slate-500" />
              </button>
           ))}
           {filteredProblems.length === 0 && <div className="text-center py-20 text-slate-500 font-bold">No problems found.</div>}
        </div>
      </div>
    </div>
  )
}

export default React.memo(ProblemListDrawer)
