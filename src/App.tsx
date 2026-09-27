import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { NewReleases } from './components/NewReleases';
import { BlackHoleSection } from './components/BlackHoleSection';
import { ToolsDirectory } from './components/ToolsDirectory';
import { Footer } from './components/Footer';
import { IChatDrawer } from './components/IChatDrawer';
import { OnboardingModal } from './components/OnboardingModal';
import { ProfileModal } from './components/ProfileModal';
import { SecurityAuditModal } from './components/SecurityAuditModal';

import { AI_TOOLS } from './data/tools';
import { UserProfile } from './types';
import { verifyProfileIntegrity, checkFrameSecurity, generateProfileHash } from './utils/security';

const STORAGE_KEY = 'akash_nexus_profile_v2';

export function App() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isIChatOpen, setIsIChatOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarks, setBookmarks] = useState<string[]>(['i-image-studio', 'i-prompt-enhancer']);
  const [frameWarning] = useState(() => checkFrameSecurity().isFramed);

  // Initialize Profile & Security verification on mount
  useEffect(() => {
    // 2. Load stored profile
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as UserProfile;
        // Verify cryptographic integrity
        verifyProfileIntegrity(parsed).then((isValid) => {
          if (isValid) {
            setProfile(parsed);
            setBookmarks(parsed.bookmarks || []);
          } else {
            console.warn('[Akash Security Shield] Integrity mismatch detected. Prompting recovery.');
            setIsOnboardingOpen(true);
          }
        });
      } catch {
        setIsOnboardingOpen(true);
      }
    } else {
      // First-time visitor
      setIsOnboardingOpen(true);
    }
  }, []);

  // Save profile helper
  const handleSaveProfile = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setBookmarks(newProfile.bookmarks || []);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newProfile));
  };

  // Toggle bookmark helper
  const handleToggleBookmark = async (toolId: string) => {
    let updatedBookmarks: string[];
    if (bookmarks.includes(toolId)) {
      updatedBookmarks = bookmarks.filter((id) => id !== toolId);
    } else {
      updatedBookmarks = [...bookmarks, toolId];
    }
    setBookmarks(updatedBookmarks);

    if (profile) {
      const updatedProfileBase = {
        ...profile,
        bookmarks: updatedBookmarks,
        updatedAt: new Date().toISOString(),
      };
      const newHash = await generateProfileHash(updatedProfileBase);
      const fullyUpdated = { ...updatedProfileBase, integrityHash: newHash };
      handleSaveProfile(fullyUpdated);
    }
  };

  // Section navigation
  const handleNavigateSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Reset session
  const handleResetSession = () => {
    if (window.confirm('Reset explorer identity and clear security keys?')) {
      localStorage.removeItem(STORAGE_KEY);
      setProfile(null);
      setIsProfileOpen(false);
      setIsOnboardingOpen(true);
    }
  };

  // Toggle profile lock
  const handleToggleLock = async () => {
    if (!profile) return;
    const updatedBase = {
      ...profile,
      isLocked: !profile.isLocked,
      updatedAt: new Date().toISOString(),
    };
    const newHash = await generateProfileHash(updatedBase);
    handleSaveProfile({ ...updatedBase, integrityHash: newHash });
  };

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-100 selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Clickjacking / Frame Security Warning Banner */}
      {frameWarning && (
        <div className="bg-rose-900/90 text-rose-100 text-xs font-mono p-2 text-center border-b border-rose-500 sticky top-0 z-50">
          ⚠️ SECURITY WARNING: Page is running inside an unauthorized frame. Frame Guard engaged.
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        profile={profile}
        onOpenProfile={() => setIsProfileOpen(true)}
        onOpenIChat={() => setIsIChatOpen(true)}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onNavigateSection={handleNavigateSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        
        {/* Hero with 3D Black Hole */}
        <Hero
          onNavigateSection={handleNavigateSection}
          onOpenIChat={() => setIsIChatOpen(true)}
        />

        {/* Dedicated "New Releases" Area housing the i-tools */}
        <NewReleases
          tools={AI_TOOLS}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Full LatentBox Curated Intelligence Directory (All 106 Tools) */}
        <ToolsDirectory
          tools={AI_TOOLS}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          bookmarks={bookmarks}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* 3D Black Hole Interactive Laboratory Section */}
        <BlackHoleSection />

      </main>

      {/* Footer with Made by Akash Signature */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenSecurity={() => setIsSecurityOpen(true)}
        onOpenIChat={() => setIsIChatOpen(true)}
      />

      {/* iChat Assistant Side Drawer */}
      <IChatDrawer
        isOpen={isIChatOpen}
        onClose={() => setIsIChatOpen(false)}
        profile={profile}
        onNavigateSection={handleNavigateSection}
        onOpenSecurity={() => setIsSecurityOpen(true)}
      />

      {/* First-Time Visitor Onboarding Modal */}
      <OnboardingModal
        isOpen={isOnboardingOpen}
        onComplete={(newProf) => {
          handleSaveProfile(newProf);
          setIsOnboardingOpen(false);
        }}
      />

      {/* Profile Section Modal (Edit & Lock) */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        profile={profile}
        onUpdateProfile={handleSaveProfile}
        onResetSession={handleResetSession}
      />

      {/* Security Shield Console Modal */}
      <SecurityAuditModal
        isOpen={isSecurityOpen}
        onClose={() => setIsSecurityOpen(false)}
        profile={profile}
        onToggleLock={handleToggleLock}
      />

    </div>
  );
}

export default App;
