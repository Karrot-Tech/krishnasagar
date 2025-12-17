export const Home = {
    render: () => {
        return `
      <div class="hero-section">
         <h2 style="font-family:'Satisfy', cursive; font-size:1.8rem; margin-bottom: 0.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">It's all about Shraddha or Saburi</h2>
         <p style="font-style: italic; font-size: 1.1rem; opacity: 0.9;">"Spread Smiles... Light Up Lives"</p>
         <p style="font-size: 0.9rem; margin-top: 0.5rem; opacity: 0.8;">- Di Jaan Jaya Wahi</p>
      </div>
      
      <div class="card message-card" style="padding: 2rem; position: relative; margin-top: -3rem; margin-left:1rem; margin-right:1rem; z-index: 10;">
           <div style="width: 60px; height: 60px; background: var(--accent-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; position: absolute; top: -30px; left: 50%; transform: translateX(-50%); border: 3px solid white; box-shadow: var(--shadow-sm);">
              <span style="font-size:1.5rem">🕉️</span>
           </div>
           <h3 style="color: var(--primary-color); margin-top: 1rem; margin-bottom: 1rem; text-align: center;">Baba's Messages through Di Jaan...</h3>
           <p style="color: var(--text-secondary); font-style: italic; text-align: center; line-height: 1.8;">
              "Child !! Instead of burning in flames, start riding on fire. The nature of fire is to burn... but to set yourself ablaze in the flames, or to use the same flame to light up darkness... that choice shall always be yours !!"
           </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: 1rem;">
         <div class="card" onclick="window.navigate('/videos')" style="padding: 1.5rem; text-align: center; cursor: pointer;">
             <div style="font-size: 2rem; margin-bottom: 0.5rem;">▶️</div>
             <h3 style="font-size: 1rem; color: var(--primary-color);">Latest Videos</h3>
         </div>
         <div class="card" onclick="window.navigate('/darshan')" style="padding: 1.5rem; text-align: center; cursor: pointer;">
             <div style="font-size: 2rem; margin-bottom: 0.5rem;">🔴</div>
             <h3 style="font-size: 1rem; color: var(--primary-color);">Live Darshan</h3>
         </div>
      </div>
    `;
    }
};
