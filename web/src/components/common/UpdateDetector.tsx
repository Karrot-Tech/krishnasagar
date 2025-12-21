'use client';

import { useState, useEffect, useRef } from 'react';
import { RefreshCw } from 'lucide-react';

export default function UpdateDetector() {
    const [updateAvailable, setUpdateAvailable] = useState(false);
    const currentVersionRef = useRef<string | null>(null);

    useEffect(() => {
        // Only run in production
        if (process.env.NODE_ENV !== 'production') return;

        // Function to check for updates
        const checkForUpdate = async () => {
            try {
                const res = await fetch(`/version.json?t=${Date.now()}`, {
                    cache: 'no-store'
                });
                const data = await res.json();
                const remoteVersion = data.version + '-' + data.buildTime;

                if (currentVersionRef.current && remoteVersion !== currentVersionRef.current) {
                    setUpdateAvailable(true);
                } else if (!currentVersionRef.current) {
                    // First load initialization
                    currentVersionRef.current = remoteVersion;
                }
            } catch (e) {
                // Ignore fetch errors
            }
        };

        // Initial check
        checkForUpdate();

        // Check for updates every 10 minutes
        const interval = setInterval(checkForUpdate, 10 * 60 * 1000);

        // Also check when the tab becomes focused
        window.addEventListener('focus', checkForUpdate);

        return () => {
            clearInterval(interval);
            window.removeEventListener('focus', checkForUpdate);
        };
    }, []);

    if (!updateAvailable) return null;

    return (
        <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-[150] w-[90%] max-w-sm animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
            <button
                onClick={() => window.location.reload()}
                className="w-full bg-white/80 backdrop-blur-2xl border border-ochre/20 p-4 rounded-3xl shadow-[0_20px_50px_rgba(204,119,34,0.15)] flex items-center gap-4 group hover:border-ochre/40 transition-all active:scale-[0.98]"
            >
                <div className="relative flex-none">
                    <div className="w-12 h-12 bg-ochre/10 rounded-2xl flex items-center justify-center text-ochre group-hover:scale-110 transition-transform duration-500">
                        <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-700" />
                    </div>
                    {/* Pulsing indicator */}
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-ochre rounded-full ring-2 ring-white animate-pulse" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-ochre rounded-full ring-2 ring-white animate-ping opacity-75" />
                </div>

                <div className="flex-1 text-left">
                    <p className="text-[10px] font-black text-ochre uppercase tracking-[0.2em] leading-none mb-1.5">System Update</p>
                    <p className="text-sm font-bold text-gray-900 leading-tight">New version v1.2.4 ready.</p>
                    <p className="text-[11px] text-gray-400 font-medium">Tap to refresh for latest leelas</p>
                </div>

                <div className="flex-none w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-ochre group-hover:text-white transition-colors duration-300">
                    <RefreshCw className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100" />
                </div>
            </button>
        </div>
    );
}
