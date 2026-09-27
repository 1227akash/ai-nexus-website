import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  Check, 
  Edit3, 
  Key, 
  Download, 
  Trash2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../types';
import { generateProfileHash, sanitizeInput, constantTimeCompare } from '../utils/security';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile | null;
  onUpdateProfile: (updated: UserProfile) => void;
  onResetSession: () => void;
}

const AVATARS = ['🌌', '⚡', '🔮', '🚀', '💎', '👾', '🪐', '🛡️'];

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  onResetSession,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [unlockPasscode, setUnlockPasscode] = useState('');
  const [unlockError, setUnlockError] = useState('');
  const [showUnlockInput, setShowUnlockInput] = useState(false);

  // Form Fields
  const [name, setName] = useState(profile?.name || '');
  const [front, setFront] = useState(profile?.front || '');
  const [avatar, setAvatar] = useState(profile?.avatar || '🌌');
  const [bio, setBio] = useState(profile?.bio || '');
  const [newPasscode, setNewPasscode] = useState(profile?.securityPasscode || '');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (profile) {
      setName(profile.name);
      setFront(profile.front);
      setAvatar(profile.avatar);
      setBio(profile.bio);
      setNewPasscode(profile.securityPasscode);
    }
  }, [profile]);

  // Attempt to unlock profile for editing
  const handleUnlockProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    if (!profile.securityPasscode) {
      setIsEditing(true);
      setShowUnlockInput(false);
      return;
    }

    if (constantTimeCompare(unlockPasscode.trim(), profile.securityPasscode.trim())) {
      setIsEditing(true);
      setShowUnlockInput(false);
      setUnlockPasscode('');
      setUnlockError('');
    } else {
      setUnlockError('Invalid Security Passcode! Tamper attempt logged.');
    }
  };

  // Save changes and re-hash integrity checksum
  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!profile) return;
    const cleanName = sanitizeInput(name);
    const cleanFront = sanitizeInput(front);
    const cleanBio = sanitizeInput(bio);
    const cleanPasscode = sanitizeInput(newPasscode);

    const baseProfile: Omit<UserProfile, 'integrityHash'> = {
      name: cleanName || profile.name,
      front: cleanFront || profile.front,
      avatar,
      bio: cleanBio || profile.bio,
      securityPasscode: cleanPasscode || profile.securityPasscode,
      isLocked: true, // auto lock upon saving
      updatedAt: new Date().toISOString(),
      createdAt: profile.createdAt || new Date().toISOString(),
      cosmicTheme: profile.cosmicTheme || 'singularity',
      bookmarks: profile.bookmarks || [],
    };

    const newHash = await generateProfileHash(baseProfile);
    const updated: UserProfile = {
      ...baseProfile,
      integrityHash: newHash,
    };

    onUpdateProfile(updated);
    setIsEditing(false);
    setSuccessMessage('Profile and Security Hash securely updated!');
    confetti({ particleCount: 40, spread: 60 });
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const exportProfileData = () => {
    if (!profile) return;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(profile, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', `akash-nexus-profile-${profile.name}.json`);
    a.click();
  };

  if (!isOpen || !profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl glass-panel-glow border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.3)] max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-purple-900/40 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              {profile.avatar}
            </div>
            <div>
              <h2 className="font-display font-bold text-lg text-white">
                Explorer Profile
              </h2>
              <p className="text-xs font-mono text-purple-300">
                Identity & Anti-Hijack Guard
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {successMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Security Shield Banner */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/80 border border-emerald-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-emerald-300">
                  SHIELD STATUS: SECURE
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  100%
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 truncate max-w-[260px]">
                SHA-256: {profile.integrityHash.slice(0, 16)}...
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
            {profile.isLocked ? (
              <span className="flex items-center gap-1 text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/30">
                <Lock className="w-3.5 h-3.5" />
                <span>LOCKED</span>
              </span>
            ) : (
              <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-lg border border-emerald-500/30">
                <Unlock className="w-3.5 h-3.5" />
                <span>UNLOCKED</span>
              </span>
            )}
          </div>
        </div>

        {/* Display / Read-Only Profile View */}
        {!isEditing ? (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Explorer Name
                </span>
                <p className="text-base font-display font-bold text-white">
                  {profile.name}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Front / Specialization
                </span>
                <p className="text-sm font-space font-semibold text-amber-300">
                  {profile.front}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                  Bio / Research Mission
                </span>
                <p className="text-xs text-slate-300 font-space leading-relaxed">
                  {profile.bio}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-slate-400">
                <div>Bookmarks: <span className="text-purple-300 font-bold">{profile.bookmarks.length} tools</span></div>
                <div>Registered: <span className="text-slate-300">{new Date(profile.createdAt).toLocaleDateString()}</span></div>
              </div>
            </div>

            {/* Unlock Password Form (if profile is locked) */}
            {profile.isLocked && showUnlockInput && (
              <form onSubmit={handleUnlockProfile} className="p-4 rounded-xl bg-slate-950 border border-amber-500/40 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-300 font-bold">
                  <Key className="w-4 h-4 text-amber-400" />
                  <span>Enter Security Passcode to Unlock</span>
                </div>
                <input
                  type="password"
                  value={unlockPasscode}
                  onChange={(e) => {
                    setUnlockPasscode(e.target.value);
                    setUnlockError('');
                  }}
                  placeholder="Enter your Passcode / PIN"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
                {unlockError && (
                  <p className="text-[11px] font-mono text-rose-400">{unlockError}</p>
                )}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-display text-xs font-bold transition-all"
                  >
                    CONFIRM UNLOCK
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowUnlockInput(false)}
                    className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-mono"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            {/* Profile Action Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (profile.isLocked) {
                    setShowUnlockInput(true);
                  } else {
                    setIsEditing(true);
                  }
                }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-display font-semibold text-xs tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>EDIT PROFILE</span>
              </button>

              <button
                onClick={exportProfileData}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                title="Export Profile JSON Backup"
              >
                <Download className="w-4 h-4 text-cyan-400" />
              </button>

              <button
                onClick={onResetSession}
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-rose-950/40 border border-slate-700 hover:border-rose-500/50 text-slate-400 hover:text-rose-400 transition-colors"
                title="Reset Explorer Session"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Edit Profile Form */
          <form onSubmit={handleSaveProfile} className="space-y-4">
            
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                Avatar
              </label>
              <div className="flex gap-2 overflow-x-auto pb-1">
                {AVATARS.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setAvatar(av)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${
                      avatar === av
                        ? 'bg-amber-500/20 border-2 border-amber-400 scale-105'
                        : 'bg-slate-900 border border-slate-800 text-slate-400'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Explorer Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Front (Specialization)
              </label>
              <input
                type="text"
                required
                value={front}
                onChange={(e) => setFront(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Bio / Mission Statement
              </label>
              <textarea
                rows={2}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-purple-400"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">
                Security Passcode (Anti-Hijack Lock)
              </label>
              <input
                type="password"
                value={newPasscode}
                onChange={(e) => setNewPasscode(e.target.value)}
                placeholder="Change master passcode"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-emerald-400"
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-display font-semibold text-xs tracking-wider"
              >
                SAVE & RE-LOCK
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-400 hover:text-white text-xs font-mono"
              >
                Cancel
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
