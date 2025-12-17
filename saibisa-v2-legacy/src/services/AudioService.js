export class AudioService {
    constructor() {
        this.audio = new Audio();
        this.playlist = [];
        this.currentIndex = 0;
        this.isPlaying = false;

        // Bind methods
        this.handleEnded = this.handleEnded.bind(this);
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

        // Event listeners
        this.audio.addEventListener('ended', this.handleEnded);
        this.audio.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    static getInstance() {
        if (!AudioService.instance) {
            AudioService.instance = new AudioService();
        }
        return AudioService.instance;
    }

    setPlaylist(tracks) {
        this.playlist = tracks;
    }

    playTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.currentIndex = index;
            const track = this.playlist[this.currentIndex];
            this.audio.src = track.audioUrl;
            this.play();
            this.dispatchChange();
        }
    }

    play() {
        this.audio.play();
        this.isPlaying = true;
        document.dispatchEvent(new CustomEvent('player-state', { detail: { isPlaying: true } }));
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        document.dispatchEvent(new CustomEvent('player-state', { detail: { isPlaying: false } }));
    }

    toggle() {
        if (this.isPlaying) this.pause();
        else this.play();
    }

    next() {
        if (this.currentIndex < this.playlist.length - 1) {
            this.playTrack(this.currentIndex + 1);
        } else {
            // Loop to start? or stop. Let's loop.
            this.playTrack(0);
        }
    }

    prev() {
        if (this.audio.currentTime > 3) {
            this.audio.currentTime = 0;
            return;
        }
        if (this.currentIndex > 0) {
            this.playTrack(this.currentIndex - 1);
        } else {
            this.playTrack(this.playlist.length - 1);
        }
    }

    getCurrentTrack() {
        return this.playlist[this.currentIndex];
    }

    handleEnded() {
        this.next();
    }

    handleTimeUpdate() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        document.dispatchEvent(new CustomEvent('player-progress', {
            detail: {
                currentTime: this.audio.currentTime,
                duration: this.audio.duration || 0,
                progress: isNaN(progress) ? 0 : progress
            }
        }));
    }

    dispatchChange() {
        document.dispatchEvent(new CustomEvent('track-change', {
            detail: this.getCurrentTrack()
        }));
    }
}
