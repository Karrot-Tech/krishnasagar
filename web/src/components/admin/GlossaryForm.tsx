
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { saveGlossary, deleteGlossary } from '@/actions/content';
import { Save, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface GlossaryFormProps {
    glossary?: any;
}

export default function GlossaryForm({ glossary }: GlossaryFormProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        id: glossary?.id || 'new',
        term: glossary?.term || '',
        chapter: glossary?.chapter || '',
        definition_en: glossary?.definition_en || '',
        definition_es: glossary?.definition_es || '',
        definition_hi: glossary?.definition_hi || '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await saveGlossary(formData);
            router.push('/admin/glossary');
            router.refresh();
        } catch (error) {
            console.error('Failed to save:', error);
            alert('Failed to save glossary term');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this term?')) return;
        setLoading(true);
        try {
            await deleteGlossary(glossary.id);
            router.push('/admin/glossary');
            router.refresh();
        } catch (error) {
            console.error('Failed to delete:', error);
            alert('Failed to delete glossary term');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-3 md:p-4 rounded-xl shadow-sm border border-gray-100 sticky top-0 z-10 gap-3">
                <Link href="/admin/glossary" className="flex items-center text-gray-500 hover:text-gray-700 text-xs md:text-sm font-bold">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to List
                </Link>
                <div className="flex items-center space-x-2 md:space-x-4 w-full sm:w-auto">
                    {glossary && (
                        <button
                            type="button"
                            onClick={handleDelete}
                            disabled={loading}
                            className="flex-1 sm:flex-none justify-center bg-red-50 text-red-600 px-3 md:px-4 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center space-x-2 text-xs md:text-sm font-bold border border-red-100"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Delete</span>
                        </button>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 sm:flex-none justify-center bg-ochre text-white px-4 md:px-6 py-2 rounded-lg hover:bg-gold transition-colors flex items-center space-x-2 shadow-lg shadow-ochre/20 text-xs md:text-sm font-black uppercase tracking-widest"
                    >
                        <Save className="w-3.5 h-3.5" />
                        <span>{loading ? 'Saving...' : 'Save Term'}</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
                    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <h2 className="text-base md:text-xl font-black text-gray-900 tracking-tight">Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Term</label>
                                <input
                                    required
                                    className="w-full px-3 py-2.5 md:p-2 border border-gray-100 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none text-sm md:text-base transition-all"
                                    value={formData.term}
                                    onChange={(e) => setFormData({ ...formData, term: e.target.value })}
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Chapter / Reference</label>
                                <input
                                    className="w-full px-3 py-2.5 md:p-2 border border-gray-100 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none text-sm md:text-base transition-all"
                                    value={formData.chapter}
                                    onChange={(e) => setFormData({ ...formData, chapter: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                        <h2 className="text-base md:text-xl font-black text-gray-900 tracking-tight">Definitions</h2>
                        <div className="space-y-1.5">
                            <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">English Definition</label>
                            <textarea
                                required
                                rows={4}
                                className="w-full px-3 py-2.5 md:p-3 border border-gray-100 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none text-sm transition-all"
                                value={formData.definition_en}
                                onChange={(e) => setFormData({ ...formData, definition_en: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Hindi Definition (Optional)</label>
                            <textarea
                                rows={4}
                                className="w-full px-3 py-2.5 md:p-3 border border-gray-100 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none font-serif text-sm transition-all"
                                value={formData.definition_hi}
                                onChange={(e) => setFormData({ ...formData, definition_hi: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">Spanish Definition (Optional)</label>
                            <textarea
                                rows={4}
                                className="w-full px-3 py-2.5 md:p-3 border border-gray-100 bg-gray-50/50 rounded-xl focus:ring-2 focus:ring-ochre/20 focus:border-ochre outline-none text-sm transition-all"
                                value={formData.definition_es}
                                onChange={(e) => setFormData({ ...formData, definition_es: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}
