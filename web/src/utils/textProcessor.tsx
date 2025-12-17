import { ReactNode } from 'react';
import glossaryData from '@/data/glossary.json';

interface GlossaryTerm {
    term: string;
    definition_en: string;
    definition_es: string;
    chapter: string;
}

// Escape special regex characters
function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Processes text and wraps glossary terms in a span.
 * Returns an array of ReactNodes (strings and spans).
 */
export function highlightGlossaryTerms(
    text: string,
    onTermClick: (term: GlossaryTerm) => void
): ReactNode[] {
    // 1. Sort terms by length (descending) to match longest phrases first
    const terms = [...glossaryData].sort((a, b) => b.term.length - a.term.length);

    // 2. Create a regex to match any of the terms (case-insensitive)
    // \b ensures we match "Love" but not "Lover" (word boundaries)
    const pattern = new RegExp(`\\b(${terms.map(t => escapeRegExp(t.term)).join('|')})\\b`, 'gi');

    const parts = text.split(pattern);
    const result: ReactNode[] = [];

    for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        // Check if this part matches a term (case-insensitive find)
        const matchedTerm = terms.find(t => t.term.toLowerCase() === part.toLowerCase());

        if (matchedTerm) {
            result.push(
                <span
                    key={`term-${i}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onTermClick(matchedTerm);
                    }}
                    className="text-ochre font-bold cursor-pointer hover:underline decoration-gold decoration-2 underline-offset-2 transition-all"
                >
                    {part}
                </span>
            );
        } else {
            result.push(part);
        }
    }

    return result;
}
