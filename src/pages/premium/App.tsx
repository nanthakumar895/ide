import { useState } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  Check,
  Star,
  ShieldCheck,
  ZapIcon,
  Settings,
  Search,
  Bell
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    { title: 'Unlimited Execution', desc: 'No daily limits on running your code.', icon: ZapIcon },
    { title: 'Premium Problems', desc: 'Access exclusive high-quality interview questions.', icon: Star },
    { title: 'Priority Support', desc: 'Get help from our mentors within 24 hours.', icon: ShieldCheck },
    { title: 'No Advertisements', desc: 'Enjoy a clean, distraction-free environment.', icon: Check },
    { title: 'Exclusive Badges', desc: 'Show off your status with unique profile badges.', icon: Trophy },
    { title: 'Video Solutions', desc: 'Watch detailed video walkthroughs for problems.', icon: LayoutGrid },
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
             const isActive = item.id === 'Plus';
             return (
               <button key={item.id} onClick={() => { if (item.link !== '/premium.html') window.location.href = item.link; }} className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-[#ff5a00]/10 text-[#ff5a00]' : 'text-slate-500 hover:bg-white/5'}`}>
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
            <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-widest">Premium Membership</div>
          </div>
          <div className="flex items-center gap-4">
             <button className="p-2 text-slate-400 hover:text-white"><Search size={20} /></button>
             <button className="p-2 text-slate-400 hover:text-white"><Bell size={20} /></button>
             <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border border-white/10">JD</div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto pb-28 md:pb-12 pt-12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
               <div className="inline-flex items-center gap-2 bg-[#ff5a00]/10 text-[#ff5a00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">ProCode Premium</div>
               <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Level Up Your Career.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
               <div className="bg-[#1a1d23] border border-white/5 p-10 rounded-[3rem] flex flex-col">
                  <h3 className="text-xl font-bold text-slate-400 mb-2">Monthly</h3>
                  <div className="flex items-baseline gap-2 mb-8"><span className="text-5xl font-black text-white">$35</span><span className="text-slate-500 font-bold uppercase text-xs">/ month</span></div>
                  <ul className="space-y-4 mb-10 flex-1">
                     {['Unlimited Executions', 'All Premium Problems', 'Priority Support', 'No Ads'].map((f, i) => (<li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300"><div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-emerald-500"><Check size={12} strokeWidth={3} /></div>{f}</li>))}
                  </ul>
                  <button className="w-full py-5 rounded-[1.5rem] bg-white text-black font-black text-sm uppercase transition-colors">Get Started</button>
               </div>
               <div className="bg-[#1a1d23] border-2 border-[#ff5a00] p-10 rounded-[3rem] relative flex flex-col">
                  <div className="absolute -top-4 right-10 bg-[#ff5a00] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Best Value</div>
                  <h3 className="text-xl font-bold text-[#ff5a00] mb-2">Yearly</h3>
                  <div className="flex items-baseline gap-2 mb-2"><span className="text-5xl font-black text-white">$299</span><span className="text-slate-500 font-bold uppercase text-xs">/ year</span></div>
                  <div className="text-emerald-500 text-xs font-bold mb-8 uppercase tracking-widest">Save over 30% annually</div>
                  <ul className="space-y-4 mb-10 flex-1">
                     {['All Monthly Features', 'Exclusive Hoodie', 'Annual Member Badge', 'Early Feature Access'].map((f, i) => (<li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-100"><div className="w-5 h-5 rounded-full bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00]"><Check size={12} strokeWidth={3} /></div>{f}</li>))}
                  </ul>
                  <button className="w-full py-5 rounded-[1.5rem] bg-[#ff5a00] text-white font-black text-sm uppercase tracking-widest">Unlock Pro Plus</button>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {features.map((f, i) => (<div key={i} className="bg-[#1a1d23]/50 border border-white/5 p-8 rounded-3xl group transition-all"><div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#ff5a00] mb-6 group-hover:scale-110 transition-transform"><f.icon size={24} /></div><h4 className="font-bold text-white mb-2">{f.title}</h4><p className="text-xs text-slate-500 leading-relaxed font-medium">{f.desc}</p></div>))}
            </div>
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center">
            {navItems.map((item) => {
               const isActive = item.id === 'Plus';
               return (
                <button key={item.id} onClick={() => { if (item.link !== '/premium.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${isActive ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
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
