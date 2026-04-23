import { useState, useEffect, useCallback } from 'react';
import {
  Trophy,
  ShoppingBag,
  User,
  LayoutGrid,
  Zap,
  CheckCircle,
  Clock,
  Award,
  Loader2,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAuth, useUser, useClerk } from '@clerk/clerk-react';
import { useSupabase } from '../../hooks/useSupabase';

const App = () => {
  const [profile, setProfile] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const { isLoaded, isSignedIn, userId } = useAuth();
  const { user } = useUser();
  const { signOut } = useClerk();
  const { getClient } = useSupabase();

  const fetchData = useCallback(async (uid: string) => {
    setLoading(true);
    try {
      const supabase = await getClient();
      if (supabase) {
        const [profRes, subRes] = await Promise.all([
          supabase.from('profiles').select('*').eq('id', uid).maybeSingle(),
          supabase.from('submissions').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(15)
        ]);
        if (profRes.data) setProfile(profRes.data);
        if (subRes.data) setSubmissions(subRes.data);
      }
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [getClient]);

  useEffect(() => {
    if (isLoaded) {
       if (isSignedIn && userId) fetchData(userId);
       else setLoading(false);
    }
  }, [isLoaded, isSignedIn, userId, fetchData]);

  const handleSignOut = () => signOut().then(() => window.location.href = '/');

  const navItems = [
    { id: 'Explore', icon: LayoutGrid, label: 'Explore', link: '/' },
    { id: 'Prep', icon: Trophy, label: 'Prep', link: '/interview.html' },
    { id: 'Store', icon: ShoppingBag, label: 'Store', link: '/store.html' },
    { id: 'Plus', icon: Zap, label: 'Premium', link: '/premium.html' },
    { id: 'Profile', icon: User, label: 'Account', link: '/profile.html' }
  ];

  if (!isLoaded) return <div className="h-screen w-screen bg-[#0b0e14] flex items-center justify-center"><Loader2 className="animate-spin text-[#ff5a00]" size={48} /></div>;
  if (!isSignedIn) return <div className="h-screen w-screen bg-[#0b0e14] flex flex-col items-center justify-center p-8 text-center"><h2 className="text-2xl font-black text-white mb-4">Please Sign In</h2><button onClick={() => window.location.href='/editor.html'} className="bg-[#ff5a00] text-white px-8 py-3 rounded-2xl font-bold uppercase tracking-widest transition-all hover:bg-[#ff7e00]">Go to Login</button></div>;

  const stats = [
    { label: 'Solved', value: submissions.filter(s => s.status === 'Accepted').length, icon: CheckCircle, color: 'text-emerald-500' },
    { label: 'Points', value: profile?.points || 0, icon: Trophy, color: 'text-amber-500' },
    { label: 'Level', value: profile?.level || 1, icon: Award, color: 'text-purple-500' },
    { label: 'Title', value: profile?.title || 'Beginner', icon: Zap, color: 'text-[#ff5a00]' },
  ];

  return (
    <div className="flex h-screen bg-[#0b0e14] text-slate-200 font-sans overflow-hidden relative">
      <aside className="hidden md:flex flex-col w-20 lg:w-64 bg-[#0b0e14] border-r border-white/5 z-50">
        <div className="p-6 mb-4 flex items-center gap-3 cursor-pointer" onClick={() => window.location.href = '/'}>
          <div className="w-9 h-9 bg-[#ff5a00] rounded-lg flex items-center justify-center font-black text-white">P</div>
          <h1 className="font-bold text-xl text-white hidden lg:block tracking-tight">ProCode</h1>
        </div>
        <nav className="flex-1 px-3 space-y-2">
          {navItems.map((item) => {
             const isActive = item.id === 'Profile';
             return (
               <button key={item.id} onClick={() => { if (item.link !== '/profile.html') window.location.href = item.link; }} className={`w-full flex items-center gap-4 p-3 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-[#ff5a00]/10 text-[#ff5a00]' : 'text-slate-500 hover:bg-white/5'}`}>
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} className="shrink-0" />
                  <span className={`font-bold text-sm hidden lg:block tracking-tight ${isActive ? 'opacity-100' : 'opacity-80'}`}>{item.label}</span>
               </button>
             );
          })}
        </nav>
        <div className="p-4 mt-auto">
           <button onClick={handleSignOut} className="w-full flex items-center gap-4 p-3 rounded-2xl text-rose-500 hover:bg-rose-500/10 transition-all font-bold text-sm">
              <LogOut size={24} /> <span className="hidden lg:block">Sign Out</span>
           </button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="flex-none bg-[#0b0e14] px-4 h-14 flex items-center justify-between z-40 border-b border-white/5">
          <div className="flex items-center gap-4">
             <div className="hidden md:block text-sm font-bold text-slate-400 uppercase tracking-widest">My Account</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
               {user?.imageUrl ? <img src={user.imageUrl} className="w-full h-full object-cover" /> : user?.firstName?.[0] || 'U'}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto pb-28 md:pb-8 pt-8">
          <div className="max-w-4xl mx-auto px-4">
            {loading ? (
               <div className="flex justify-center py-20 animate-pulse"><div className="w-12 h-12 bg-white/5 rounded-full border-4 border-t-[#ff5a00] border-[#1a1d23] animate-spin"></div></div>
            ) : (
               <>
                <div className="bg-[#1a1d23] border border-white/5 rounded-[2.5rem] p-8 mb-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12"><User size={180} /></div>
                   <div className="w-32 h-32 rounded-full bg-indigo-500 flex items-center justify-center text-4xl font-black text-white shadow-2xl ring-4 ring-white/5 z-10 overflow-hidden">
                      {user?.imageUrl ? <img src={user.imageUrl} className="w-full h-full object-cover" /> : user?.firstName?.[0] || 'U'}
                   </div>
                   <div className="flex-1 text-center md:text-left z-10">
                      <h2 className="text-3xl font-black text-white mb-1">{user?.username || user?.fullName || 'User'}</h2>
                      <p className="text-slate-400 mb-4 flex items-center justify-center md:justify-start gap-2 text-sm"><Clock size={14} /> Joined {profile?.updated_at ? new Date(profile.updated_at).toLocaleDateString() : '...'}</p>
                      <div className="flex flex-wrap justify-center md:justify-start gap-4">
                         <span className="bg-[#ff5a00]/10 text-[#ff5a00] px-4 py-1.5 rounded-full text-xs font-bold border border-[#ff5a00]/20">Premium Active</span>
                         <span className="bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20">{submissions.filter(s => s.status === 'Accepted').length} Tasks Completed</span>
                      </div>
                   </div>
                </div>

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
                   <div className="md:col-span-2">
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Clock size={18} className="text-[#ff5a00]" /> Recent Submissions</h3>
                      <div className="space-y-3">
                         {submissions.length > 0 ? submissions.map((sub, i) => (
                            <div key={i} className="bg-[#1a1d23] border border-white/5 p-5 rounded-2xl flex items-center justify-between transition-all hover:bg-[#21242a] group cursor-pointer">
                               <div className="flex items-center gap-4 text-left">
                                  <div className={`w-2 h-2 rounded-full ${sub.status === 'Accepted' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-rose-500'}`}></div>
                                  <div>
                                     <div className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">Problem #{sub.problem_id}</div>
                                     <div className="text-[10px] text-slate-500 font-medium">{new Date(sub.created_at).toLocaleString()}</div>
                                  </div>
                               </div>
                               <div className="flex items-center gap-6">
                                  <div className="text-right">
                                     <div className={`text-xs font-bold ${sub.status === 'Accepted' ? 'text-emerald-500' : 'text-rose-500'}`}>{sub.status}</div>
                                     <div className="text-[9px] text-slate-600 font-bold uppercase tracking-widest">{sub.runtime ? `${sub.runtime}ms` : '--'}</div>
                                  </div>
                                  <ChevronRight size={14} className="text-slate-700 group-hover:text-slate-400 transition-all" />
                               </div>
                            </div>
                         )) : <div className="text-slate-500 text-sm font-bold p-12 text-center bg-[#1a1d23] rounded-3xl border-2 border-dashed border-white/5 opacity-50">No activity yet. Start solving problems to track progress!</div>}
                      </div>
                   </div>
                   <div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2"><Award size={18} className="text-[#ff5a00]" /> Badges</h3>
                      <div className="bg-[#1a1d23] border border-white/5 p-6 rounded-3xl">
                         <div className="grid grid-cols-3 gap-4 text-center">
                            {['🥇', '🚀', '🔥', '🧩', '💎', '🏆'].map((emoji, i) => (
                               <div key={i} className="text-2xl bg-white/5 p-3 rounded-2xl hover:scale-110 hover:bg-white/10 transition-all cursor-pointer">{emoji}</div>
                            ))}
                         </div>
                      </div>
                   </div>
                </div>
               </>
            )}
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-[#0b0e14]/90 backdrop-blur-2xl border-t border-white/5 px-4 pt-3 pb-8 z-[100] md:hidden">
          <div className="max-w-lg mx-auto flex justify-between items-center relative">
            {navItems.map((item) => {
               const isActive = item.id === 'Profile';
               return (
                <button key={item.id} onClick={() => { if (item.link !== '/profile.html') window.location.href = item.link; }} className={`flex flex-col items-center justify-center w-14 transition-all duration-300 ${isActive ? 'text-[#ff5a00]' : 'text-slate-500'}`}>
                  <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-[#ff5a00]/10 scale-110 shadow-[0_0_20px_rgba(255,90,0,0.1)]' : ''}`}><item.icon size={22} strokeWidth={isActive ? 2.5 : 2} /></div>
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
