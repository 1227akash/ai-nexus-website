import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  User, 
  MessageSquareCode, 
  Rocket, 
  Compass, 
  Search
} from 'lucide-react';
import { UserProfile } from '../types';

interface NavbarProps {
  profile: UserProfile | null;
  onOpenProfile: () => void;
  onOpenIChat: () => void;
  onOpenSecurity: () => void;
  onNavigateSection: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenProfile,
  onOpenIChat,
  onOpenSecurity,
  onNavigateSection,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#07070e]/80 border-b border-white/[0.08] backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Brand / Logo: Vexta Clean Geometric Aesthetic */}
        <div 
          onClick={() => onNavigateSection('hero')} 
          className="flex items-center gap-3 cursor-pointer group flex-shrink-0"
        >
          {/* Vexta-inspired Geometric Icon Mark */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/[0.04] border border-white/15 flex items-center justify-center group-hover:border-purple-400/50 group-hover:bg-white/[0.08] transition-all">
            <div className="w-4 h-4 border-2 border-white/80 rounded-sm rotate-45 group-hover:rotate-90 group-hover:border-purple-300 transition-all duration-300" />
            <div className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-200 transition-colors">
                AKASH AI
              </span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 hidden sm:inline-block">
                NEXUS
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-sans tracking-tight hidden sm:block">
              106 Frontier AI Models Directory
            </p>
          </div>
        </div>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-display font-medium">
          <button 
            onClick={() => onNavigateSection('directory')}
            className="flex items-center gap-2 text-slate-200 hover:text-white transition-colors py-1 group"
          >
            <Compass className="w-4 h-4 text-purple-400 group-hover:rotate-45 transition-transform" />
            <span>All AI Tools</span>
            <span className="text-[10px] bg-purple-500/15 text-purple-300 border border-purple-500/30 px-1.5 py-0.2 rounded-full font-mono font-bold">
              106
            </span>
          </button>

          <button 
            onClick={() => onNavigateSection('new-releases')}
            className="flex items-center gap-2 text-slate-300 hover:text-amber-300 transition-colors py-1 group"
          >
            <Rocket className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            <span>New Releases</span>
            <span className="text-[10px] bg-amber-500/15 text-amber-300 border border-amber-500/30 px-1.5 py-0.2 rounded-full font-mono">
              i-Tools
            </span>
          </button>
          
          <button 
            onClick={() => onNavigateSection('black-hole-section')}
            className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors py-1"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>3D Singularity</span>
          </button>
        </nav>

        {/* Clean Search Bar */}
        <div className="relative flex-1 max-w-xs hidden lg:block">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search 106 models..."
            className="w-full pl-9 pr-4 py-1.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400/50 focus:outline-none text-xs text-slate-200 placeholder-slate-500 transition-all backdrop-blur-sm"
          />
        </div>

        {/* Right Action Icons: Security, iChat, Profile */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          
          {/* Security Shield Indicator Button */}
          <button
            onClick={onOpenSecurity}
            title="Akash Security Shield: Anti-Hijacking & Integrity Verification"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/[0.03] border border-emerald-500/30 hover:border-emerald-400/60 text-emerald-300 text-xs font-mono transition-all shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="hidden sm:inline font-semibold">SHIELD</span>
            {profile?.isLocked ? (
              <Lock className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Unlock className="w-3.5 h-3.5 text-emerald-400" />
            )}
          </button>

          {/* iChat Assistant Toggle Button */}
          <button
            onClick={onOpenIChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-display font-semibold transition-all active:scale-95"
          >
            <MessageSquareCode className="w-4 h-4 text-purple-300" />
            <span>iChat</span>
          </button>

          {/* User Profile Button */}
          <button
            onClick={onOpenProfile}
            className="flex items-center gap-2 p-1 pl-2 pr-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all text-xs"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center font-bold text-white text-xs shadow-inner overflow-hidden">
              {profile?.avatar ? (
                <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-3.5 h-3.5" />
              )}
            </div>
            <span className="font-display font-medium text-slate-200 hidden sm:inline">
              {profile ? profile.name : 'Account'}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
};
