import Link from 'next/link';
import bodhakathaArticles from '@/data/bodhakatha_articles.json';
import { Lightbulb } from 'lucide-react';

export default function BodhakathaPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 pt-6">
            <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-ochre/10 rounded-full flex items-center justify-center mx-auto mb-4 text-ochre">
                    <Lightbulb className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold text-ochre">Bodhakatha</h1>
                <p className="text-gray-500 font-serif italic">"Instructional Stories & Wisdom"</p>
            </div>

            <div className="grid gap-6">
                {bodhakathaArticles.map((article) => (
                    <Link
                        key={article.id}
                        href={`/bodhakatha/${article.id}`} // We'll reuse the same Detail view structure maybe? Or simple wrapper
                        className="block p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md hover:border-gold transition-all group"
                    >
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-bold text-white bg-ochre px-3 py-1 rounded-full self-start">
                                {article.theme}
                            </span>
                            <h2 className="text-xl font-bold text-gray-800 group-hover:text-ochre transition-colors mt-2">
                                {article.title_english}
                            </h2>
                            <h3 className="text-lg text-gray-400 font-serif">
                                {article.title_hindi}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                {article.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
