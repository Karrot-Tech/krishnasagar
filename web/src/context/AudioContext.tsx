'use client';

import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

export interface Track {
    id: number;
    title: string;
    singer: string;
    category: string;
    url: string;
    cover?: string;
}

interface AudioContextType {
    currentTrack: Track | null;
    isPlaying: boolean;
    isLoading: boolean;
    progress: number;
    playTrack: (track: Track) => void;
    togglePlay: () => void;
    playNext: () => void;
    playPrev: () => void;
    closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children, allTracks }: { children: React.ReactNode, allTracks: Track[] }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize Audio
    useEffect(() => {
        audioRef.current = new Audio();

        const handleEnded = () => playNext();
        const handleTimeUpdate = () => {
            if (audioRef.current) {
                const p = (audioRef.current.currentTime / audioRef.current.duration) * 100;
                setProgress(isNaN(p) ? 0 : p);
            }
        };

        const handleWaiting = () => setIsLoading(true);
        const handleCanPlay = () => setIsLoading(false);
        const handlePlaying = () => setIsLoading(false);
        const handleLoadStart = () => setIsLoading(true);

        audioRef.current.addEventListener('ended', handleEnded);
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
        audioRef.current.addEventListener('waiting', handleWaiting);
        audioRef.current.addEventListener('canplay', handleCanPlay);
        audioRef.current.addEventListener('playing', handlePlaying);
        audioRef.current.addEventListener('loadstart', handleLoadStart);

        return () => {
            audioRef.current?.removeEventListener('ended', handleEnded);
            audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
            audioRef.current?.removeEventListener('waiting', handleWaiting);
            audioRef.current?.removeEventListener('canplay', handleCanPlay);
            audioRef.current?.removeEventListener('playing', handlePlaying);
            audioRef.current?.removeEventListener('loadstart', handleLoadStart);
        };
    }, []);

    const playTrack = (track: Track) => {
        if (audioRef.current) {
            setIsLoading(true); // Set loading immediately
            audioRef.current.src = track.url;
            audioRef.current.play().catch(e => {
                console.error("Playback failed:", e);
                setIsLoading(false);
            });
            setCurrentTrack(track);
            setIsPlaying(true);
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play().catch(console.error);
                setIsPlaying(true);
            }
        }
    };

    const playNext = () => {
        if (!currentTrack) return;
        const currentIndex = allTracks.findIndex(t => t.id === currentTrack.id);
        const nextIndex = (currentIndex + 1) % allTracks.length;
        playTrack(allTracks[nextIndex]);
    };

    const playPrev = () => {
        if (!currentTrack) return;
        const currentIndex = allTracks.findIndex(t => t.id === currentTrack.id);
        const prevIndex = (currentIndex - 1 + allTracks.length) % allTracks.length;
        playTrack(allTracks[prevIndex]);
    };

    const closePlayer = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
        setIsPlaying(false);
        setIsLoading(false);
        setCurrentTrack(null);
        setProgress(0);
    };

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, isLoading, progress, playTrack, togglePlay, playNext, playPrev, closePlayer }}>
            {children}
        </AudioContext.Provider>
    );
}

export function useAudio() {
    const context = useContext(AudioContext);
    if (context === undefined) {
        throw new Error('useAudio must be used within an AudioProvider');
    }
    return context;
}
