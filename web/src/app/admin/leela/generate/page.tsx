'use client';

import { useState } from 'react';
import { Sparkles, Loader2, Copy, Check, AlertCircle, Youtube } from 'lucide-react';

interface GeneratedContent {
    is_suitable?: boolean;
    quality_score?: number;
    rejection_reason?: string;
    rejected?: boolean;
    reason?: string;
    story?: string;
    doubt?: string;
    revelation?: string;
    scriptural_refs?: string;
}

export default function GenerateLeelaPage() {
    const [youtubeId, setYoutubeId] = useState('');
    const [title, setTitle] = useState('');
    const [transcript, setTranscript] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [content, setContent] = useState<GeneratedContent | null>(null);
    const [copied, setCopied] = useState(false);

    const handleGenerate = async () => {
        if (!transcript.trim() || transcript.trim().length < 100) {
            setError('Please provide a transcript (minimum 100 characters)');
            return;
        }

        setIsGenerating(true);
        setError(null);
        setContent(null);

        try {
            const response = await fetch('/api/agent/generate-leela', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    transcript: transcript.trim(),
                    youtube_id: youtubeId.trim(),
                    title: title.trim()
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate content');
            }

            setContent(data);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setIsGenerating(false);
        }
    };

    const handleCopy = () => {
        if (content) {
            navigator.clipboard.writeText(JSON.stringify(content, null, 2));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const extractYoutubeId = (input: string) => {
        const match = input.match(/(?:v=|youtu\.be\/)([^&\s]+)/);
        return match ? match[1] : input;
    };

    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-2xl md:text-4xl font-black text-gray-900 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-ochre" />
                    AI Leela Generator
                </h1>
                <p className="text-gray-500 font-serif">
                    Transform raw transcripts into structured Leela content using Gemini 3 Pro
                </p>
            </div>

            {/* Input Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
                {/* Title Input */}
                <label className="block">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Title <span className="text-gray-400 font-normal">(optional)</span>
                    </span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g., The Story of Damu Anna Kasar"
                        className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ochre focus:border-ochre transition-all"
                        disabled={isGenerating}
                    />
                </label>

                {/* YouTube ID Input */}
                <label className="block">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide flex items-center gap-2">
                        <Youtube className="w-4 h-4 text-red-600" />
                        YouTube ID or URL <span className="text-gray-400 font-normal">(optional)</span>
                    </span>
                    <input
                        type="text"
                        value={youtubeId}
                        onChange={(e) => setYoutubeId(extractYoutubeId(e.target.value))}
                        placeholder="e.g., MfUA3hlKtz0 or paste full URL"
                        className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ochre focus:border-ochre transition-all"
                        disabled={isGenerating}
                    />
                </label>

                {/* Transcript Input */}
                <label className="block">
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Transcript <span className="text-red-500">*</span>
                    </span>
                    <textarea
                        value={transcript}
                        onChange={(e) => setTranscript(e.target.value)}
                        placeholder="Paste the full transcript from YouTube here..."
                        rows={10}
                        className="mt-2 w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-ochre focus:border-ochre transition-all resize-y font-mono text-sm"
                        disabled={isGenerating}
                    />
                    <p className="mt-1 text-xs text-gray-400">
                        {transcript.length} characters {transcript.length < 100 && transcript.length > 0 && <span className="text-red-500">(minimum 100)</span>}
                    </p>
                </label>

                {/* Generate Button */}
                <button
                    onClick={handleGenerate}
                    disabled={isGenerating || transcript.trim().length < 100}
                    className="w-full px-6 py-4 bg-ochre text-white font-bold rounded-xl hover:bg-ochre/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 text-lg"
                >
                    {isGenerating ? (
                        <>
                            <Loader2 className="w-6 h-6 animate-spin" />
                            Generating with Gemini 3 Pro... (15-30s)
                        </>
                    ) : (
                        <>
                            <Sparkles className="w-6 h-6" />
                            Generate Leela Content
                        </>
                    )}
                </button>

                {error && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                        <p>{error}</p>
                    </div>
                )}
            </div>

            {/* Results Section */}
            {content && (
                <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                    {/* Rejection Display */}
                    {content.rejected && (
                        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 space-y-4">
                            <div className="flex items-center gap-3 text-red-700">
                                <AlertCircle className="w-8 h-8" />
                                <h2 className="text-xl font-bold uppercase tracking-tight">Transcript Rejected</h2>
                            </div>
                            <div className="space-y-2">
                                <p className="text-red-900 font-medium">{content.reason || content.rejection_reason}</p>
                                <div className="flex items-center gap-4 text-sm text-red-600 font-bold uppercase tracking-widest bg-white/50 px-3 py-1 rounded-lg w-fit">
                                    Quality Score: {content.quality_score}/10
                                </div>
                            </div>
                            <p className="text-sm text-red-600 italic">
                                Suggestions: Please ensure the transcript is accurate, coherent, and contains meaningful spiritual content related to Sai Baba.
                            </p>
                        </div>
                    )}

                    {/* Action Bar (Only for successful results) */}
                    {!content.rejected && (
                        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5" />
                                <div className="flex flex-col">
                                    <p className="font-semibold leading-none">Content generated successfully!</p>
                                    <span className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-70"> Quality Score: {content.quality_score}/10</span>
                                </div>
                            </div>
                            <button
                                onClick={handleCopy}
                                className="px-4 py-2 bg-green-100 text-green-800 font-medium rounded-lg hover:bg-green-200 transition-all flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check className="w-4 h-4" />
                                        Copied!
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-4 h-4" />
                                        Copy JSON
                                    </>
                                )}
                            </button>
                        </div>
                    )}

                    {/* The Story */}
                    {!content.rejected && content.story && (
                        <ContentSection
                            title="📖 The Story"
                            content={content.story}
                            bgColor="bg-white"
                        />
                    )}

                    {/* The Doubt */}
                    {!content.rejected && content.doubt && (
                        <ContentSection
                            title="❓ The Conflict / Doubt"
                            content={content.doubt}
                            bgColor="bg-orange-50"
                        />
                    )}

                    {/* The Revelation */}
                    {!content.rejected && content.revelation && (
                        <ContentSection
                            title="💡 The Revelation"
                            content={content.revelation}
                            bgColor="bg-amber-50"
                        />
                    )}

                    {/* Scriptural References */}
                    {!content.rejected && content.scriptural_refs && (
                        <ContentSection
                            title="📜 Scriptural References"
                            content={content.scriptural_refs}
                            bgColor="bg-gray-50"
                        />
                    )}

                    {/* Raw JSON */}
                    <details className="group">
                        <summary className="cursor-pointer list-none flex items-center justify-between p-4 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                            <span className="font-semibold text-gray-700">View Raw JSON</span>
                            <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <pre className="mt-4 p-4 bg-gray-900 text-green-400 rounded-xl overflow-auto text-sm max-h-96">
                            {JSON.stringify(content, null, 2)}
                        </pre>
                    </details>
                </div>
            )}
        </div>
    );
}

function ContentSection({ title, content, bgColor }: { title: string; content: string; bgColor: string }) {
    return (
        <div className={`${bgColor} rounded-2xl border border-gray-100 p-6 space-y-3`}>
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <div className="prose prose-ochre max-w-none text-gray-700 whitespace-pre-wrap">
                {content}
            </div>
        </div>
    );
}
