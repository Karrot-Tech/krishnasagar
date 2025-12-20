'use client';

import { X } from 'lucide-react';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    actions?: ReactNode;
    flush?: boolean;
}

export function Modal({ isOpen, onClose, title, children, actions, flush = false }: ModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
            // Clean up potentially left-over strict overflow if unmounted while open
            if (isOpen) {
                document.body.style.overflow = 'unset';
            }
        };
    }, [isOpen]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-opacity"
                onClick={onClose}
                aria-hidden="true"
            />
            <div
                className={`bg-white w-full max-w-md rounded-2xl shadow-2xl relative z-10 overflow-hidden transform transition-all animate-in zoom-in duration-300 ${flush ? 'mb-0' : 'mb-0'}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                <div className={flush ? '' : 'p-6'}>
                    <div className={`flex justify-between items-center ${flush ? 'p-6 pb-2' : 'mb-4'}`}>
                        <h3 id="modal-title" className="text-xl font-black text-gray-900 tracking-tight">{title}</h3>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5 text-gray-500" />
                        </button>
                    </div>
                    <div className={flush ? '' : 'text-gray-600 mb-8'}>
                        {children}
                    </div>
                    {actions && (
                        <div className={`grid grid-cols-2 gap-3 ${flush ? 'p-6 pt-0' : ''}`}>
                            {actions}
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body
    );
}
