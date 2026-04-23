import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  BookOpen,
  Target,
  Brain,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const paths = [
    { title: 'Top 75 Interview Questions', desc: 'The most frequent questions for FAANG interviews.', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Dynamic Programming Path', desc: 'Master DP with our structured 20-problem plan.', icon: Brain, color: 'text-[#ff5a00]', bg: 'bg-[#ff5a00]/10' },
    { title: 'System Design Basics', desc: 'Learn to design scalable systems from scratch.', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">
      <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button className="p-1 text-slate-400 hover:text-white transition-colors"><Menu size={24} /></button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shadow-[0_2px_8px_rgba(255,90,0,0.3)]">P</div>
            <h1 className="font-bold text-lg text-white">ProCode</h1>
          </div>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto pb-28 pt-8 custom-scrollbar">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-12">
             <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Interview Prep</h2>
             <p className="text-slate-400 font-medium">Curated paths and tools to help you land your dream job.</p>
          </div>
          <div className="bg-gradient-to-br from-[#1a1d23] to-[#21242a] border border-white/5 rounded-[2.5rem] p-8 mb-10 relative overflow-hidden group">
             <div className="absolute top-1/2 -translate-y-1/2 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform duration-700"><Trophy size={200} /></div>
             <div className="relative z-10 max-w-lg">
                <div className="flex items-center gap-2 text-[#ff5a00] font-black text-[10px] uppercase tracking-widest mb-4">
                   <div className="w-2 h-2 rounded-full bg-[#ff5a00] animate-ping"></div>
                   Live Mock Interviews
                </div>
                <h3 className="text-3xl font-black text-white mb-4 leading-tight">Master the Coding Interview in 30 Days.</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-medium">Practice with real-time pressure, get instant feedback, and compare your solutions with top performers.</p>
                <div className="flex flex-wrap gap-4">
                   <button className="bg-white text-black px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all flex items-center gap-2 shadow-xl">
                      Start Mock <ArrowRight size={16} />
                   </button>
                </div>
             </div>
          </div>
          <section className="mb-12">
             <h4 className="text-lg font-bold text-white mb-6">Popular Study Paths</h4>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {paths.map((p, i) => (
                   <div key={i} className="bg-[#1a1d23] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all group cursor-pointer">
                      <div className={`w-12 h-12 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                         <p.icon size={24} />
                      </div>
                      <h5 className="font-bold text-white mb-2 group-hover:text-[#ff5a00] transition-colors">{p.title}</h5>
                      <p className="text-[11px] text-slate-500 leading-relaxed font-medium mb-6">{p.desc}</p>
                      <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                         <span>Start Path</span>
                         <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                ))}
             </div>
          </section>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100]">
        <div className="max-w-lg mx-auto flex justify-between items-center">
          {[
            { id: 'Explore', icon: LayoutGrid, label: 'Explore', link: '/' },
            { id: 'Prep', icon: Trophy, label: 'Prep', link: '/interview.html' },
            { id: 'Store', icon: ShoppingBag, label: 'Store', link: '/store.html' },
            { id: 'Plus', icon: Zap, label: 'Premium', link: '/premium.html' },
            { id: 'Profile', icon: User, label: 'Account', link: '/profile.html' }
          ].map((item) => (
            <button key={item.id} onClick={() => { if (item.link !== '/interview.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${item.id === 'Prep' ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
              <div className={`p-1.5 rounded-xl transition-all duration-300 ${item.id === 'Prep' ? 'bg-[#ff5a00]/10 scale-110' : ''}`}><item.icon size={22} strokeWidth={item.id === 'Prep' ? 2.5 : 2} /></div>
              <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${item.id === 'Prep' ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
              <div className={`mt-1 h-1.5 w-1.5 rounded-full transition-all duration-500 ${item.id === 'Prep' ? 'bg-[#ff5a00] scale-100' : 'bg-transparent scale-0'}`} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
