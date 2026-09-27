import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User,
  Trash2, 
  ArrowRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { IChatMessage, UserProfile } from '../types';
import { AI_TOOLS } from '../data/tools';

interface IChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile | null;
  onNavigateSection: (id: string) => void;
  onOpenSecurity: () => void;
}

export const IChatDrawer: React.FC<IChatDrawerProps> = ({
  isOpen,
  onClose,
  profile,
  onNavigateSection,
  onOpenSecurity,
}) => {
  const [messages, setMessages] = useState<IChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      content: `Greetings, ${profile?.name || 'Explorer'}. I am **iChat Singularity**, your neural co-pilot for the Akash AI Nexus. How may I assist your exploration of frontier generative models and 120Hz WebGL tools today?`,
      timestamp: 'Just now',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isTyping) return;

    const userMsg: IChatMessage = {
      id: 'usr-' + Date.now(),
      sender: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // AI Response generation logic
    setTimeout(() => {
      let replyContent = '';
      let action: IChatMessage['action'] = undefined;

      const lower = query.toLowerCase();

      if (lower.includes('black hole') || lower.includes('shader') || lower.includes('accretion') || lower.includes('singularity')) {
        replyContent = `The **Akash Black Hole Singularity** runs on a dedicated WebGL2 fragment shader pipeline rendering at 120Hz. It computes ray deflection based on the Schwarzschild gravitational radius ($r_s = 0.22$), simulates relativistic Doppler beaming along the tilted accretion disk, and incorporates an Einstein photon ring with chromatic light deflection.`;
        action = { type: 'open-tool', payload: 'i-code-architect', label: 'Open Official vgpu.sh WebGPU Platform ↗' };
      } else if (lower.includes('new release') || lower.includes('i-tool') || lower.includes('release')) {
        replyContent = `In the **New Releases** section, we have curated 6 flagship frontier AI platforms:
1. **i-ImageStudio** (FLUX.1 / Black Forest Labs)
2. **i-PromptEnhancer** (PromptBase Multi-Engine)
3. **i-VoiceMatrix** (ElevenLabs Prime Voice AI)
4. **i-CodeArchitect** (vgpu.sh WebGPU & Shaders)
5. **i-VisionPro** (Hugging Face Vision Spaces)
6. **i-AgentX** (LangGraph Multi-Agent Systems)`;
        action = { type: 'open-tool', payload: 'i-image-studio', label: 'Open Official FLUX.1 Website ↗' };
      } else if (lower.includes('security') || lower.includes('hack') || lower.includes('lock') || lower.includes('shield')) {
        replyContent = `The **Akash Anti-Hijack Guard (A.S.S. Shield v2.4)** is active. Your profile is protected with SHA-256 cryptographic checksums, anti-tampering verification, anti-clickjacking frame detection, and a master locking mechanism to prevent unauthorized configuration overrides.`;
        action = { type: 'open-profile', payload: 'security', label: 'Open Security Shield Console' };
      } else if (lower.includes('prompt') || lower.includes('enhance') || lower.includes('midjourney')) {
        replyContent = `To achieve optimal results on Midjourney v6 and FLUX.1, incorporate optical physics tokens such as: \`volumetric atmospheric god rays, anamorphic 35mm lens, Octane 8k render, photorealistic cinematic lighting, raytraced reflection\`.`;
        action = { type: 'open-tool', payload: 'i-prompt-enhancer', label: 'Open Official PromptBase Website ↗' };
      } else if (lower.includes('who made') || lower.includes('akash') || lower.includes('creator') || lower.includes('author')) {
        replyContent = `**Akash AI Nexus** is designed and architected by **Akash** — crafted as an original, futuristic WebGL 3D intelligence platform unifying LatentBox inspiration with world-class 120Hz performance.`;
      } else {
        replyContent = `I have indexed your query against our LatentBox neural repository. You can explore the **New Releases** suite to open verified official AI platforms directly.`;
        action = { type: 'filter-category', payload: 'new-releases', label: 'Explore New Releases' };
      }

      const botMsg: IChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        content: replyContent,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        content: `Chat memory cleared. Ready for your next command, ${profile?.name || 'Explorer'}.`,
        timestamp: 'Just now',
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Drawer Container */}
      <div 
        className={`w-full ${isExpanded ? 'max-w-3xl' : 'max-w-md'} h-full flex flex-col bg-[#070718] border-l border-purple-500/40 shadow-[-10px_0_40px_rgba(168,85,247,0.3)] transition-all duration-300`}
      >
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-purple-900/40 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <div className="w-full h-full bg-[#030014] rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-sm text-white">
                  iChat Singularity
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="text-[10px] font-mono text-purple-300/80">
                Akash Neural Copilot • 120Hz
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              title={isExpanded ? "Collapse View" : "Expand View"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={clearChat}
              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-900 transition-colors"
              title="Clear Chat History"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'assistant' && (
                <div className="w-7 h-7 rounded-full bg-purple-900/80 border border-purple-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm font-space leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-tr-none shadow-[0_0_15px_rgba(168,85,247,0.3)]'
                    : 'glass-panel border border-purple-500/20 text-slate-200 rounded-tl-none'
                }`}
              >
                <div className="whitespace-pre-line">
                  {msg.content}
                </div>

                {msg.action && (
                  <button
                    onClick={() => {
                      if (msg.action?.type === 'open-tool') {
                        const targetTool = AI_TOOLS.find(t => t.id === msg.action?.payload);
                        if (targetTool) {
                          window.open(targetTool.url, '_blank', 'noopener,noreferrer');
                        }
                      } else if (msg.action?.type === 'open-profile') {
                        onOpenSecurity();
                      } else {
                        onNavigateSection(msg.action?.payload || 'new-releases');
                      }
                      onClose();
                    }}
                    className="mt-3 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-display text-[11px] font-semibold flex items-center gap-1.5 transition-all shadow-[0_0_10px_rgba(245,158,11,0.2)]"
                  >
                    <span>{msg.action.label}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}

                <span className="block text-[9px] font-mono text-slate-400/80 mt-1.5 text-right">
                  {msg.timestamp}
                </span>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                  {profile?.avatar || <User className="w-3.5 h-3.5 text-slate-300" />}
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-7 h-7 rounded-full bg-purple-900/80 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
              </div>
              <div className="glass-panel p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5 text-xs text-purple-300 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">Thinking through the singularity...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Question Pills */}
        <div className="px-4 py-2 border-t border-purple-900/20 bg-slate-950/40 flex items-center gap-2 overflow-x-auto scrollbar-none">
          {[
            'Explain Black Hole Shader',
            'Show New Releases',
            'Enhance a Prompt',
            'Audit Security Shield'
          ].map((pill) => (
            <button
              key={pill}
              onClick={() => handleSend(pill)}
              className="px-2.5 py-1 rounded-full bg-slate-900/90 hover:bg-purple-950/60 border border-purple-500/30 text-[10px] font-mono text-slate-300 whitespace-nowrap transition-colors"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-purple-900/40 bg-slate-950/80">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask iChat about models, prompts, shaders..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-purple-500/40 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white disabled:opacity-40 transition-all shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
