import { useState } from 'react';
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
  ArrowRight,
  Settings,
  Search,
  Bell
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const paths = [
    { title: 'Top 75 Interview Questions', desc: 'The most frequent questions for FAANG interviews.', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
    { title: 'Dynamic Programming Path', desc: 'Master DP with our structured 20-problem plan.', icon: Brain, color: 'text-[#ff5a00]', bg: 'bg-[#ff5a00]/10' },
    { title: 'System Design Basics', desc: 'Learn to design scalable systems from scratch.', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-500/10' },
  ];

  const navItems = [
    { id: 'Explore', icon: LayoutGrid, label: 'Explore', link: '/' },
    { id: 'Prep', icon: Trophy, label: 'Prep', link: '/interview.html' },
    { id: 'Store', icon: ShoppingBag, label: 'Store', link: '/store.html' },
    { id: 'Plus', icon: Zap, label: 'Premium', link: '/premium.html' },
    { id: 'Profile', icon: User, label: 'Account', link: '/profile.html' }
  ];

  return (
    <div className="flex h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">
      <aside className="hidden md:flex flex-col w-20 lg:w-64 bg-[#0b0e14] border-r border-white/5 z-50">
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-9 h-9 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shrink-0">P</div>
            <h1 className="font-bold text-xl text-white hidden lg:block tracking-tight">ProCode</h1>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => {
             const isActive = item.id === 'Prep';
             return (
               <button key={item.id} onClick={() => { if (item.link !== '/interview.html') window.location.href = item.link; }} className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-[#ff5a00]/10 text-[#ff5a00]' : 'text-slate-500 hover:bg-white/5'}`}>
                 <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                 <span className={`font-bold text-sm hidden lg:block ${isActive ? 'opacity-100' : 'opacity-80'}`}>{item.label}</span>
               </button>
             );
          })}
        </nav>
        <div className="p-4 mt-auto">
           <button onClick={() => window.location.href='/settings.html'} className="w-full flex items-center gap-4 p-3 rounded-2xl text-slate-500 hover:bg-white/5 transition-all">
              <Settings size={24} /><span className="font-bold text-sm hidden lg:block">Settings</span>
           </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
        <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-40 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-1 text-slate-400 hover:text-white transition-colors md:hidden"><Menu size={24} /></button>
            <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-widest">Interview Prep</div>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:text-white transition-colors"><Search size={20} /></button>
             <button className="p-2 text-slate-400 hover:text-white transition-colors hidden sm:block"><Bell size={20} /></button>
             <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border border-white/10 cursor-pointer">JD</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="mb-12 text-center md:text-left">
               <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Interview Prep</h2>
               <p className="text-slate-400 font-medium">Curated paths and tools to help you land your dream job.</p>
            </div>
            <div className="bg-gradient-to-br from-[#1a1d23] to-[#21242a] border border-white/5 rounded-[2.5rem] p-8 mb-10 relative overflow-hidden group">
               <div className="absolute top-1/2 -translate-y-1/2 right-0 p-8 opacity-[0.05] group-hover:scale-110 transition-transform duration-700"><Trophy size={200} /></div>
               <div className="relative z-10 max-w-lg">
                  <div className="flex items-center gap-2 text-[#ff5a00] font-black text-[10px] uppercase tracking-widest mb-4"><div className="w-2 h-2 rounded-full bg-[#ff5a00] animate-ping"></div>Live Mock Interviews</div>
                  <h3 className="text-3xl font-black text-white mb-4 leading-tight">Master the Coding Interview in 30 Days.</h3>
                  <div className="flex flex-wrap gap-4">
                     <button className="bg-white text-black px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center gap-2">Start Mock <ArrowRight size={16} /></button>
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
                        <p className="text-[11px] text-slate-500 leading-relaxed mb-6">{p.desc}</p>
                        <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                           <span>Start Path</span><ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                     </div>
                  ))}
               </div>
            </section>
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center">
            {navItems.map((item) => {
               const isActive = item.id === 'Prep';
               return (
                <button key={item.id} onClick={() => { if (item.link !== '/interview.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${isActive ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
                  <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#ff5a00]/10 scale-110' : ''}`}><item.icon size={22} strokeWidth={isActive ? 2.5 : 2} /></div>
                  <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${isActive ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
                </button>
               );
            })}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
