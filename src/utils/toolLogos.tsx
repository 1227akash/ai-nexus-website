import React, { useState } from 'react';
import { AITool } from '../types';
import { 
  Palette, 
  Sparkles, 
  Volume2, 
  Terminal, 
  Eye, 
  Workflow, 
  Brain,
  Cpu,
  Film,
  Music,
  Code2
} from 'lucide-react';

// Extract domain cleanly from any URL
export function getCleanDomain(url: string): string {
  try {
    const parsed = new URL(url);
    let host = parsed.hostname.toLowerCase();
    if (host.startsWith('www.')) host = host.slice(4);
    return host;
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0];
  }
}

// Get Google high-resolution favicon service URL (128x128)
export function getToolFaviconUrl(tool: AITool): string {
  const domain = getCleanDomain(tool.url);
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

// Secondary fallback via DuckDuckGo
export function getToolFallbackFaviconUrl(tool: AITool): string {
  const domain = getCleanDomain(tool.url);
  return `https://icons.duckduckgo.com/ip3/${domain}.ico`;
}

// Brand specific color accents for initials/fallbacks
const BRAND_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'chatgpt': { bg: 'bg-emerald-950/80', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  'claude': { bg: 'bg-amber-950/80', text: 'text-amber-300', border: 'border-amber-500/30' },
  'gemini': { bg: 'bg-blue-950/80', text: 'text-blue-300', border: 'border-blue-500/30' },
  'copilot': { bg: 'bg-sky-950/80', text: 'text-sky-300', border: 'border-sky-500/30' },
  'deepseek': { bg: 'bg-cyan-950/80', text: 'text-cyan-300', border: 'border-cyan-500/30' },
  'mistral': { bg: 'bg-orange-950/80', text: 'text-orange-400', border: 'border-orange-500/30' },
  'perplexity': { bg: 'bg-teal-950/80', text: 'text-teal-300', border: 'border-teal-500/30' },
  'cursor': { bg: 'bg-purple-950/80', text: 'text-purple-300', border: 'border-purple-500/30' },
  'replit': { bg: 'bg-red-950/80', text: 'text-red-400', border: 'border-red-500/30' },
  'midjourney': { bg: 'bg-indigo-950/80', text: 'text-indigo-300', border: 'border-indigo-500/30' },
  'suno': { bg: 'bg-pink-950/80', text: 'text-pink-300', border: 'border-pink-500/30' },
  'runway': { bg: 'bg-violet-950/80', text: 'text-violet-300', border: 'border-violet-500/30' },
  'elevenlabs': { bg: 'bg-slate-900', text: 'text-slate-100', border: 'border-white/20' },
  'grok': { bg: 'bg-zinc-950', text: 'text-zinc-200', border: 'border-zinc-700' },
  'huggingface': { bg: 'bg-yellow-950/80', text: 'text-yellow-300', border: 'border-yellow-500/30' },
};

function getBrandStyle(name: string) {
  const lower = name.toLowerCase();
  for (const [key, val] of Object.entries(BRAND_COLORS)) {
    if (lower.includes(key)) return val;
  }
  return { bg: 'bg-slate-900/90', text: 'text-slate-300', border: 'border-white/10' };
}

// Icon for exclusive i-tools
function getIToolIcon(id: string) {
  switch (id) {
    case 'i-image-studio':
      return <Palette className="w-5 h-5 text-amber-400" />;
    case 'i-prompt-enhancer':
      return <Sparkles className="w-5 h-5 text-purple-400" />;
    case 'i-voice-matrix':
      return <Volume2 className="w-5 h-5 text-cyan-400" />;
    case 'i-code-architect':
      return <Terminal className="w-5 h-5 text-blue-400" />;
    case 'i-vision-pro':
      return <Eye className="w-5 h-5 text-pink-400" />;
    case 'i-agent-x':
      return <Workflow className="w-5 h-5 text-emerald-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-amber-400" />;
  }
}

// Generic category icon
function getCategoryFallbackIcon(category: string) {
  switch (category) {
    case 'text-llm': return <Brain className="w-4 h-4 text-purple-300" />;
    case 'image-vision': return <Palette className="w-4 h-4 text-pink-300" />;
    case 'video-motion': return <Film className="w-4 h-4 text-rose-300" />;
    case 'audio-music': return <Music className="w-4 h-4 text-cyan-300" />;
    case 'code-3d': return <Code2 className="w-4 h-4 text-blue-300" />;
    case 'agentic': return <Workflow className="w-4 h-4 text-emerald-300" />;
    default: return <Cpu className="w-4 h-4 text-slate-300" />;
  }
}

interface ToolLogoProps {
  tool: AITool;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ToolLogo: React.FC<ToolLogoProps> = ({ 
  tool, 
  size = 'md',
  className = '' 
}) => {
  const [loadStage, setLoadStage] = useState<'primary' | 'fallback' | 'icon'>('primary');
  const primaryUrl = getToolFaviconUrl(tool);
  const fallbackUrl = getToolFallbackFaviconUrl(tool);
  const brand = getBrandStyle(tool.name);

  const sizeClasses = {
    sm: 'w-7 h-7 rounded-lg text-xs p-1',
    md: 'w-10 h-10 rounded-xl text-sm p-1.5',
    lg: 'w-12 h-12 rounded-xl text-base p-2'
  }[size];

  // Exclusive i-tools use sleek bespoke vector badges
  if (tool.isITool) {
    return (
      <div 
        className={`${sizeClasses} ${brand.bg} border ${brand.border} flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105 ${className}`}
        title={`${tool.name} Brand Icon`}
      >
        {getIToolIcon(tool.id)}
      </div>
    );
  }

  // If primary or secondary favicon is attempting to load
  if (loadStage === 'primary' || loadStage === 'fallback') {
    const src = loadStage === 'primary' ? primaryUrl : fallbackUrl;

    return (
      <div 
        className={`${sizeClasses} bg-white/[0.04] border border-white/10 group-hover:border-white/25 group-hover:bg-white/[0.08] flex items-center justify-center flex-shrink-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 shadow-sm overflow-hidden ${className}`}
      >
        <img
          src={src}
          alt={`${tool.name} logo`}
          className="w-full h-full object-contain rounded-md"
          loading="lazy"
          onError={() => {
            if (loadStage === 'primary') {
              setLoadStage('fallback');
            } else {
              setLoadStage('icon');
            }
          }}
        />
      </div>
    );
  }

  // Graceful fallback: crisp monogram or category icon
  const initials = tool.name
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div 
      className={`${sizeClasses} ${brand.bg} border ${brand.border} flex items-center justify-center flex-shrink-0 font-display font-bold ${brand.text} transition-all duration-300 group-hover:scale-105 shadow-sm ${className}`}
      title={`${tool.name} Logo`}
    >
      {initials.length > 0 ? initials : getCategoryFallbackIcon(tool.category)}
    </div>
  );
};
