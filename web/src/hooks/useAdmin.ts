'use client';

import { useUser } from '@clerk/nextjs';
import { useRole } from '@/hooks/useRole';

export function useAdmin() {
    const { user, isLoaded, isSignedIn } = useUser();
    const role = useRole();

    if (!isLoaded || !isSignedIn || !user) {
        return false;
    }

    // 1. Check Clerk Metadata
    if (role === 'admin') {
        return true;
    }

    // 2. Check Environment Variable (Fallback)
    // Note: We access NEXT_PUBLIC_ env var here on client side
    const adminEmailsStr = (process.env.NEXT_PUBLIC_ADMIN_EMAILS || '').replace(/['"]/g, '');
    const adminEmails = adminEmailsStr.split(',')
        .map(e => e.trim().toLowerCase())
        .filter(e => e !== '');

    return user.emailAddresses.some(emailObj =>
        adminEmails.includes(emailObj.emailAddress.toLowerCase())
    );
}
