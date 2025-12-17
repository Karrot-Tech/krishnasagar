import { data } from '../data.js';

export const Events = {
    render: () => {
        const list = data.events.map(e => `
        <div class="card" style="padding: 0;">
            <div style="height: 150px; overflow: hidden;">
                 <img src="${e.image}" alt="${e.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 1.25rem;">
                <div style="color: var(--primary-action); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;">${e.date}</div>
                <h3 style="font-size: 1.25rem; margin: 0.5rem 0; color: var(--primary-color);">${e.title}</h3>
                <p style="color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;">${e.content}</p>
            </div>
        </div>
    `).join('');

        return `
      <div style="padding: 1rem;">
         <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Upcoming Events</h2>
         ${list}
      </div>
    `;
    }
};
