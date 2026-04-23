import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  Coins,
  Gift,
  Shirt,
  Tag
} from 'lucide-react';

const App = () => {
  const products = [
    { name: 'ProCode Classic T-Shirt', points: '5,000', icon: Shirt, color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { name: 'Developer Hoodie', points: '12,000', icon: Gift, color: 'text-[#ff5a00]', bg: 'bg-[#ff5a00]/10' },
    { name: 'Premium (1 Month)', points: '8,000', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { name: 'Premium (1 Year)', points: '60,000', icon: Trophy, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { name: 'Custom Profile Frame', points: '2,500', icon: User, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'Pro Badge (Permanent)', points: '15,000', icon: Tag, color: 'text-rose-400', bg: 'bg-rose-400/10' },
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
        <div className="flex items-center gap-3 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
           <Coins size={16} className="text-amber-500" />
           <span className="text-sm font-black text-white tracking-tight">2,450</span>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto pb-28 pt-8 custom-scrollbar">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-black text-white mb-2 tracking-tight">ProCode Store</h2>
             <p className="text-slate-400 font-medium">Redeem your hard-earned points for exclusive perks and gear.</p>
          </div>
          <div className="bg-[#1a1d23] border border-white/5 rounded-[2.5rem] p-10 mb-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 -rotate-12"><Shirt size={220} /></div>
             <div className="flex-1 text-center md:text-left mb-8 md:mb-0 z-10">
                <div className="text-[#ff5a00] font-black text-[10px] uppercase tracking-[0.3em] mb-4">Limited Edition</div>
                <h3 className="text-3xl font-black text-white mb-4">The "2026 Season" Hoodie</h3>
                <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed font-medium">Premium heavyweight cotton with custom embroidered ProCode logo.</p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                   <div className="text-2xl font-black text-white flex items-center gap-2">
                      <Coins className="text-amber-500" /> 12,000
                   </div>
                   <button className="bg-white text-black px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-200 transition-all shadow-xl">Redeem Now</button>
                </div>
             </div>
          </div>
          <section className="mb-12">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {products.map((p, i) => (
                   <div key={i} className="bg-[#1a1d23] border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all group flex flex-col">
                      <div className={`w-14 h-14 ${p.bg} ${p.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                         <p.icon size={28} />
                      </div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-[#ff5a00] transition-colors">{p.name}</h4>
                      <div className="text-lg font-black text-white flex items-center gap-2 mb-6">
                         <Coins size={14} className="text-amber-500" /> {p.points}
                      </div>
                      <div className="flex-1"></div>
                      <button className="w-full py-4 rounded-2xl bg-white/5 text-white border border-white/5 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#ff5a00] hover:border-[#ff5a00] hover:text-white transition-all">Redeem</button>
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
            <button key={item.id} onClick={() => { if (item.link !== '/store.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${item.id === 'Store' ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
              <div className={`p-1.5 rounded-xl transition-all duration-300 ${item.id === 'Store' ? 'bg-[#ff5a00]/10 scale-110' : ''}`}><item.icon size={22} strokeWidth={item.id === 'Store' ? 2.5 : 2} /></div>
              <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${item.id === 'Store' ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
              <div className={`mt-1 h-1.5 w-1.5 rounded-full transition-all duration-500 ${item.id === 'Store' ? 'bg-[#ff5a00] scale-100' : 'bg-transparent scale-0'}`} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
