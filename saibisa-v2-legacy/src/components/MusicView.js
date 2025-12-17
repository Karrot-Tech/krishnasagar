import { data } from '../data.js';
import { AudioService } from '../services/AudioService.js';

export const MusicView = {
    render: () => {
        const list = data.music.map((track, i) => `
        <div class="music-item" data-index="${i}">
            <div class="track-index">${i + 1}</div>
            <div class="content">
                <div class="title">${track.title}</div>
                <div class="meta">${track.singer}</div>
            </div>
            <div style="color: var(--primary-color); opacity: 0.6;">▶</div>
        </div>
    `).join('');

        return `
      <div style="background: white; min-height: 100%;">
          <div style="padding: 2rem 1rem; text-align: center; background: #FFF8E1; border-bottom: 1px solid rgba(0,0,0,0.05);">
              <h2 style="color: var(--primary-color); font-family: 'Cinzel', serif; font-size: 1.5rem;">Chords of Consciousness</h2>
              <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.5rem;">Let us Chant Sai Sai Sai</p>
          </div>
          
          <div class="music-list">
              ${list}
          </div>
      </div>
    `;
    },

    afterRender: () => {
        // Attach click listeners to music items
        document.querySelectorAll('.music-item').forEach(item => {
            item.addEventListener('click', () => {
                const index = parseInt(item.dataset.index);
                // Initialize/Update playlist if needed (simplistic: always set full list)
                const player = AudioService.getInstance();
                player.setPlaylist(data.music);
                player.playTrack(index);
            });
        });
    }
};
