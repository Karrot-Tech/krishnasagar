import Link from 'next/link';
import leelaArticles from '@/data/leela_articles.json';
import { Footprints } from 'lucide-react';

export default function LeelaPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
            <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-ochre/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ochre">
                    <Footprints className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-ochre">Leela</h1>
                <p className="text-gray-500 font-serif italic">"Devine plays of the Lord"</p>
            </div>

            <div className="grid gap-6">
                {leelaArticles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/leela/${article.id}`}
                        className="block p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all group"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="space-y-2">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded inline-block">
                                    {article.chapter}
                                </span>
                                <h2 className="text-xl font-bold text-gray-800 group-hover:text-ochre transition-colors">
                                    {article.title_english}
                                </h2>
                                <h3 className="text-lg text-gray-400 font-serif">
                                    {article.title_hindi}
                                </h3>
                                <p className="text-gray-600 text-sm line-clamp-2">
                                    {article.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
