export interface UserProfile {
  name: string;
  front: string; // Specialization / Domain role
  avatar: string;
  bio: string;
  securityPasscode: string; // PIN or key for profile lock
  isLocked: boolean; // Anti-hijacking profile lock
  cosmicTheme: 'singularity' | 'accretion-gold' | 'neon-cyan' | 'pulsar-violet';
  integrityHash: string; // Tamper protection checksum
  createdAt: string;
  updatedAt: string;
  bookmarks: string[];
}

export type ToolCategory =
  | 'all'
  | 'new-releases'
  | 'text-llm'
  | 'image-vision'
  | 'video-motion'
  | 'audio-music'
  | 'code-3d'
  | 'agentic';

export interface AITool {
  id: string;
  name: string;
  category: ToolCategory;
  tagline: string;
  description: string;
  tags: string[];
  isNewRelease?: boolean;
  isITool?: boolean; // Part of the interactive i-tools suite
  rating: number;
  starsCount: number;
  url: string;
  badge?: string;
  features: string[];
  pricing: 'Free' | 'Freemium' | 'Open Source' | 'Paid';
  gradient: string;
}

export interface IChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  action?: {
    type: 'open-tool' | 'filter-category' | 'open-profile';
    payload: string;
    label: string;
  };
}
