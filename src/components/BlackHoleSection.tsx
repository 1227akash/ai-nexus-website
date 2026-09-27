import React, { useState } from 'react';
import { BlackHole } from './ui/black-hole';
import { 
  Orbit, 
  Activity, 
  Zap 
} from 'lucide-react';
import TextAnimation from './ui/text-animation';

export const BlackHoleSection: React.FC = () => {
  const [activeTelemetry, setActiveTelemetry] = useState(true);

  return (
    <section id="black-hole-section" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Header: Clean Vexta Editorial Pairing */}
      <div className="text-center mb-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
          <Orbit className="w-3.5 h-3.5 text-cyan-400" />
          <span>RELATIVISTIC RAYMARCHING PHYSICS</span>
        </div>
        
        <div className="mb-2 w-full flex justify-center">
          <TextAnimation
            size="lg"
            as="h2"
            animateOnScroll={true}
            blockColor="#06b6d4"
            duration={0.8}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-center"
            text="THE 3D SINGULARITY LAB"
          />
        </div>

        <p className="font-serif italic text-slate-300 text-lg sm:text-xl tracking-wide max-w-2xl text-center mb-1">
          "Direct gravitational lensing simulator rendered at 120 FPS."
        </p>

        <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm font-sans mt-1">
          Move your cursor or touch-drag across the event horizon. Experience real-time gravitational lensing, Doppler boosted accretion plasma, and Einstein ring bending.
        </p>
      </div>

      {/* Main Interactive Stage */}
      <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 h-[520px] sm:h-[600px] w-full flex items-center justify-center">
        
        {/* The 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <BlackHole />
        </div>

        {/* Ambient Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#07070e]/80 via-transparent to-[#07070e]/40" />

        {/* Floating Telemetry HUD */}
        {activeTelemetry && (
          <div className="absolute top-6 left-6 z-10 glass-panel p-4 rounded-2xl border border-white/15 max-w-xs hidden sm:block font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 mb-2">
              <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>RELATIVISTIC TELEMETRY</span>
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/40">
                120 FPS
              </span>
            </div>
            <div className="space-y-1.5 text-slate-300 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Metric:</span>
                <span className="text-amber-300">Schwarzschild $r_s$</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Event Horizon:</span>
                <span className="text-slate-200">2.95 × 10³ m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Doppler Factor:</span>
                <span className="text-purple-300">1.55 (Relativistic)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Lensing Deflection:</span>
                <span className="text-cyan-300">4GM / (c² b)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Shader Kernel:</span>
                <span className="text-emerald-300">WebGL2 / GLSL 3.0</span>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Pill */}
        <div className="absolute bottom-6 z-10 px-5 py-2 rounded-full glass-panel text-center text-xs font-mono text-slate-300 flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-amber-300 font-bold">
            <Zap className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Space-Time</span>
          </span>
          <span className="text-slate-500">•</span>
          <span className="text-[11px] text-slate-400 hidden sm:inline">
            Drag mouse or touch to exert gravitational pull
          </span>
          <button
            onClick={() => setActiveTelemetry(!activeTelemetry)}
            className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 hover:text-white border border-white/10 ml-2"
          >
            {activeTelemetry ? 'Hide HUD' : 'Show HUD'}
          </button>
        </div>

      </div>

    </section>
  );
};
