import React from 'react';

interface CategoryFilterProps {
    categories: string[];
    selectedCategory: string;
    onSelectCategory: (category: string) => void;
    counts: Record<string, number>;
    totalCount: number;
}

export default function CategoryFilter({
    categories,
    selectedCategory,
    onSelectCategory,
    counts,
    totalCount
}: CategoryFilterProps) {

    // Common button rendering logic
    const renderButtons = () => (
        <>
            {categories.map((category) => {
                const count = category === 'All' ? totalCount : counts[category];
                const isActive = selectedCategory === category;

                return (
                    <button
                        key={category}
                        onClick={() => onSelectCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border flex items-center space-x-2 whitespace-nowrap ${isActive
                            ? 'bg-ochre text-white border-ochre shadow-md transform scale-105'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-ochre/50 hover:bg-orange-50'
                            }`}
                    >
                        <span>{category}</span>
                        <span className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-400'}`}>
                            {count}
                        </span>
                    </button>
                );
            })}
        </>
    );

    return (
        <>
            {/* Mobile Category Filters (Wrapped Layout) */}
            <div className="md:hidden px-6">
                <div className="flex flex-wrap gap-2">
                    {renderButtons()}
                </div>
            </div>

            {/* Desktop Category Filters (Horizontal Scroll) */}
            <div className="hidden md:block overflow-x-auto pb-2 scrollbar-hide px-4">
                <div className="flex gap-2">
                    {renderButtons()}
                </div>
            </div>
        </>
    );
}
