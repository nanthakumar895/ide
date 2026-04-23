import { useState } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  Menu,
  X,
  Search,
  Bell,
  CheckCircle,
  Clock,
  Award,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const stats = [
    { label: 'Solved', value: '124', icon: CheckCircle, color: 'text-emerald-500' },
    { label: 'Contests', value: '15', icon: Award, color: 'text-purple-500' },
    { label: 'Points', value: '2,450', icon: Trophy, color: 'text-amber-500' },
    { label: 'Rank', value: '12,403', icon: Zap, color: 'text-[#ff5a00]' },
  ];

  const recentSubmissions = [
    { title: 'Two Sum', status: 'Accepted', time: '2 hours ago', difficulty: 'Easy' },
    { title: 'Add Two Numbers', status: 'Accepted', time: '5 hours ago', difficulty: 'Medium' },
    { title: 'Longest Substring...', status: 'Wrong Answer', time: '1 day ago', difficulty: 'Medium' },
    { title: 'Median of Two Arrays', status: 'Accepted', time: '3 days ago', difficulty: 'Hard' },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">

      {/* Side Menu Drawer */}
      <aside className={`fixed top-0 left-0 bottom-0 w-[280px] bg-[#1a1d23] z-[70] transform transition-transform duration-300 ease-in-out border-r border-white/5 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
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
      </aside>

      {/* Header */}
      <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-50 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={() => setIsMenuOpen(true)} className="p-1 text-slate-400 hover:text-white transition-colors"><Menu size={24} /></button>
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
            <div className="w-8 h-8 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shadow-[0_2px_8px_rgba(255,90,0,0.3)]">P</div>
            <h1 className="font-bold text-lg text-white">ProCode</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-400 hover:text-white transition-colors"><Search size={20} /></button>
          <button className="p-2 text-slate-400 hover:text-white transition-colors hidden sm:block"><Bell size={20} /></button>
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white border border-white/10">JD</div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 overflow-y-auto pb-28 pt-8 custom-scrollbar">
        <div className="max-w-4xl mx-auto px-4">

          {/* Profile Section */}
          <div className="bg-[#1a1d23] border border-white/5 rounded-[2.5rem] p-8 mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12"><User size={180} /></div>
             <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-black text-white shadow-2xl ring-4 ring-white/5 z-10">JD</div>
             <div className="flex-1 text-center md:text-left z-10">
                <h2 className="text-3xl font-black text-white mb-1">John Doe</h2>
                <p className="text-slate-400 mb-4 flex items-center justify-center md:justify-start gap-2">
                   <Clock size={14} /> Member since July 2026
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                   <span className="bg-[#ff5a00]/10 text-[#ff5a00] px-4 py-1.5 rounded-full text-xs font-bold border border-[#ff5a00]/20">Premium Plus</span>
                   <span className="bg-slate-800/50 text-slate-400 px-4 py-1.5 rounded-full text-xs font-bold border border-white/5">United States</span>
                </div>
             </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
             {stats.map((s, i) => (
                <div key={i} className="bg-[#1a1d23] border border-white/5 p-6 rounded-3xl text-center hover:border-white/10 transition-colors">
                   <div className={`flex justify-center mb-3 ${s.color}`}><s.icon size={24} /></div>
                   <div className="text-2xl font-black text-white mb-0.5">{s.value}</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{s.label}</div>
                </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Main Content */}
             <div className="md:col-span-2 space-y-8">
                <section>
                   <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Clock size={18} className="text-[#ff5a00]" /> Recent Submissions
                   </h3>
                   <div className="space-y-3">
                      {recentSubmissions.map((sub, i) => (
                         <div key={i} className="bg-[#1a1d23] border border-white/5 p-4 rounded-2xl flex items-center justify-between hover:bg-[#21242a] transition-all cursor-pointer group">
                            <div className="flex items-center gap-4">
                               <div className={`w-2 h-2 rounded-full ${sub.status === 'Accepted' ? 'bg-emerald-500' : 'bg-rose-500'}`}></div>
                               <div>
                                  <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{sub.title}</div>
                                  <div className="text-[10px] text-slate-500 font-medium">{sub.time} • {sub.difficulty}</div>
                               </div>
                            </div>
                            <ChevronRight size={16} className="text-slate-700" />
                         </div>
                      ))}
                   </div>
                   <button className="w-full mt-4 py-3 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors bg-white/5 rounded-xl border border-white/5">View All Activity</button>
                </section>
             </div>

             {/* Side Content */}
             <div>
                <section>
                   <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                      <Award size={18} className="text-[#ff5a00]" /> Badges
                   </h3>
                   <div className="bg-[#1a1d23] border border-white/5 p-6 rounded-3xl">
                      <div className="grid grid-cols-3 gap-4 text-center">
                         {['🥇', '🚀', '🔥', '🧩', '💎', '🏆'].map((emoji, i) => (
                            <div key={i} className="text-2xl bg-white/5 p-3 rounded-2xl hover:scale-110 transition-transform cursor-pointer" title="Badge Name">{emoji}</div>
                         ))}
                      </div>
                      <p className="text-[10px] text-center text-slate-500 mt-6 font-bold uppercase tracking-widest">12 Badges Earned</p>
                   </div>
                </section>
             </div>
          </div>

        </div>
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100]">
        <div className="max-w-lg mx-auto flex justify-between items-center">
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
                if (item.link !== '/profile.html') window.location.href = item.link;
              }}
              className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${activeTab === item.id || (item.id === 'Profile') ? 'text-[#ff5a00]' : 'text-slate-500'}`}
            >
              <div className={`p-1.5 rounded-xl transition-all duration-300 ${item.id === 'Profile' ? 'bg-[#ff5a00]/10 scale-110 shadow-[0_0_20px_rgba(255,90,0,0.1)]' : ''}`}>
                <item.icon size={22} strokeWidth={item.id === 'Profile' ? 2.5 : 2} />
              </div>
              <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${item.id === 'Profile' ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
              <div className={`mt-1 h-1.5 w-1.5 rounded-full transition-all duration-500 ${item.id === 'Profile' ? 'bg-[#ff5a00] scale-100 shadow-[0_0_10px_rgba(255,90,0,1)]' : 'bg-transparent scale-0'}`} />
            </button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
