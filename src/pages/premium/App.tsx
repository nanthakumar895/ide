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
  ZapIcon
} from 'lucide-react';

const App = () => {
  const features = [
    { title: 'Unlimited Execution', desc: 'No daily limits on running your code.', icon: ZapIcon },
    { title: 'Premium Problems', desc: 'Access exclusive high-quality interview questions.', icon: Star },
    { title: 'Priority Support', desc: 'Get help from our mentors within 24 hours.', icon: ShieldCheck },
    { title: 'No Advertisements', desc: 'Enjoy a clean, distraction-free environment.', icon: Check },
    { title: 'Exclusive Badges', desc: 'Show off your status with unique profile badges.', icon: Trophy },
    { title: 'Video Solutions', desc: 'Watch detailed video walkthroughs for problems.', icon: LayoutGrid },
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
      <main className="flex-1 overflow-y-auto pb-28 pt-12 custom-scrollbar">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-[#ff5a00]/10 text-[#ff5a00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-[#ff5a00]/20 mb-6">ProCode Premium</div>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Level Up Your Career.</h2>
             <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">Unlock the full power of ProCode and join thousands of engineers mastering their craft.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
             <div className="bg-[#1a1d23] border border-white/5 p-10 rounded-[3rem] hover:border-white/10 transition-all flex flex-col">
                <h3 className="text-xl font-bold text-slate-400 mb-2">Monthly</h3>
                <div className="flex items-baseline gap-2 mb-8">
                   <span className="text-5xl font-black text-white">5</span>
                   <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">/ month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                   {['Unlimited Executions', 'All Premium Problems', 'Priority Support', 'No Ads'].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                         <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-emerald-500"><Check size={12} strokeWidth={3} /></div>
                         {f}
                      </li>
                   ))}
                </ul>
                <button className="w-full py-5 rounded-[1.5rem] bg-white text-black font-black text-sm uppercase tracking-widest hover:bg-slate-200 transition-colors shadow-xl">Get Started</button>
             </div>
             <div className="bg-[#1a1d23] border-2 border-[#ff5a00] p-10 rounded-[3rem] relative shadow-[0_0_50px_rgba(255,90,0,0.1)] flex flex-col group">
                <div className="absolute -top-4 right-10 bg-[#ff5a00] text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Best Value</div>
                <h3 className="text-xl font-bold text-[#ff5a00] mb-2">Yearly</h3>
                <div className="flex items-baseline gap-2 mb-2">
                   <span className="text-5xl font-black text-white">99</span>
                   <span className="text-slate-500 font-bold uppercase text-xs tracking-widest">/ year</span>
                </div>
                <div className="text-emerald-500 text-xs font-bold mb-8 uppercase tracking-widest">Save over 30% annually</div>
                <ul className="space-y-4 mb-10 flex-1">
                   {['All Monthly Features', 'Exclusive Hoodie', 'Annual Member Badge', 'Early Feature Access'].map((f, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-100">
                         <div className="w-5 h-5 rounded-full bg-[#ff5a00]/20 flex items-center justify-center text-[#ff5a00]"><Check size={12} strokeWidth={3} /></div>
                         {f}
                      </li>
                   ))}
                </ul>
                <button className="w-full py-5 rounded-[1.5rem] bg-[#ff5a00] text-white font-black text-sm uppercase tracking-widest hover:bg-[#ff7e00] transition-colors shadow-2xl shadow-[#ff5a00]/20">Unlock Pro Plus</button>
             </div>
          </div>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
             {features.map((f, i) => (
                <div key={i} className="bg-[#1a1d23]/50 border border-white/5 p-8 rounded-3xl group hover:bg-[#1a1d23] transition-all">
                   <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#ff5a00] mb-6 group-hover:scale-110 transition-transform"><f.icon size={24} /></div>
                   <h4 className="font-bold text-white mb-2">{f.title}</h4>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                </div>
             ))}
          </div>
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
            <button key={item.id} onClick={() => { if (item.link !== '/premium.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${item.id === 'Plus' ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
              <div className={`p-1.5 rounded-xl transition-all duration-300 ${item.id === 'Plus' ? 'bg-[#ff5a00]/10 scale-110' : ''}`}><item.icon size={22} strokeWidth={item.id === 'Plus' ? 2.5 : 2} /></div>
              <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${item.id === 'Plus' ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
              <div className={`mt-1 h-1.5 w-1.5 rounded-full transition-all duration-500 ${item.id === 'Plus' ? 'bg-[#ff5a00] scale-100' : 'bg-transparent scale-0'}`} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
