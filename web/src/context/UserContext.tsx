'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
    name: string;
    email: string;
}

interface UserContextType {
    isGuest: boolean;
    user: User | null;
    signIn: () => void;
    signOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [isGuest, setIsGuest] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const signIn = () => {
        setIsGuest(false);
        setUser({
            name: 'Devotee',
            email: 'devotee@example.com'
        });
    };

    const signOut = () => {
        setIsGuest(true);
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ isGuest, user, signIn, signOut }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
