'use client';

import { useUser } from '@clerk/nextjs';

export type UserRole = 'admin' | 'user' | 'guest';

export function useRole(): UserRole {
    const { user, isLoaded, isSignedIn } = useUser();

    if (!isLoaded || !isSignedIn || !user) {
        return 'guest'; // Default to guest if not signed in? Or handle null?
        // Actually, if not signed in, they are virtually a guest, 
        // but 'guest' role here implies a specific *assigned* role in metadata.
        // Let's return a default 'user' if signed in but no role, and null if not signed in?
        // Simpler: assume this hook is for signed-in logic or returns 'guest' as fallback.
    }

    // logic:
    // 1. If explicit role in metadata, use it.
    // 2. If no role, default to 'guest' (restrictive by default).
    return (user.publicMetadata.role as UserRole) || 'guest';
}
