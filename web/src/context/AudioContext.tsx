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
    seek: (time: number) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children, allTracks }: { children: React.ReactNode, allTracks: Track[] }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Refs for state to avoid closure issues in event listeners
    const currentTrackRef = useRef<Track | null>(null);
    const allTracksRef = useRef<Track[]>(allTracks);

    useEffect(() => {
        currentTrackRef.current = currentTrack;
    }, [currentTrack]);

    useEffect(() => {
        allTracksRef.current = allTracks;
    }, [allTracks]);

    // Initialize Audio Element once
    useEffect(() => {
        if (!audioRef.current && typeof window !== 'undefined') {
            audioRef.current = new Audio();
            audioRef.current.preload = 'auto';
        }
    }, []);

    const playTrack = (track: Track) => {
        if (audioRef.current) {
            // If playing the same track, just toggle play
            if (currentTrack?.id === track.id) {
                togglePlay();
                return;
            }

            setIsLoading(true);
            setProgress(0);

            // Reset existing state
            audioRef.current.pause();
            audioRef.current.currentTime = 0;

            audioRef.current.src = track.url;

            const playPromise = audioRef.current.play();
            if (playPromise !== undefined) {
                playPromise
                    .then(() => {
                        // Playback started successfully
                        setIsLoading(false);
                        setIsPlaying(true);
                    })
                    .catch(e => {
                        console.error("Playback failed:", e);
                        setIsLoading(false);
                        setIsPlaying(false);
                    });
            }

            setCurrentTrack(track);
        }
    };

    const togglePlay = () => {
        if (audioRef.current && currentTrack) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                const playPromise = audioRef.current.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            setIsPlaying(true);
                        })
                        .catch(console.error);
                }
            }
        }
    };

    const seek = (time: number) => {
        if (audioRef.current && currentTrack) {
            // Time is in percentage (0-100) or absolute seconds?
            // Let's assume input is percentage (0-100) for MiniPlayer compatibility
            const duration = audioRef.current.duration;
            if (duration) {
                const newTime = (time / 100) * duration;
                audioRef.current.currentTime = newTime;
                setProgress(time);
            }
        }
    };

    const playNext = () => {
        const track = currentTrackRef.current;
        const tracks = allTracksRef.current;
        if (!track || tracks.length === 0) return;
        const currentIndex = tracks.findIndex(t => t.id === track.id);
        const nextIndex = (currentIndex + 1) % tracks.length;
        playTrack(tracks[nextIndex]);
    };

    const playPrev = () => {
        const track = currentTrackRef.current;
        const tracks = allTracksRef.current;
        if (!track || tracks.length === 0) return;
        const currentIndex = tracks.findIndex(t => t.id === track.id);
        const prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
        playTrack(tracks[prevIndex]);
    };

    const closePlayer = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            // Don't clear src immediately to avoid potential race conditions or errors
            // audioRef.current.src = ''; 
        }
        setIsPlaying(false);
        setIsLoading(false);
        setCurrentTrack(null);
        setProgress(0);
    };

    // Event Listeners
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const handleEnded = () => playNext();
        const handleTimeUpdate = () => {
            if (audio.duration) {
                const p = (audio.currentTime / audio.duration) * 100;
                setProgress(isNaN(p) ? 0 : p);
            }
        };

        const handleWaiting = () => setIsLoading(true);
        const handleCanPlay = () => setIsLoading(false);
        const handlePlaying = () => {
            setIsLoading(false);
            setIsPlaying(true);
        };
        const handlePause = () => setIsPlaying(false);
        const handleError = (e: any) => {
            console.error("Audio error:", e);
            setIsLoading(false);
            setIsPlaying(false);
        };

        // We don't strictly need 'play' listener if we handle it in togglePlay/playTrack, 
        // but it's good for external control (like media keys)
        const handlePlay = () => setIsPlaying(true);

        audio.addEventListener('ended', handleEnded);
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('waiting', handleWaiting);
        audio.addEventListener('canplay', handleCanPlay);
        audio.addEventListener('playing', handlePlaying);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('waiting', handleWaiting);
            audio.removeEventListener('canplay', handleCanPlay);
            audio.removeEventListener('playing', handlePlaying);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('error', handleError);
        };
    }, []);

    // Media Session API Support
    useEffect(() => {
        if (!('mediaSession' in navigator) || !currentTrack) return;

        navigator.mediaSession.metadata = new MediaMetadata({
            title: currentTrack.title,
            artist: currentTrack.singer === 'Unknown' ? 'Saileela Rahasya' : currentTrack.singer,
            album: 'Saileela Rahasya Bhajans',
            artwork: [
                { src: '/saileela-logo.png', sizes: '96x96', type: 'image/png' },
                { src: '/saileela-logo.png', sizes: '128x128', type: 'image/png' },
                { src: '/saileela-logo.png', sizes: '192x192', type: 'image/png' },
                { src: '/saileela-logo.png', sizes: '256x256', type: 'image/png' },
                { src: '/saileela-logo.png', sizes: '384x384', type: 'image/png' },
                { src: '/saileela-logo.png', sizes: '512x512', type: 'image/png' },
            ]
        });

        navigator.mediaSession.setActionHandler('play', () => {
            togglePlay();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
            togglePlay();
        });
        navigator.mediaSession.setActionHandler('previoustrack', () => playPrev());
        navigator.mediaSession.setActionHandler('nexttrack', () => playNext());

        // Add seek handlers for Media Session
        navigator.mediaSession.setActionHandler('seekto', (details) => {
            if (details.seekTime && audioRef.current) {
                audioRef.current.currentTime = details.seekTime;
            }
        });

        return () => {
            if ('mediaSession' in navigator) {
                navigator.mediaSession.setActionHandler('play', null);
                navigator.mediaSession.setActionHandler('pause', null);
                navigator.mediaSession.setActionHandler('previoustrack', null);
                navigator.mediaSession.setActionHandler('nexttrack', null);
                navigator.mediaSession.setActionHandler('seekto', null);
            }
        };
    }, [currentTrack]); // TogglePlay and others are stable or ref-based

    return (
        <AudioContext.Provider value={{ currentTrack, isPlaying, isLoading, progress, playTrack, togglePlay, playNext, playPrev, closePlayer, seek }}>
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
