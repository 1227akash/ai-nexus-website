import React, { useState } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Star, 
  Search, 
  Filter,
  Rocket,
  Brain,
  Palette,
  Film,
  Music,
  Cpu,
  Workflow
} from 'lucide-react';
import { AITool, ToolCategory } from '../types';
import { TOOL_CATEGORIES } from '../data/tools';
import { ToolLogo } from '../utils/toolLogos';

interface ToolsDirectoryProps {
  tools: AITool[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  bookmarks: string[];
  onToggleBookmark: (toolId: string) => void;
}

export const ToolsDirectory: React.FC<ToolsDirectoryProps> = ({
  tools,
  searchQuery,
  setSearchQuery,
  bookmarks,
  onToggleBookmark,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory>('all');

  const filteredTools = tools.filter((tool) => {
    const matchesCategory =
      selectedCategory === 'all'
        ? true
        : selectedCategory === 'new-releases'
        ? tool.isNewRelease || tool.isITool
        : tool.category === selectedCategory;

    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return tools.length;
    if (catId === 'new-releases') return tools.filter((t) => t.isITool || t.category === 'new-releases').length;
    return tools.filter((t) => t.category === catId).length;
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'new-releases':
        return <Rocket className="w-3.5 h-3.5 text-amber-400" />;
      case 'text-llm':
        return <Brain className="w-3.5 h-3.5 text-purple-400" />;
      case 'image-vision':
        return <Palette className="w-3.5 h-3.5 text-pink-400" />;
      case 'video-motion':
        return <Film className="w-3.5 h-3.5 text-rose-400" />;
      case 'audio-music':
        return <Music className="w-3.5 h-3.5 text-cyan-400" />;
      case 'code-3d':
        return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      case 'agentic':
        return <Workflow className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Sparkles className="w-3.5 h-3.5 text-amber-300" />;
    }
  };

  const openOriginalSite = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="directory" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      
      {/* Section Header: Clean Minimalist Vexta Style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-mono tracking-widest uppercase mb-3">
            <Filter className="w-3 h-3 text-purple-400" />
            <span>Curated Neural Ecosystem • 2026 Directory</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2">
            EXPLORE ALL <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300">106 AI MODELS</span>
          </h2>
          
          <p className="font-serif italic text-slate-300 text-lg sm:text-xl tracking-wide max-w-2xl">
            "Frontier intelligence catalog with authentic brand identities and verified direct access."
          </p>
          <p className="text-slate-400 text-xs sm:text-sm font-sans mt-1">
            Browse all 100 frontier AI services plus 6 exclusive interactive tools. Click any card to launch its official production site.
          </p>

          {/* Live Telemetry Pill */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-200 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Displaying <strong className="text-amber-300 font-bold">{filteredTools.length}</strong> of <strong className="text-cyan-300 font-bold">{tools.length}</strong> Total Tools</span>
            </div>
            {selectedCategory !== 'all' && (
              <button
                onClick={() => setSelectedCategory('all')}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
              >
                Reset to Show All 106 Tools
              </button>
            )}
          </div>
        </div>

        {/* Clean Search Input */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ChatGPT, Claude, Cursor..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 focus:border-purple-400/60 text-xs text-slate-100 placeholder-slate-500 focus:outline-none transition-all shadow-inner backdrop-blur-sm"
          />
        </div>
      </div>

      {/* Category Pills Navigation */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {TOOL_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = getCategoryCount(cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as ToolCategory)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-purple-600/20 border-purple-400/70 text-white shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold font-mono ${
                isActive ? 'bg-amber-400 text-slate-950' : 'bg-white/10 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tools Grid: Clean Vexta Card Aesthetic */}
      {filteredTools.length === 0 ? (
        <div className="py-20 text-center rounded-2xl glass-panel border border-dashed border-white/10">
          <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <p className="font-display font-medium text-slate-400 text-sm">No neural models found matching your query.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-xs font-mono transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => {
            const isBookmarked = bookmarks.includes(tool.id);

            return (
              <div
                key={tool.id}
                className="group relative rounded-2xl glass-panel border border-white/[0.08] hover:border-purple-400/40 transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(168,85,247,0.2)] flex flex-col justify-between overflow-hidden hover:-translate-y-1"
              >
                <div className="p-6">
                  
                  {/* Card Header: Official Brand Logo + Title + Bookmark */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      {/* Authentic Brand Logo */}
                      <ToolLogo tool={tool} size="md" />

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 
                            onClick={() => openOriginalSite(tool.url)}
                            className="font-display font-bold text-base text-white group-hover:text-purple-300 transition-colors cursor-pointer flex items-center gap-1.5"
                          >
                            <span>{tool.name}</span>
                            <ExternalLink className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" />
                          </h3>
                          {tool.isNewRelease && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              NEW
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          {tool.pricing} • ★ {tool.rating} ({tool.starsCount.toLocaleString()})
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => onToggleBookmark(tool.id)}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-slate-400 hover:text-amber-300 transition-colors flex-shrink-0"
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark Tool"}
                    >
                      <Star className={`w-4 h-4 ${isBookmarked ? 'text-amber-400 fill-amber-400' : ''}`} />
                    </button>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs font-medium text-amber-400/90 mb-2 font-mono">
                    {tool.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300/90 line-clamp-3 mb-4 leading-relaxed font-sans">
                    {tool.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1 mb-4">
                    {tool.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                        <span className="w-1 h-1 rounded-full bg-purple-400/70" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
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

                {/* Card Action Footer: Clean Minimalist Vexta-style button */}
                <div className="p-4 pt-0">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-purple-400/40 text-slate-100 hover:text-white font-display text-xs font-semibold flex items-center justify-center gap-2 transition-all group/btn"
                  >
                    <span>OPEN ORIGINAL WEBSITE</span>
                    <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      )}

    </section>
  );
};
