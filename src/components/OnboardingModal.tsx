import React, { useState } from 'react';
import { 
  Sparkles, 
  Rocket, 
  ShieldCheck, 
  User, 
  ArrowRight 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';
import { generateProfileHash, sanitizeInput } from '../utils/security';

interface OnboardingModalProps {
  isOpen: boolean;
  onComplete: (profile: UserProfile) => void;
}

const AVATAR_OPTIONS = ['🌌', '⚡', '🔮', '🚀', '💎', '👾', '🪐', '🛡️'];

const FRONT_PRESETS = [
  'Full-Stack Architect',
  'AI Research Pioneer',
  '3D & Generative Artist',
  'Prompt Alchemist',
  'Cyber Defense & Security',
  'Neuro-Acoustic Engineer'
];

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onComplete,
}) => {
  const [name, setName] = useState('');
  const [front, setFront] = useState(FRONT_PRESETS[0]);
  const [customFront, setCustomFront] = useState('');
  const [avatar, setAvatar] = useState('🌌');
  const [securityPasscode, setSecurityPasscode] = useState('');
  const [enableLock, setEnableLock] = useState(true);
  const [theme] = useState<UserProfile['cosmicTheme']>('singularity');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = sanitizeInput(name);
    const selectedFront = sanitizeInput(customFront.trim() || front);

    if (!cleanName) {
      setError('Please enter your explorer name to enter.');
      return;
    }

    const newProfile: Omit<UserProfile, 'integrityHash'> = {
      name: cleanName,
      front: selectedFront,
      avatar,
      bio: 'Pioneering generative AI and cosmic latent intelligence in Akash AI Nexus.',
      securityPasscode: sanitizeInput(securityPasscode) || 'AKASH-SECURE-KEY',
      isLocked: enableLock,
      cosmicTheme: theme,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      bookmarks: ['i-image-studio', 'i-prompt-enhancer'],
    };

    const integrityHash = await generateProfileHash(newProfile);

    const fullProfile: UserProfile = {
      ...newProfile,
      integrityHash,
    };

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    onComplete(fullProfile);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl animate-in fade-in duration-300">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl glass-panel-glow border border-amber-500/40 p-6 sm:p-8 shadow-[0_0_60px_rgba(245,158,11,0.3)] overflow-hidden">
        
        {/* Holographic Header Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-purple-500 to-cyan-400" />

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Welcome to Akash AI Nexus</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-wide">
            INITIALIZE <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-300">EXPLORER PROFILE</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-space mt-1">
            Before crossing the 120Hz Event Horizon, please configure your explorer credentials and front specialization.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/50 text-rose-300 text-xs font-mono">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Avatar Choice */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Select Cosmic Avatar Icon
            </label>
            <div className="flex justify-between items-center gap-2 overflow-x-auto pb-1">
              {AVATAR_OPTIONS.map((av) => (
                <button
                  key={av}
                  type="button"
                  onClick={() => setAvatar(av)}
                  className={`w-10 h-10 rounded-xl text-lg flex items-center justify-center transition-all ${
                    avatar === av
                      ? 'bg-amber-500/20 border-2 border-amber-400 scale-110 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {av}
                </button>
              ))}
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Your Name / Handle <span className="text-amber-400">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError('');
                }}
                placeholder="e.g. Akash Kumar or CyberVanguard"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-purple-500/30 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
              />
            </div>
          </div>

          {/* Front / Specialization */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
              Select Your Front (Specialization)
            </label>
            <div className="grid grid-cols-2 gap-2 mb-2">
              {FRONT_PRESETS.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => {
                    setFront(p);
                    setCustomFront('');
                  }}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-mono text-left border transition-all truncate ${
                    front === p && !customFront
                      ? 'bg-purple-600/30 border-purple-400 text-purple-200 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <input
              type="text"
              value={customFront}
              onChange={(e) => setCustomFront(e.target.value)}
              placeholder="Or type custom front..."
              className="w-full px-3.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-purple-400"
            />
          </div>

          {/* Anti-Hijacking Passkey Lock */}
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/30 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-xs text-emerald-300 font-bold">
                  Anti-Hijacking Security Guard
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={enableLock}
                  onChange={(e) => setEnableLock(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>

            <p className="text-[11px] text-slate-400 leading-tight">
              Locks your profile with a 256-bit SHA fingerprint so no unauthorized script or user can alter your credentials.
            </p>

            {enableLock && (
              <div className="pt-1">
                <input
                  type="password"
                  value={securityPasscode}
                  onChange={(e) => setSecurityPasscode(e.target.value)}
                  placeholder="Create Security Passcode / PIN (e.g. 7788)"
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white font-display font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 active:scale-98"
          >
            <Rocket className="w-4 h-4 text-amber-200" />
            <span>ENTER THE SINGULARITY</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </form>

      </div>
    </div>
  );
};
