import { useState } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  ChevronRight,
  Search,
  LayoutGrid,
  Menu,
  X,
  Settings,
  Zap,
  Bell
} from 'lucide-react';
import { MOCK_PROBLEMS } from '../../data/mockProblems';

const App = () => {
  const [activeTab, setActiveTab] = useState('Explore');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const difficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-[#00b8a3] bg-[#00b8a3]/10';
      case 'Medium': return 'text-[#ffc01e] bg-[#ffc01e]/10';
      case 'Hard': return 'text-[#ff375f] bg-[#ff375f]/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  const navItems = [
    { id: 'Explore', icon: LayoutGrid, label: 'Explore', link: '/' },
    { id: 'Prep', icon: Trophy, label: 'Prep', link: '/interview.html' },
    { id: 'Store', icon: ShoppingBag, label: 'Store', link: '/store.html' },
    { id: 'Plus', icon: Zap, label: 'Premium', link: '/premium.html' },
    { id: 'Profile', icon: User, label: 'Account', link: '/profile.html' }
  ];

  return (
    <div className="flex h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 bg-[#0b0e14] border-r border-white/5 z-50">
        <div className="p-6 mb-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-9 h-9 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shadow-[0_2px_10px_rgba(255,90,0,0.3)] shrink-0">P</div>
            <h1 className="font-bold text-xl text-white hidden lg:block tracking-tight">ProCode</h1>
          </div>
        </div>
        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => {
             const isActive = activeTab === item.id;
             return (
               <button
                 key={item.id}
                 onClick={() => {
                   setActiveTab(item.id);
                   if (item.link !== '/') window.location.href = item.link;
                 }}
                 className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group ${
                   isActive ? 'bg-[#ff5a00]/10 text-[#ff5a00]' : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'
                 }`}
               >
                 <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                 <span className={`font-bold text-sm hidden lg:block tracking-tight ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                   {item.label}
                 </span>
                 {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ff5a00] shadow-[0_0_10px_rgba(255,90,0,1)] hidden lg:block" />}
               </button>
             );
          })}
        </nav>
        <div className="p-4 mt-auto">
           <button className="w-full flex items-center gap-4 p-3 rounded-2xl text-slate-500 hover:bg-white/5 hover:text-slate-200 transition-all">
              <Settings size={24} />
              <span className="font-bold text-sm hidden lg:block">Settings</span>
           </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        {/* Menu Overlay (Mobile) */}
        <div
          className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Side Menu Drawer (Mobile) */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#1a1d23] z-[70] transform transition-transform duration-300 ease-in-out border-r border-white/5 flex flex-col md:hidden ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6 border-b border-white/5">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                 <div className="w-9 h-9 bg-[#ff5a00] rounded-lg flex items-center justify-center text-white font-black text-xl shadow-[0_2px_10px_rgba(255,90,0,0.3)]">P</div>
                 <span className="font-bold text-lg text-white">ProCode</span>
              </div>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:text-white transition-colors"><X size={20} /></button>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white ring-2 ring-[#0b0e14]">JD</div>
              <div>
                <p className="font-bold text-white">John Doe</p>
                <p className="text-[10px] text-[#ff5a00] font-bold uppercase tracking-wider">Premium Plus</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:bg-white/5 transition-colors group"
                onClick={() => window.location.href = item.link}
              >
                <item.icon size={20} className={item.id === 'Plus' ? 'text-[#ff5a00]' : 'group-hover:text-white'} />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-200 group-hover:text-white">{item.label}</p>
                  <p className="text-[10px] opacity-50">Master algorithms</p>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Header */}
        <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-40 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-1 text-slate-400 hover:text-white transition-colors md:hidden">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-2 cursor-pointer md:hidden" onClick={() => window.location.href = '/'}>
              <div className="w-8 h-8 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shadow-[0_2px_8px_rgba(255,90,0,0.3)]">P</div>
              <h1 className="font-bold text-lg text-white">ProCode</h1>
            </div>
            <div className="hidden md:flex items-center gap-4">
               <div className="text-sm font-bold text-slate-400">July 2026</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden lg:block">
               <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
               <input type="text" placeholder="Search problems..." className="bg-white/5 border border-white/5 rounded-xl py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 ring-[#ff5a00]/50 w-64 transition-all" />
            </div>
            <button className="p-2 text-slate-400 hover:text-white transition-colors lg:hidden"><Search size={20} /></button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors"><Bell size={20} /></button>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border border-white/10 cursor-pointer hover:ring-2 ring-white/20 transition-all" onClick={() => window.location.href='/profile.html'}>JD</div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-4">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            {/* Progress Card */}
            <div className="bg-[#1a1d23] border border-white/5 rounded-[2rem] p-6 mb-8 relative overflow-hidden group">
              <div className="absolute top-1/2 -translate-y-1/2 right-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                 <Trophy size={140} />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-0.5">Level 24</h2>
                <p className="text-xs text-slate-400 mb-6 font-medium italic opacity-70">"The Array Master"</p>

                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                     <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Progress</div>
                     <div className="text-[10px] font-bold text-[#ff5a00] uppercase tracking-wider">65% to Level 25</div>
                  </div>
                  <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-slate-950 border border-white/5">
                    <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-[#ff5a00] to-[#ff8c00] rounded-full relative">
                       <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
              {['All', 'Easy', 'Medium', 'Hard'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-white text-black shadow-lg shadow-white/5'
                      : 'bg-[#1a1d23] text-slate-400 border border-white/5 hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Problem List */}
            <div className="space-y-3">
              {MOCK_PROBLEMS.slice(0, 100).filter(p => selectedCategory === 'All' || p.difficulty === selectedCategory).map(p => (
                <div
                  key={p.id}
                  className="bg-[#1a1d23] border border-white/5 p-5 rounded-2xl flex items-center justify-between hover:border-white/20 transition-all hover:bg-[#21242a] group cursor-pointer"
                  onClick={() => window.location.href = `/editor.html?id=${p.id}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-slate-600 tracking-wider">#${p.id}</span>
                      <h4 className="font-bold text-sm text-slate-100 group-hover:text-white transition-colors">${p.title}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] px-2.5 py-0.5 rounded-md font-black uppercase tracking-wider ${difficultyColor(p.difficulty)}`}>
                         ${p.difficulty}
                      </span>
                      <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tight">
                         ${p.topics.split(',')[0]}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                     <ChevronRight size={18} className="text-slate-700 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Mobile Navigation */}
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center relative">
            {navItems.map((item) => {
               const isActive = activeTab === item.id;
               return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.link !== '/') window.location.href = item.link;
                  }}
                  className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${
                    isActive ? 'text-[#ff5a00]' : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-[#ff5a00]/10 scale-110 shadow-[0_0_20px_rgba(255,90,0,0.1)]' : ''
                  }`}>
                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[9px] font-bold mt-1.5 tracking-tight transition-all duration-300 ${
                    isActive ? 'opacity-100 transform -translate-y-0.5' : 'opacity-60'
                  }`}>
                    {item.label}
                  </span>

                  <div className={`mt-1 h-1.5 w-1.5 rounded-full transition-all duration-500 ease-out ${
                    isActive ? 'bg-[#ff5a00] scale-100 shadow-[0_0_10px_rgba(255,90,0,1)]' : 'bg-transparent scale-0'
                  }`} />
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
