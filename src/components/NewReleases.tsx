import React from 'react';
import { 
  Rocket, 
  Sparkles, 
  Star, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import TextAnimation from './ui/text-animation';
import { AITool } from '../types';
import { ToolLogo } from '../utils/toolLogos';

interface NewReleasesProps {
  tools: AITool[];
  bookmarks: string[];
  onToggleBookmark: (toolId: string) => void;
}

export const NewReleases: React.FC<NewReleasesProps> = ({
  tools,
  bookmarks,
  onToggleBookmark,
}) => {
  const iTools = tools.filter(t => t.isITool || t.category === 'new-releases');

  const handleOpenOriginalWebsite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="new-releases" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-purple-600/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Section Header: Clean Vexta Editorial Pairing */}
      <div className="text-center mb-16 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4 shadow-sm">
          <Rocket className="w-3.5 h-3.5 text-amber-400" />
          <span>EXCLUSIVE ACCELERATION SUITE</span>
        </div>
        
        <div className="mb-3 w-full flex justify-center">
          <TextAnimation
            size="xl"
            as="h2"
            animateOnScroll={true}
            blockColor="#f59e0b"
            duration={0.8}
            className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white text-center"
            text="NEW RELEASES: THE i-TOOLS SUITE"
          />
        </div>
        
        <p className="font-serif italic text-slate-300 text-lg sm:text-xl tracking-wide max-w-2xl text-center mb-2">
          "Next-generation generative engines designed for instant creative flow."
        </p>
        <p className="max-w-2xl mx-auto text-slate-400 text-xs sm:text-sm font-sans text-center">
          Click <span className="text-amber-300 font-semibold">Open Original Website</span> on any card to directly launch the verified official production service.
        </p>
      </div>

      {/* i-Tools Showcase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {iTools.map((tool) => {
          const isBookmarked = bookmarks.includes(tool.id);

          return (
            <div
              key={tool.id}
              className="group relative rounded-2xl glass-panel border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 hover:shadow-[0_12px_35px_-10px_rgba(245,158,11,0.2)] flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
            >
              {/* Top Accent Gradient Line */}
              <div className={`h-1 w-full bg-gradient-to-r ${tool.gradient}`} />

              <div className="p-6">
                
                {/* Header row with Authentic Brand Logo, Badge, and Bookmark */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-3">
                    <ToolLogo tool={tool} size="lg" />
                    <div>
                      <h3 
                        onClick={() => handleOpenOriginalWebsite(tool.url)}
                        className="font-display font-bold text-lg text-white group-hover:text-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <span>{tool.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        {tool.pricing} • Official Platform Verified
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {tool.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                        {tool.badge}
                      </span>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(tool.id);
                      }}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-slate-400 hover:text-amber-300 transition-colors"
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark Tool"}
                    >
                      <Star className={`w-4 h-4 ${isBookmarked ? 'text-amber-400 fill-amber-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Tagline & Description */}
                <p className="font-medium text-xs text-amber-400/90 mb-2 font-mono">
                  {tool.tagline}
                </p>
                <p className="text-slate-300/90 text-xs sm:text-sm line-clamp-3 mb-4 leading-relaxed font-sans">
                  {tool.description}
                </p>

                {/* Key Features List */}
                <div className="space-y-1.5 mb-5 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  {tool.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tool.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[10px] text-slate-400 font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Clean Vexta Button */}
              <div className="p-4 pt-0">
                <a
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-amber-400/50 text-white font-display font-semibold text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn active:scale-98"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  <span>OPEN ORIGINAL WEBSITE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          );
        })}
      </div>

      {/* Quick Jump Callout to Full 106 Tools Directory */}
      <div className="mt-12 text-center relative z-10 p-6 rounded-2xl glass-panel border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-display font-bold text-sm sm:text-base text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Looking for ChatGPT, Claude, Cursor & 100+ frontier models?</span>
          </h4>
          <p className="text-xs text-slate-400 font-sans mt-1">
            Browse all 106 frontier AI models organized by LLMs, Code, Images, Video, Audio & Agents.
          </p>
        </div>
        <a
          href="#directory"
          className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white font-display font-semibold text-xs tracking-wider whitespace-nowrap transition-all flex items-center gap-2"
        >
          <span>EXPLORE ALL 106 TOOLS</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
        </a>
      </div>
    </section>
  );
};
