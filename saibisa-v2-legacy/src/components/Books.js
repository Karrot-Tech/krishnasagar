import { data } from '../data.js';

export const Books = {
    render: () => {
        const list = data.books.map(b => `
        <div class="card" style="display: flex; padding: 1rem;">
            <img src="${b.cover}" alt="${b.title}" style="width: 80px; height: 120px; object-fit: cover; border-radius: 4px; box-shadow: var(--shadow-sm);">
            <div style="flex: 1; margin-left: 1rem; display: flex; flex-direction: column; justify-content: center;">
                <h3 style="font-size: 1.1rem; color: var(--primary-color); margin-bottom: 0.25rem;">${b.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 0.5rem;">${b.author}</p>
                 <a href="${b.downloadUrl}" target="_blank" style="align-self: flex-start; padding: 0.4rem 0.8rem; background: var(--secondary-color); color: var(--primary-color); font-size: 0.8rem; border-radius: 4px; font-weight: 600;">
                    Download PDF ▼
                 </a>
            </div>
        </div>
    `).join('');

        return `
      <div style="padding: 1rem;">
          <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Books Library</h2>
          ${list}
      </div>
    `;
    }
};
