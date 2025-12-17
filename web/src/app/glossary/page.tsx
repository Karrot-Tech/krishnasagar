'use client';

import { useState, useMemo } from 'react';
import glossaryData from '@/data/glossary.json';
import SearchBar from '@/components/features/SearchBar';
import { useLanguage } from '@/context/LanguageContext';

type SortOrder = 'asc' | 'desc';

export default function GlossaryPage() {
    const { language } = useLanguage();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

    // Definition key based on selected language
    const definitionKey = `definition_${language}` as keyof typeof glossaryData[0];
    // Fallback to English if specific language definition is missing
    const getDefinition = (item: typeof glossaryData[0]) => {
        return (item as any)[definitionKey] || item.definition_en;
    };

    const filteredData = useMemo(() => {
        let data = glossaryData.filter((item) => {
            const termMatch = item.term.toLowerCase().includes(searchQuery.toLowerCase());
            const defMatch = getDefinition(item).toLowerCase().includes(searchQuery.toLowerCase());
            return termMatch || defMatch;
        });

        data = data.sort((a, b) => {
            const compareA = a.term.toLowerCase();
            const compareB = b.term.toLowerCase();
            return sortOrder === 'asc'
                ? compareA.localeCompare(compareB)
                : compareB.localeCompare(compareA);
        });

        return data;
    }, [searchQuery, sortOrder, language]);

    return (
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl font-bold text-ochre">Glossary</h1>

                <div className="flex items-center space-x-4 w-full md:w-auto md:pr-16">
                    <SearchBar
                        value={searchQuery}
                        onChange={setSearchQuery}
                        placeholder="Search terms or definitions..."
                    />

                    <button
                        onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                        className="p-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50 whitespace-nowrap"
                    >
                        {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
                    </button>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                        <div
                            key={item.term}
                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-gold transition-colors"
                        >
                            <div className="flex justify-between items-start">
                                <h2 className="text-xl font-bold text-ochre mb-2">{item.term}</h2>
                                <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                                    {item.chapter}
                                </span>
                            </div>
                            <p className="text-gray-700 font-serif text-lg leading-relaxed">
                                {getDefinition(item)}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-12 text-gray-500">
                        No terms found matching "{searchQuery}"
                    </div>
                )}
            </div>
        </div>
    );
}
