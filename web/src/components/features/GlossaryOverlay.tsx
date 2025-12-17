'use client';

import { X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface GlossaryTerm {
    term: string;
    definition_en: string;
    definition_es: string;
    chapter: string;
}

interface GlossaryOverlayProps {
    term: GlossaryTerm | null;
    onClose: () => void;
}

export default function GlossaryOverlay({ term, onClose }: GlossaryOverlayProps) {
    const { language } = useLanguage();

    if (!term) return null;

    const definition = language === 'es' ? term.definition_es : term.definition_en;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            {/* Backdrop - specific for clicking outside */}
            <div
                className="absolute inset-0 pointer-events-auto"
                onClick={onClose}
            />

            {/* Card */}
            <div className="bg-white rounded-lg shadow-xl border border-ochre/20 p-6 max-w-sm w-full mx-4 relative animate-in fade-in zoom-in duration-200 pointer-events-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 p-1"
                >
                    <X className="w-5 h-5" />
                </button>

                <h3 className="text-xl font-bold text-ochre mb-2">{term.term}</h3>
                <p className="text-gray-700 font-serif leading-relaxed">
                    {definition}
                </p>
                <span className="text-xs text-gray-400 mt-4 block">
                    Source: {term.chapter}
                </span>
            </div>
        </div>
    );
}
