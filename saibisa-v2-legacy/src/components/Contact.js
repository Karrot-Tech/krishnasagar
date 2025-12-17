export const Contact = {
    render: () => {
        return `
      <div style="padding: 1rem;">
        <h2 style="margin-bottom: 1rem; color: var(--primary-color); border-left: 4px solid var(--accent-color); padding-left: 0.5rem;">Contact Us</h2>
        
        <div class="card" style="padding: 1.5rem;">
             <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Get in Touch</h3>
             
             <div class="list-item" style="border:none; padding-left:0; padding-right:0;">
                <div style="margin-right: 1rem; font-size: 1.2rem;">📍</div>
                <div>
                    <h4 style="font-weight: 600;">Address</h4>
                    <p style="color: var(--text-secondary);">Sai Bisa Ashram,<br>Shirdi, Maharashtra, India</p>
                </div>
             </div>
             
             <div class="list-item" style="border:none; padding-left:0; padding-right:0;">
                <div style="margin-right: 1rem; font-size: 1.2rem;">📧</div>
                <div>
                    <h4 style="font-weight: 600;">Email</h4>
                    <p style="color: var(--text-secondary);">info@saibisa.org</p>
                </div>
             </div>
             
             <div class="list-item" style="border:none; padding-left:0; padding-right:0;">
                <div style="margin-right: 1rem; font-size: 1.2rem;">📞</div>
                <div>
                    <h4 style="font-weight: 600;">Phone</h4>
                    <p style="color: var(--text-secondary);">+91 98765 43210</p>
                </div>
             </div>
             
             <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid #eee;">
             
             <h3 style="margin-bottom: 1rem; color: var(--primary-color);">Send us a message</h3>
             <form onsubmit="event.preventDefault(); alert('Message sent!');">
                 <input type="text" placeholder="Your Name" style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px;">
                 <input type="email" placeholder="Your Email" style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px;">
                 <textarea placeholder="Message" rows="4" style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
                 <button type="submit" class="btn-primary">Send Message</button>
             </form>
        </div>
      </div>
    `;
    }
};
