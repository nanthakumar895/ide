import { useState } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  Settings,
  Globe,
  Lock,
  Eye,
  Trash2
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
           <button className="w-full flex items-center gap-4 p-3 rounded-2xl bg-[#ff5a00]/10 text-[#ff5a00] transition-all">
              <Settings size={24} /><span className="font-bold text-sm hidden lg:block">Settings</span>
           </button>
        </div>
      </aside>
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />
        <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-40 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-1 text-slate-400 hover:text-white transition-colors md:hidden"><Menu size={24} /></button>
            <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-widest">Settings</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-8">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-black text-white mb-8">Settings</h2>
            <div className="space-y-6">
               <section className="bg-[#1a1d23] border border-white/5 rounded-3xl p-6">
                  <h3 className="text-sm font-black text-[#ff5a00] uppercase tracking-widest mb-6">Account Preferences</h3>
                  <div className="space-y-4">
                     {[
                        { icon: Globe, label: 'Language', val: 'English (US)' },
                        { icon: Eye, label: 'Appearance', val: 'System Dark' },
                        { icon: Lock, label: 'Privacy', val: 'Public Profile' }
                     ].map((s, i) => (
                        <div key={i} className="flex items-center justify-between py-2 cursor-pointer group">
                           <div className="flex items-center gap-4">
                              <s.icon size={20} className="text-slate-500 group-hover:text-white transition-colors" />
                              <span className="font-bold text-sm">{s.label}</span>
                           </div>
                           <span className="text-xs text-slate-500 font-bold">{s.val}</span>
                        </div>
                     ))}
                  </div>
               </section>
               <section className="bg-[#1a1d23] border border-white/5 rounded-3xl p-6">
                  <h3 className="text-sm font-black text-rose-500 uppercase tracking-widest mb-6">Danger Zone</h3>
                  <button className="flex items-center gap-4 p-4 w-full bg-rose-500/10 text-rose-500 rounded-2xl transition-all font-bold text-sm"><Trash2 size={20} /> Delete Account</button>
               </section>
            </div>
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
