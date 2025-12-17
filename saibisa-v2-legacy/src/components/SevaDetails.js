import { data } from '../data.js';

export const SevaDetails = {
    render: (params) => {
        const id = parseInt(params.id);
        const item = data.sevaInitiatives.find(i => i.id === id);

        if (!item) {
            return `<div style="padding:2rem; text-align:center;">Item not found</div>`;
        }

        return `
      <div style="padding: 1rem;">
         <button onclick="window.history.back()" style="background:none; border:none; font-size:1rem; color: var(--primary-color); cursor:pointer; margin-bottom: 1rem;">
            ← Back
         </button>
         
         <div class="card">
             <div style="height: 200px; background: #eee; overflow: hidden;">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">
             </div>
             <div style="padding: 1.5rem;">
                 <h2 style="color: var(--primary-color); margin-bottom: 1rem;">${item.title}</h2>
                 <p style="color: var(--text-secondary); line-height: 1.8;">
                    ${item.details}
                 </p>
                 
                 <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eee;">
                    <h4 style="margin-bottom: 0.5rem;">Get Involved</h4>
                    <p style="font-size: 0.9rem; color: #666;">
                        Contact us to learn how you can contribute to this initiative.
                    </p>
                    <button class="btn-primary" style="margin-top: 1rem;" onclick="window.navigate('/contact')">Contact Us</button>
                 </div>
             </div>
         </div>
      </div>
    `;
    }
};
