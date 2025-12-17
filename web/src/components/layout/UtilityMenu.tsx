'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, X, BookA, HelpCircle, Heart, LogOut, Mail } from 'lucide-react';
import { useUser } from '@/context/UserContext';

export default function UtilityMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { isGuest, signIn, signOut, user } = useUser();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleSignIn = () => {
        signIn();
        // Don't close menu immediately so they see the change
    };

    const handleSignOut = () => {
        signOut();
    };

    return (
        <>
            {/* Avatar Trigger */}
            <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:bg-gray-50 rounded-full border border-gray-200 bg-white shadow-sm"
                aria-label="User Menu"
            >
                <User className="w-5 h-5" />
            </button>

            {/* Slide-out Panel */}
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-50 backdrop-blur-sm transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800">
                        {isGuest ? 'Welcome, Guest' : `Hari Om, ${user?.name || 'Devotee'}`}
                    </h2>
                    <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-gray-600">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="p-4 space-y-6">
                    {/* Primary Action */}
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                        {isGuest ? (
                            <button
                                onClick={handleSignIn}
                                className="w-full py-2 bg-ochre text-white rounded-md font-bold hover:bg-orange-700 transition"
                            >
                                Sign In / Register
                            </button>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-2 text-ochre">
                                    <User className="w-8 h-8" />
                                </div>
                                <p className="font-medium">User Profile</p>
                            </div>
                        )}
                    </div>

                    {/* Secondary Links */}
                    <nav className="space-y-2 md:hidden">
                        <Link href="/glossary" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md text-gray-700">
                            <BookA className="w-5 h-5 text-gray-400" />
                            <span>Glossary</span>
                        </Link>
                        <Link href="/faq" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md text-gray-700">
                            <HelpCircle className="w-5 h-5 text-gray-400" />
                            <span>FAQ</span>
                        </Link>
                        <Link href="/donate" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md text-gray-700">
                            <Heart className="w-5 h-5 text-gray-400" />
                            <span>Donate</span>
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-md text-gray-700">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <span>Contact Us</span>
                        </Link>
                    </nav>

                    {/* Logout (if signed in) */}
                    {!isGuest && (
                        <button
                            onClick={handleSignOut}
                            className="w-full flex items-center justify-center space-x-2 p-3 text-red-500 hover:bg-red-50 rounded-md mt-4"
                        >
                            <LogOut className="w-5 h-5" />
                            <span>Sign Out</span>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}
