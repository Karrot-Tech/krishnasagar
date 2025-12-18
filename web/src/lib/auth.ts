import { currentUser } from '@clerk/nextjs/server';

export async function isAdmin() {
    const clerkUser = await currentUser();
    if (!clerkUser) return false;

    // Read from environment variable (comma-separated list)
    const adminEmailsStr = process.env.ADMIN_EMAILS || '';
    const adminEmails = adminEmailsStr.split(',')
        .map(e => e.trim().toLowerCase())
        .filter(e => e !== '');

    return clerkUser.emailAddresses.some(emailObj =>
        adminEmails.includes(emailObj.emailAddress.toLowerCase())
    );
}
