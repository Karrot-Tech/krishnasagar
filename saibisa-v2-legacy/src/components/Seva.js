import { data } from '../data.js';

export const Seva = {
    render: () => {
        const list = data.sevaInitiatives.map(item => `
        <div class="card list-item" onclick="window.navigate('/seva/${item.id}')" style="display: flex; align-items: center; padding: 1rem; margin-bottom: 0.5rem; cursor: pointer;">
            <img src="${item.image}" alt="${item.title}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 4px; margin-right: 1rem; border: 1px solid #eee;">
            <div style="flex: 1;">
                <h3 style="font-size: 1.1rem; color: var(--text-primary); font-weight: 500;">${item.title}</h3>
            </div>
            <div style="color: #ccc;">›</div>
        </div>
    `).join('');

        return `
      <div style="padding: 0;">
        <div style="background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${data.events[0].image}'); background-size: cover; background-position: center; padding: 3rem 1rem; text-align: center; color: white;">
             <h2 style="font-size: 1.8rem;">SAIBISA Initiatives</h2>
             <p style="opacity: 0.9; margin-top: 0.5rem;">Touching Lives... Healing Souls...</p>
        </div>
        
        <div style="padding: 1rem;">
             ${list}
        </div>
      </div>
    `;
    }
};
