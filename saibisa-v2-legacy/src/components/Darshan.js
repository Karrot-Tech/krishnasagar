import { data } from '../data.js';

export const Darshan = {
    render: () => {
        const stream = data.liveStreams[0];
        return `
      <div style="padding: 1rem;">
        <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Live Darshan</h2>
        
        <div class="card">
             <div style="position:relative; width: 100%; aspect-ratio: 16/9; background: #000;">
                 <iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:0" 
                         src="${stream.url}" allowfullscreen></iframe>
             </div>
             <div style="padding: 1rem; text-align: center;">
                 <div style="display: inline-block; padding: 0.25rem 0.5rem; background: #D32F2F; color: white; border-radius: 4px; font-size: 0.75rem; font-weight: bold; margin-bottom: 0.5rem;">LIVE NOW</div>
                 <h3 style="color: var(--primary-color)">${stream.title}</h3>
             </div>
        </div>
        
        <div style="margin-top: 2rem; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
            <p>Daily Aarti: 6:00 PM</p>
            <p>Join us for morning prayers at 7:00 AM</p>
        </div>
      </div>
    `;
    }
};
