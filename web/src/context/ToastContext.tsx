'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Notification, NotificationType } from '@/components/common/Notification';

interface ToastContextType {
    showToast: (message: string, type: NotificationType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState<{ message: string; type: NotificationType } | null>(null);

    const showToast = useCallback((message: string, type: NotificationType) => {
        setToast({ message, type });
    }, []);

    const handleClose = useCallback(() => {
        setToast(null);
    }, []);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <Notification
                    message={toast.message}
                    type={toast.type}
                    onClose={handleClose}
                />
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
