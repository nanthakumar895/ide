import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  ChevronRight,
  LayoutGrid,
  Menu,
  Zap,
  Loader2,
  CheckCircle,
  Award,
  Clock,
  LogOut
} from 'lucide-react';
import { MOCK_PROBLEMS } from '../../data/mockProblems';
import { useAuth, useUser } from '@clerk/clerk-react';
import { useSupabase } from '../../hooks/useSupabase';

const App = () => {
  const [activeTab, setActiveTab] = useState('Explore');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  const { isLoaded, isSignedIn, userId, signOut } = useAuth();
  const { user } = useUser();
  const { getClient } = useSupabase();

  const fetchProfile = useCallback(async (uid: string) => {
    setLoadingProfile(true);
    try {
      const supabase = await getClient();
      if (supabase) {
         const { data, error } = await supabase.from('profiles').select('*').eq('id', uid).maybeSingle();
         if (data) setProfile(data);
         if (error) console.error('Profile fetch failed:', error);
      }
    } catch (err) {
      console.error(err);
    } finally {
      // Small delay to prevent blinking
      setTimeout(() => setLoadingProfile(false), 300);
    }
  }, [getClient]);

  useEffect(() => {
    if (isLoaded) {
       if (isSignedIn && userId) {
          fetchProfile(userId);
       } else {
          setProfile(null);
          setLoadingProfile(false);
       }
    }
  }, [isLoaded, isSignedIn, userId, fetchProfile]);

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

  const filteredProblems = useMemo(() => {
    return MOCK_PROBLEMS.slice(0, 100).filter(p => selectedCategory === 'All' || p.difficulty === selectedCategory);
  }, [selectedCategory]);

  if (!isLoaded) {
    return (
      <div className="h-screen w-screen bg-[#0b0e14] flex items-center justify-center">
        <Loader2 className="animate-spin text-[#ff5a00]" size={48} />
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-64 bg-[#0b0e14] border-r border-white/5 z-50">
        <div className="p-6 mb-4 flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-9 h-9 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white shrink-0 shadow-lg shadow-[#ff5a00]/10">P</div>
          <h1 className="font-bold text-xl text-white hidden lg:block tracking-tight">ProCode</h1>
        </div>
        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => {
             const isActive = activeTab === item.id;
             return (
               <button key={item.id} onClick={() => { setActiveTab(item.id); if (item.link !== '/') window.location.href = item.link; }} className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-[#ff5a00]/10 text-[#ff5a00]' : 'text-slate-500 hover:bg-white/5'}`}>
                 <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                 <span className={`font-bold text-sm hidden lg:block tracking-tight ${isActive ? 'opacity-100' : 'opacity-80'}`}>{item.label}</span>
               </button>
             );
          })}
        </nav>
        {isSignedIn && (
          <div className="p-4 mt-auto">
             <button onClick={() => signOut()} className="w-full flex items-center gap-4 p-3 rounded-2xl text-rose-500 hover:bg-rose-500/10 transition-all font-bold text-sm">
                <LogOut size={24} /> <span className="hidden lg:block">Sign Out</span>
             </button>
          </div>
        )}
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)} />

        <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-40 border-b border-white/5">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(true)} className="p-1 text-slate-400 hover:text-white transition-colors md:hidden"><Menu size={24} /></button>
            <div className="hidden md:flex items-center gap-4"><div className="text-sm font-bold text-slate-400 tracking-wide uppercase text-[10px]">Explore Problems</div></div>
          </div>
          <div className="flex items-center gap-4">
             {!isSignedIn ? (
                <button onClick={() => window.location.href='/editor.html'} className="bg-[#ff5a00] text-white px-5 py-1.5 rounded-xl font-bold text-sm transition-all hover:bg-[#ff7e00]">Sign In</button>
             ) : (
                <div className="flex items-center gap-4">
                   <div className="text-xs font-bold text-slate-400 hidden sm:block">{user?.username || user?.firstName || 'User'}</div>
                   <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-[10px] font-bold text-white cursor-pointer overflow-hidden border border-white/10 transition-all hover:ring-2 ring-white/20" onClick={() => window.location.href='/profile.html'}>
                      {user?.imageUrl ? <img src={user.imageUrl} className="w-full h-full object-cover" /> : user?.firstName?.[0] || 'U'}
                   </div>
                </div>
             )}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-4">
          <div className="max-w-5xl mx-auto px-4 lg:px-8">
            {loadingProfile ? (
               <div className="bg-[#1a1d23] border border-white/5 rounded-[2rem] p-8 mb-8 animate-pulse flex flex-col gap-4 h-48 justify-center">
                  <div className="h-6 w-32 bg-white/5 rounded-lg"></div>
                  <div className="h-4 w-full bg-white/5 rounded-xl max-w-md"></div>
                  <div className="h-10 w-full bg-white/5 rounded-xl"></div>
               </div>
            ) : (
               <div className="bg-[#1a1d23] border border-white/5 rounded-[2rem] p-6 mb-8 relative overflow-hidden group">
                 <div className="absolute top-1/2 -translate-y-1/2 right-8 opacity-[0.03] transition-opacity duration-500 group-hover:scale-110"><Trophy size={140} /></div>
                 <div className="relative z-10">
                   <h2 className="text-2xl font-black text-white mb-0.5">Level {profile?.level || 1}</h2>
                   <p className="text-xs text-slate-400 mb-6 font-medium italic opacity-70">"{profile?.title || 'Beginner'}"</p>
                   <div className="relative pt-1">
                     <div className="flex items-center justify-between mb-2">
                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Progress</div>
                        <div className="text-[10px] font-bold text-[#ff5a00] uppercase tracking-wider">{profile?.points || 0} Points</div>
                     </div>
                     <div className="overflow-hidden h-2.5 text-xs flex rounded-full bg-slate-950 border border-white/5 shadow-inner">
                       <div style={{ width: "15%" }} className="shadow-none flex flex-col text-center bg-gradient-to-r from-[#ff5a00] to-[#ff8c00] rounded-full relative">
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
            )}

            <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
              {['All', 'Easy', 'Medium', 'Hard'].map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${selectedCategory === cat ? 'bg-white text-black shadow-lg shadow-white/5' : 'bg-[#1a1d23] text-slate-400 border border-white/5 hover:border-white/10'}`}>{cat}</button>
              ))}
            </div>

            <div className="space-y-3">
              {filteredProblems.map(p => (
                <div key={p.id} className="bg-[#1a1d23] border border-white/5 p-5 rounded-2xl flex items-center justify-between hover:border-white/20 transition-all hover:bg-[#21242a] cursor-pointer group" onClick={() => window.location.href = `/editor.html?id=${p.id}`}>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold text-slate-600 tracking-wider">#{p.id}</span>
                      <h4 className="font-bold text-sm text-slate-100 group-hover:text-white transition-colors">{p.title}</h4>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-[9px] px-2.5 py-0.5 rounded-md font-black uppercase tracking-wider ${difficultyColor(p.difficulty)}`}>{p.difficulty}</span>
                      <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                      <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tight opacity-70">{p.topics.split(',')[0]}</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-slate-700 group-hover:text-slate-400 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Mobile Footer Navigation */}
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center relative">
            {navItems.map((item) => {
               const isActive = activeTab === item.id;
               return (
                <button key={item.id} onClick={() => { setActiveTab(item.id); if (item.link !== '/') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${isActive ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
                  <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#ff5a00]/10 scale-110 shadow-[0_0_20px_rgba(255,90,0,0.1)]' : ''}`}>
                    <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                  </div>
                  <span className={`text-[9px] font-bold mt-1.5 tracking-tight ${isActive ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
                  {isActive && <div className="absolute -top-3 w-1 h-1 bg-[#ff5a00] rounded-full shadow-[0_0_8px_#ff5a00]"></div>}
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
