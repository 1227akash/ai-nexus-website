/**
 * Akash Security Subsystem (A.S.S. Shield v2.4)
 * Hardened security against session hijacking, tamper injections, frame phishing, and unauthorized lock breaks.
 */

import { UserProfile } from '../types';

const SECURITY_SALT = "AKASH_NEXUS_SECURE_SALT_v1_2026_SINGULARITY";

/**
 * Calculates SHA-256 cryptographic digest of an object or string
 */
export async function computeSHA256(text: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(text + SECURITY_SALT);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Generates an immutable integrity fingerprint for the user's profile
 */
export async function generateProfileHash(profile: Omit<UserProfile, 'integrityHash'>): Promise<string> {
  const canonicalData = JSON.stringify({
    name: profile.name.trim(),
    front: profile.front.trim(),
    avatar: profile.avatar,
    isLocked: profile.isLocked,
    securityPasscode: profile.securityPasscode,
    cosmicTheme: profile.cosmicTheme,
    createdAt: profile.createdAt,
  });
  return computeSHA256(canonicalData);
}

/**
 * Verifies profile integrity against tampering
 */
export async function verifyProfileIntegrity(profile: UserProfile): Promise<boolean> {
  if (!profile.integrityHash) return false;
  const expectedHash = await generateProfileHash(profile);
  return expectedHash === profile.integrityHash;
}

/**
 * Strips dangerous HTML & script tags to prevent XSS
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .slice(0, 500)
    .trim();
}

/**
 * Detects if the page is being embedded in an unauthorized iframe (Clickjacking protection)
 */
export function checkFrameSecurity(): { isFramed: boolean; isSecure: boolean } {
  try {
    const isFramed = window.self !== window.top;
    return { isFramed, isSecure: !isFramed };
  } catch {
    // If accessing window.top throws a cross-origin error, it is definitely framed
    return { isFramed: true, isSecure: false };
  }
}

/**
 * Validates a lock passcode in constant time
 */
export function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
