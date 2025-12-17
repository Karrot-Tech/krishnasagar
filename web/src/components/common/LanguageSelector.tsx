'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export default function LanguageSelector() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'es', label: 'Español' },
        { code: 'hi', label: 'हिन्दी' },
    ] as const;

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="p-2 text-ochre hover:bg-gray-50 rounded-full flex items-center space-x-1"
                aria-label="Select Language"
            >
                <Globe className="w-6 h-6" />
                <span className="text-xs font-bold uppercase hidden sm:block">{language}</span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-100">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    setLanguage(lang.code);
                                    setIsOpen(false);
                                }}
                                className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === lang.code ? 'text-ochre font-bold' : 'text-gray-700'
                                    }`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
