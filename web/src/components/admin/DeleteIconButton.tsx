
'use client';

import { deleteLeela, deleteGlossary } from '@/actions/content';
import { useToast } from '@/context/ToastContext';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';
import { useState, useTransition } from 'react';

interface DeleteIconButtonProps {
    id: string;
    type: 'leela' | 'glossary';
}

export default function DeleteIconButton({ id, type }: DeleteIconButtonProps) {
    const router = useRouter();
    const { showToast } = useToast();
    const [isPending, startTransition] = useTransition();

    const handleDelete = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

        startTransition(async () => {
            try {
                if (type === 'leela') await deleteLeela(id);
                else if (type === 'glossary') await deleteGlossary(id);

                router.refresh();
                // If we are on the edit page for this item, go back to the list
                if (window.location.pathname.includes(id)) {
                    router.push(`/admin/${type}`);
                }
            } catch (error) {
                console.error('Failed to delete:', error);
                showToast('Failed to delete item. Please check your connection and try again.', 'error');
            }
        });
    };

    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className={`p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all shadow-sm bg-white border border-gray-100 active:scale-90 disabled:opacity-50 ${isPending ? 'animate-pulse bg-red-50' : ''}`}
            aria-label={`Delete ${type}`}
        >
            <Trash2 className={`w-4 h-4 ${isPending ? 'opacity-50' : ''}`} />
        </button>
    );
}
