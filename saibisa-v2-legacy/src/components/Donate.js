export const Donate = {
    render: () => {
        return `
      <div style="padding: 1rem;">
        <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Donate</h2>
        
        <div class="card" style="padding: 1.5rem; text-align: center;">
             <div style="width: 80px; height: 80px; background: #E8F5E9; border-radius: 50%; color: #2E7D32; font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem auto;">
                ♥
             </div>
             <h3 style="margin-bottom: 0.5rem; color: var(--primary-color);">Support Our Seva</h3>
             <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">Your generous contributions help us maintain the ashram and support our charitable activities.</p>
             
             <div style="background: #F5F5F5; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                 <p style="font-weight: bold; color: #333;">Bank Transfer Details</p>
                 <p style="font-size: 0.9rem; margin-top: 0.5rem;">Account Name: Saibisa Trust</p>
                 <p style="font-size: 0.9rem;">Account Number: 1234567890</p>
                 <p style="font-size: 0.9rem;">IFSC Code: SBIN0001234</p>
             </div>
             
             <button class="btn-primary" style="width: 100%; padding: 0.8rem;">Donate Online (Coming Soon)</button>
        </div>
      </div>
    `;
    }
};
