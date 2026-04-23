import { useState } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  Settings,
  Timer,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          {navItems.map((item) => (
             <button key={item.id} onClick={() => window.location.href = item.link} className="w-full flex items-center gap-4 p-3 rounded-2xl text-slate-500 hover:bg-white/5 transition-all">
                <item.icon size={24} className="shrink-0" />
                <span className="font-bold text-sm hidden lg:block">{item.label}</span>
             </button>
          ))}
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
            <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-widest">Global Contests</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-8">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-10 mb-8 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:scale-110 transition-transform duration-700"><Trophy size={200} /></div>
               <div className="relative z-10 max-w-md">
                  <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-white mb-6">Upcoming Contest</div>
                  <h2 className="text-4xl font-black text-white mb-4 leading-tight">Weekly Contest 408</h2>
                  <div className="flex items-center gap-6 mb-8">
                     <div className="flex items-center gap-2 text-white font-bold"><Timer size={20} /> 2d : 14h : 30m</div>
                  </div>
                  <button className="bg-white text-indigo-600 px-8 py-3.5 rounded-2xl font-black text-xs uppercase transition-all shadow-xl">Register Now</button>
               </div>
            </div>
            <section>
               <h3 className="text-xl font-bold text-white mb-6">Past Contests</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map(i => (
                     <div key={i} className="bg-[#1a1d23] border border-white/5 p-6 rounded-2xl flex items-center justify-between hover:border-white/10 transition-all cursor-pointer group">
                        <div>
                           <div className="text-sm font-bold text-slate-200 group-hover:text-white mb-1">Biweekly Contest {135 - i}</div>
                           <div className="text-[10px] text-slate-500 font-bold uppercase">July {20 - i}, 2026</div>
                        </div>
                        <ChevronRight size={18} className="text-slate-700 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                     </div>
                  ))}
               </div>
            </section>
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center relative">
            {navItems.map((item) => (
               <button key={item.id} onClick={() => window.location.href = item.link} className="flex flex-col items-center justify-center w-14 text-slate-500">
                  <div className="p-1.5 rounded-xl"><item.icon size={22} /></div>
                  <span className="text-[9px] font-bold mt-1.5 opacity-60">{item.label}</span>
               </button>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
