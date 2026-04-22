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
  Zap
} from 'lucide-react';
import { MOCK_PROBLEMS } from '../../data/mockProblems';

const App = () => {
  const [activeTab, setActiveTab] = useState('Explore');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const StarIcon = ({ size, className }: { size: number, className?: string }) => <Zap size={size} className={className} />;

  const menuItems = [
    { icon: User, label: 'My Profile', sub: 'View stats & badges', link: '/profile.html' },
    { icon: Trophy, label: 'Leaderboard', sub: 'Top solvers', link: '#' },
    { icon: StarIcon, label: 'Premium', sub: 'Unlock solutions', highlight: true, link: '/premium.html' },
    { icon: Settings, label: 'Settings', sub: 'Preferences', link: '/settings.html' },
  ];

  const difficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy': return 'text-emerald-400 bg-emerald-400/10';
      case 'Medium': return 'text-amber-400 bg-amber-400/10';
      case 'Hard': return 'text-rose-400 bg-rose-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#0f1115] text-slate-200 font-sans overflow-hidden relative">

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#16191f] z-[70] transform transition-transform duration-300 ease-in-out border-r border-slate-800 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-800">
          <div className="flex justify-between items-center mb-8">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">P</div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500"><X size={20} /></button>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center font-bold text-white ring-2 ring-slate-800">JD</div>
            <div>
              <p className="font-bold text-white">John Doe</p>
              <p className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Premium Plus</p>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <button
                key={idx}
                className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:bg-slate-800 transition-colors"
                onClick={() => window.location.href = item.link}
              >
                <IconComponent size={20} />
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-200">{item.label}</p>
                  <p className="text-[10px] opacity-50">{item.sub}</p>
                </div>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Header */}
      <header className="flex-none bg-[#0f1115] border-b border-slate-800 px-4 py-3 flex items-center justify-between z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-400 hover:text-white"><Menu size={24} /></button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-white">P</div>
            <h1 className="font-bold text-lg hidden sm:block">ProCode</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400"><Search size={20} /></button>
          <div onClick={() => setIsMenuOpen(true)} className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border border-slate-700 cursor-pointer">JD</div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        <section className="p-4">
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-800 rounded-3xl p-5 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10"><Trophy size={80} /></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-1">Level 24</h2>
              <p className="text-xs text-slate-400 mb-4 font-medium italic">"The Array Master"</p>
              <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-orange-500 h-full w-[65%] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
              </div>
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                <span>Progress</span>
                <span className="text-orange-500">65% to Level 25</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 overflow-x-auto mb-6">
            {['All', 'Easy', 'Medium', 'Hard'].map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-2xl text-xs font-bold transition-all ${
                  selectedCategory === cat ? 'bg-white text-black' : 'bg-slate-800/50 text-slate-400 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {MOCK_PROBLEMS.slice(0, 50).filter(p => selectedCategory === 'All' || p.difficulty === selectedCategory).map(p => (
              <div
                key={p.id}
                className="bg-[#16191f] border border-slate-800/50 p-4 rounded-2xl flex items-center justify-between hover:border-slate-600 transition-all active:scale-[0.98] cursor-pointer"
                onClick={() => window.location.href = `/editor.html?id=${p.id}`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-slate-600">#${p.id}</span>
                    <h4 className="font-bold text-sm">${p.title}</h4>
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-[9px] px-2 py-0.5 rounded-md font-black uppercase tracking-wider ${difficultyColor(p.difficulty)}`}>${p.difficulty}</span>
                    <span className="text-[9px] text-slate-500 bg-slate-800 px-2 py-0.5 rounded-md uppercase font-bold">${p.topics.split(',')[0]}</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-700" />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Fixed Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#0f1115]/95 backdrop-blur-xl border-t border-slate-800/80 px-2 pt-2 pb-6 z-[100]">
        <div className="max-w-md mx-auto flex justify-between items-center">
          {[
            { id: 'Explore', icon: LayoutGrid, label: 'Explore', link: '/' },
            { id: 'Prep', icon: Trophy, label: 'Prep', link: '/interview.html' },
            { id: 'Store', icon: ShoppingBag, label: 'Store', link: '/store.html' },
            { id: 'Plus', icon: Zap, label: 'Premium', link: '/premium.html' },
            { id: 'Profile', icon: User, label: 'Account', link: '/profile.html' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (item.link !== '/') window.location.href = item.link;
              }}
              className={`flex flex-col items-center justify-center w-16 group transition-all duration-300 ${
                activeTab === item.id ? 'text-orange-500' : 'text-slate-500'
              }`}
            >
              <div className={`mb-1 p-1.5 rounded-xl transition-all duration-300 ${
                activeTab === item.id ? 'bg-orange-500/10 scale-110 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 'group-hover:text-slate-300'
              }`}>
                <item.icon size={activeTab === item.id ? 22 : 20} strokeWidth={activeTab === item.id ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-bold tracking-tight transition-opacity duration-300 ${
                activeTab === item.id ? 'opacity-100' : 'opacity-60'
              }`}>
                {item.label}
              </span>

              {/* Active Indicator Dot */}
              <div className={`mt-1.5 h-1 w-1 rounded-full transition-all duration-300 ${
                activeTab === item.id ? 'bg-orange-500 scale-100 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-transparent scale-0'
              }`} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
