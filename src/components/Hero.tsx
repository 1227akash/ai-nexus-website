import React, { useState } from 'react';
import { BlackHole } from './ui/black-hole';
import { 
  Rocket, 
  Sparkles, 
  MessageSquareCode, 
  ShieldCheck, 
  Maximize2, 
  Minimize2, 
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import TextAnimation from './ui/text-animation';

interface HeroProps {
  onNavigateSection: (id: string) => void;
  onOpenIChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onNavigateSection,
  onOpenIChat,
}) => {
  const [isImmersive, setIsImmersive] = useState(false);

  return (
    <section id="hero" className="relative w-full overflow-hidden min-h-[92vh] flex items-center justify-center">
      
      {/* 3D WebGL Black Hole Canvas Layer */}
      <div className={`absolute inset-0 z-0 transition-all duration-700 ${isImmersive ? 'h-screen fixed z-50' : 'h-full'}`}>
        <BlackHole />

        {/* Ambient Overlays for Clean Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07070e] via-transparent to-transparent pointer-events-none opacity-90" />
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

        {/* Fullscreen/Immersive Toggle Button */}
        <button
          onClick={() => setIsImmersive(!isImmersive)}
          title={isImmersive ? "Exit Fullscreen Singularity" : "Enter Fullscreen Singularity"}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/[0.05] hover:bg-white/10 text-slate-200 border border-white/10 backdrop-blur-md transition-all hover:scale-110 active:scale-95 shadow-sm"
        >
          {isImmersive ? <Minimize2 className="w-5 h-5 text-amber-400" /> : <Maximize2 className="w-5 h-5 text-purple-300" />}
        </button>

        {isImmersive && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-6 py-2 rounded-full glass-panel text-center text-xs font-mono text-slate-200 animate-pulse">
            Direct WebGL Gravitational Lensing Active • Drag pointer to distort space-time • Press Esc or toggle icon to return
          </div>
        )}
      </div>

      {/* Hero Foreground Content: Clean Vexta Design Architecture */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center flex flex-col items-center">
        
        {/* Vexta-inspired Metadata Tagline */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-sm bg-purple-400 rotate-45" />
          <span>GLOBAL AI DIRECTORY • 106 VERIFIED MODELS • 2026 EDITION</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        </div>

        {/* Main Headline with GSAP Block Reveal Animation */}
        <div className="mb-4 w-full flex justify-center">
          <TextAnimation
            size="display"
            as="h1"
            delay={0.15}
            blockColor="#f59e0b"
            duration={0.85}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none text-center"
            text="AKASH AI NEXUS"
          />
        </div>

        {/* Vexta Editorial Serif Tagline */}
        <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-slate-200 mb-6 tracking-wide text-center max-w-3xl leading-snug">
          "Frontier Artificial Intelligence Ecosystem & Curated Neural Directory"
        </p>

        {/* Subtitle Description */}
        <div className="mb-10 w-full flex justify-center">
          <TextAnimation
            size="base"
            as="p"
            delay={0.4}
            blockColor="#a855f7"
            duration={0.8}
            className="max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg font-sans font-normal leading-relaxed text-center"
            text="Beyond the horizon lies the future of artificial intelligence. Explore 106 curated frontier models with authentic brand logos and real-time WebGL gravitational physics."
          />
        </div>

        {/* Action Buttons: Clean Vexta High-Contrast Design */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          
          <button
            onClick={() => onNavigateSection('directory')}
            className="group px-7 py-3.5 rounded-xl bg-white text-slate-950 font-display font-bold text-xs sm:text-sm tracking-wider hover:bg-slate-200 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>EXPLORE ALL 106 TOOLS</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigateSection('new-releases')}
            className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white font-display font-semibold text-xs sm:text-sm tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <Rocket className="w-4 h-4 text-amber-400" />
            <span>NEW RELEASES (i-TOOLS)</span>
          </button>

          <button
            onClick={onOpenIChat}
            className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-cyan-300 hover:text-white font-display text-xs sm:text-sm tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <MessageSquareCode className="w-4 h-4 text-cyan-400" />
            <span>OPEN iCHAT COPILOT</span>
          </button>

        </div>

        {/* Minimalist Telemetry Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
          
          <div className="p-3.5 sm:p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-cyan-300 mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">120 FPS WebGL</span>
            </div>
            <p className="text-xs text-slate-400">Delta-timed raymarching singularity loop.</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-amber-300 mb-1">
              <Rocket className="w-3.5 h-3.5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">106 AI Models</span>
            </div>
            <p className="text-xs text-slate-400">Authentic brand logos with verified links.</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-purple-300 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">Clean Vexta UI</span>
            </div>
            <p className="text-xs text-slate-400">Modern geometric & editorial typography.</p>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl glass-panel border border-white/[0.08] hover:border-white/20 transition-colors">
            <div className="flex items-center gap-2 text-emerald-300 mb-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold">Zero Glaze</span>
            </div>
            <p className="text-xs text-slate-400">Direct production redirects without friction.</p>
          </div>

        </div>

      </div>

    </section>
  );
};
