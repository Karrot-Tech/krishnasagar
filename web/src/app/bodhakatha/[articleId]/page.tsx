import bodhakathaArticles from '@/data/bodhakatha_articles.json';
import VideoPlayer from '@/components/features/VideoPlayer';
import ChapterTextViewer from '@/components/features/ChapterTextViewer';

// Server Component
export async function generateStaticParams() {
    return bodhakathaArticles.map((article) => ({
        articleId: article.id.toString(),
    }));
}

export default async function BodhakathaDetailPage({ params }: { params: Promise<{ articleId: string }> }) {
    const { articleId } = await params;
    const article = bodhakathaArticles.find((c) => c.id.toString() === articleId);

    if (!article) {
        return <div>Article not found</div>;
    }

    // Instructional mock text
    const dummyText = Array(15).fill(
        "In this instructional Bodhakatha, we learn the importance of internal purity over external rituals. Sai Baba often emphasized that a clean heart is the dwelling place of God. Through 'Satsang' and understanding the 'Rahasya' of his teachings, one can attain peace."
    ).join("\n\n");

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
            {/* Left: Video */}
            <div className="w-full lg:w-1/2 flex-none">
                <div className="lg:sticky lg:top-8 space-y-4">
                    <VideoPlayer videoId={article.youtube_id} />

                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center space-x-2 mb-2">
                            <span className="text-xs font-bold text-white bg-ochre px-2 py-1 rounded">
                                {article.theme}
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800">{article.title_english}</h1>
                        <h2 className="text-xl text-ochre font-serif">{article.title_hindi}</h2>
                    </div>
                </div>
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <article className="prose prose-ochre max-w-none bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-500 mb-4">Core Teaching</h3>
                    <ChapterTextViewer text={dummyText} />
                </article>
            </div>
        </div>
    );
}
