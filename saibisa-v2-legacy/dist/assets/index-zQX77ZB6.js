(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(i){if(i.ep)return;i.ep=!0;const o=d(i);fetch(i.href,o)}})();const a={videos:[{id:1,title:"Divine Discourse - Part 1",thumbnail:"https://via.placeholder.com/300x169.png?text=Video+1",url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},{id:2,title:"Sai Baba Bhajans",thumbnail:"https://via.placeholder.com/300x169.png?text=Video+2",url:"https://www.youtube.com/embed/dQw4w9WgXcQ"},{id:3,title:"Morning Prayers",thumbnail:"https://via.placeholder.com/300x169.png?text=Video+3",url:"https://www.youtube.com/embed/dQw4w9WgXcQ"}],liveStreams:[{id:1,title:"Live Darshan from Shirdi",isLive:!0,url:"https://www.youtube.com/embed/live_stream?channel=UC..."}],books:[{id:1,title:"Sri Sai Satcharitra",author:"Hemadpant",cover:"https://via.placeholder.com/150x220.png?text=Sai+Satcharitra",downloadUrl:"#"},{id:2,title:"Di Jaan's Wisdom",author:"Di Jaan",cover:"https://via.placeholder.com/150x220.png?text=Di+Jaan+Book",downloadUrl:"#"}],events:[{id:1,title:"Guru Purnima Celebration",date:"2024-07-21",image:"https://via.placeholder.com/600x300.png?text=Guru+Purnima",content:"Join us for the grand celebration of Guru Purnima. Special prayers and bhajans will be held throughout the day."},{id:2,title:"Evening Aarti",date:"Daily",image:"https://via.placeholder.com/600x300.png?text=Aarti",content:"Experience the divine energy during the daily evening Aarti at 6:00 PM."}]},r={"/":m,"/videos":v,"/darshan":h,"/books":p,"/events":g};"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registered: ",e)}).catch(e=>{console.log("SW registration failed: ",e)})});function n(e){document.querySelector("#app").innerHTML=e,c()}function c(){const e=window.location.pathname;document.querySelectorAll(".nav-link, .nav-item").forEach(t=>{t.classList.toggle("active",t.getAttribute("href")===e)})}function m(){n(`
    <div class="hero-section">
      <div style="text-align:center; padding: 2rem 0;">
          <h1 style="color:var(--primary-color)">Welcome to Saibisa</h1>
          <p style="color:var(--text-secondary)">Your spiritual companion for Sai Baba and Di Jaan.</p>
      </div>
      
      <div class="grid grid-cols-2">
          <div class="card clickable" onclick="window.navigate('/videos')">
              <div style="font-size: 2rem; margin-bottom: 0.5rem">▶️</div>
              <h3>Videos</h3>
              <p style="font-size: 0.9rem">Di-Jaan Channel</p>
          </div>
           <div class="card clickable" onclick="window.navigate('/darshan')">
              <div style="font-size: 2rem; margin-bottom: 0.5rem">🔴</div>
              <h3>Live</h3>
              <p style="font-size: 0.9rem">Live Darshan</p>
          </div>
          <div class="card clickable" onclick="window.navigate('/books')">
              <div style="font-size: 2rem; margin-bottom: 0.5rem">📚</div>
              <h3>Books</h3>
              <p style="font-size: 0.9rem">Read & Download</p>
          </div>
          <div class="card clickable" onclick="window.navigate('/events')">
              <div style="font-size: 2rem; margin-bottom: 0.5rem">📅</div>
              <h3>Events</h3>
              <p style="font-size: 0.9rem">Upcoming</p>
          </div>
      </div>
    </div>
  `)}function v(){const e=a.videos.map(t=>`
    <div class="card" style="padding:0; overflow:hidden">
      <div style="position:relative; padding-top:56.25%;">
         <iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:0" 
                 src="${t.url}" allowfullscreen></iframe>
      </div>
      <div style="padding: 1rem;">
          <h3 style="font-size: 1.1rem">${t.title}</h3>
      </div>
    </div>
  `).join("");n(`
    <h2 style="margin-bottom:1rem">Di-Jaan Videos</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        ${e}
    </div>
  `)}function h(){const e=a.liveStreams[0];n(`
        <h2 style="margin-bottom:1rem">Live Darshan</h2>
        <div class="card" style="padding:0; overflow:hidden">
             <div style="position:relative; padding-top:56.25%;">
                 <iframe style="position:absolute; top:0; left:0; width:100%; height:100%; border:0" 
                         src="${e.url}" allowfullscreen></iframe>
             </div>
             <div style="padding: 1rem;">
                  <h3 style="color: red">🔴 LIVE NOW</h3>
                  <p>${e.title}</p>
             </div>
        </div>
    `)}function p(){const e=a.books.map(t=>`
        <div class="card" style="display:flex; gap: 1rem; align-items: center;">
            <img src="${t.cover}" alt="${t.title}" style="width: 80px; height: 110px; object-fit: cover; border-radius: 4px;">
            <div>
                <h3 style="font-size: 1.2rem">${t.title}</h3>
                <p style="color: var(--text-secondary); margin-bottom: 0.5rem">${t.author}</p>
                <a href="${t.downloadUrl}" class="btn" style="font-size: 0.8rem; padding: 0.5rem 1rem;">Download PDF</a>
            </div>
        </div>
    `).join("");n(`
        <h2 style="margin-bottom:1rem">Books Library</h2>
        <div class="grid grid-cols-1 md:grid-cols-2">
            ${e}
        </div>
    `)}function g(){const e=a.events.map(t=>`
        <div class="card" style="padding:0; overflow:hidden;">
            <img src="${t.image}" alt="${t.title}" style="width: 100%; height: 200px; object-fit: cover;">
            <div style="padding: 1.5rem;">
                <div style="color: var(--primary-color); font-weight: 700; margin-bottom: 0.5rem">${t.date}</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem">${t.title}</h3>
                <p style="color: var(--text-secondary)">${t.content}</p>
            </div>
        </div>
    `).join("");n(`
        <h2 style="margin-bottom:1rem">Community Events</h2>
        <div class="grid grid-cols-1">
            ${e}
        </div>
    `)}window.navigate=function(e){window.history.pushState({},e,window.location.origin+e),(r[e]||r["/"])()};document.addEventListener("click",e=>{const t=e.target.closest("[data-link]");if(t){e.preventDefault();const d=t.getAttribute("href");window.navigate(d)}});window.addEventListener("popstate",()=>{(r[window.location.pathname]||r["/"])()});const u=r[window.location.pathname]||r["/"];u();
