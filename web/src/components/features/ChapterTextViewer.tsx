'use client';

import { useState } from 'react';
import { highlightGlossaryTerms } from '@/utils/textProcessor';
import GlossaryOverlay from './GlossaryOverlay';

interface GlossaryTerm {
    term: string;
    definition_en: string;
    definition_es: string;
    chapter: string;
}

export default function ChapterTextViewer({ text }: { text: string }) {
    const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);

    const content = highlightGlossaryTerms(text, (term) => {
        setSelectedTerm(term);
    });

    return (
        <>
            <div className="whitespace-pre-wrap text-gray-700 leading-relaxed font-serif text-lg">
                {content}
            </div>

            {selectedTerm && (
                <GlossaryOverlay
                    term={selectedTerm}
                    onClose={() => setSelectedTerm(null)}
                />
            )}
        </>
    );
}
