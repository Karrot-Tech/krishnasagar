import { data } from '../data.js';

export const Videos = {
    render: () => {
        const list = data.videos.map(v => `
      <div class="card" style="margin-bottom: 1.5rem;">
          <div style="position:relative; width: 100%; aspect-ratio: 16/9; background: #000;">
              <iframe style="position:absolute; top:0; left:0; width:100%; height:100%;" 
                  src="${v.url}" frameborder="0" allowfullscreen></iframe>
          </div>
          <div style="padding: 1rem;">
             <h3 style="font-size: 1rem; color: var(--primary-color); margin-bottom: 0.5rem;">${v.title}</h3>
             <p style="font-size: 0.8rem; color: var(--text-secondary);">Watch this exclusive content from Di Jaan.</p>
          </div>
      </div>
    `).join('');

        return `
      <div style="padding: 1rem 1rem 0 1rem;">
         <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Di Jaan Videos</h2>
         ${list}
      </div>
    `;
    }
};
