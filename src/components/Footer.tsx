import React from 'react';
import { 
  Sparkles, 
  Heart, 
  ShieldCheck, 
  Rocket, 
  ArrowUp, 
  Cpu, 
  Code2, 
  Terminal,
  Compass
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenSecurity: () => void;
  onOpenIChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenSecurity,
  onOpenIChat,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full border-t border-white/[0.08] bg-[#05050a] overflow-hidden pt-16 pb-12">
      
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-gradient-to-t from-purple-950/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Section: Clean Minimalist Vexta Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/15 flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-sm rotate-45" />
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                AKASH <span className="text-amber-400">AI NEXUS</span>
              </span>
            </div>

            <p className="font-serif italic text-slate-300 text-base sm:text-lg max-w-md leading-relaxed">
              "A curated archive of 106 frontier artificial intelligence models and high-performance WebGL singularity dynamics."
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-slate-300">
                106 Verified AI Models
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-amber-300">
                6+ New i-Tools
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-mono text-emerald-300">
                SHA-256 Guard Active
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-sans text-slate-400">
              <li>
                <button 
                  onClick={() => onNavigateSection('directory')}
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Compass className="w-3 h-3 text-purple-400" />
                  <span>All 106 AI Models</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('new-releases')}
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <Rocket className="w-3 h-3 text-amber-400" />
                  <span>New Releases (i-Tools)</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenIChat}
                  className="hover:text-cyan-300 transition-colors"
                >
                  iChat Singularity Copilot
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenSecurity}
                  className="hover:text-emerald-300 transition-colors"
                >
                  Security Shield Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Stack & Architecture */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-300">
              ARCHITECTURE
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>WebGL2 & Three.js 120Hz</span>
              </li>
              <li className="flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>React 19 & TypeScript</span>
              </li>
              <li className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>Vexta Clean Editorial UI</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero-Trust Integrity Lock</span>
              </li>
            </ul>
          </div>

        </div>

        {/* PROMINENT "MADE BY AKASH" SIGNATURE BADGE */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Signature Box */}
          <div className="p-4 sm:p-5 rounded-2xl glass-panel border border-white/10 flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-amber-300 font-bold">
                  ARCHITECT & CREATOR
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white tracking-tight">
                MADE BY <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-200">AKASH</span>
              </h3>
              <p className="text-[11px] font-sans text-slate-400">
                Engineered for the AI Community worldwide.
              </p>
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 hover:text-white font-display text-xs font-semibold transition-all active:scale-95"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-amber-400" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Akash AI Nexus. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with passion</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>by Akash</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
