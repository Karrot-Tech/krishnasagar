import '../style.css';
import { Home } from './components/Home.js';
import { Videos } from './components/Videos.js';
import { Darshan } from './components/Darshan.js';
import { Books } from './components/Books.js';
import { Events } from './components/Events.js';
import { MusicView } from './components/MusicView.js';
import { Donate } from './components/Donate.js';
import { Contact } from './components/Contact.js';
import { Seva } from './components/Seva.js';
import { SevaDetails } from './components/SevaDetails.js';
import { AudioService } from './services/AudioService.js';

const routes = {
  '/': Home,
  '/videos': Videos,
  '/darshan': Darshan,
  '/books': Books,
  '/events': Events,
  '/music': MusicView,
  '/donate': Donate,
  '/contact': Contact,
  '/seva': Seva
};

// --- Router ---
async function router() {
  const path = window.location.pathname;
  let component = routes[path];
  let params = {};

  // Simple Dynamic Matching
  if (!component) {
    if (path.startsWith('/seva/')) {
      const id = path.split('/')[2];
      if (id) {
        component = SevaDetails;
        params = { id };
      }
    }
  }

  // Fallback
  if (!component) {
    component = routes['/'];
  }

  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    mainContent.innerHTML = component.render(params);

    // Update Active class
    updateNav(path);

    if (component.afterRender) {
      component.afterRender();
    }

    window.scrollTo(0, 0);
  }
}

function updateNav(path) {
  // If dynamic path, highlight parent
  let activePath = path;
  if (path.startsWith('/seva/')) activePath = '/seva';

  document.querySelectorAll('.nav-item').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === activePath);
  });

  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === activePath);
  });
}


window.navigate = function (path) {
  window.history.pushState({}, path, window.location.origin + path);
  router();
};

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', () => {
  router();
  setupSidebar();
  setupPlayer();
});

document.addEventListener('click', e => {
  const link = e.target.closest('[data-link]');
  if (link) {
    e.preventDefault();
    window.navigate(link.getAttribute('href'));
  }
});


// --- Sidebar ---
function setupSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  const menuBtn = document.getElementById('menu-btn');

  if (!sidebar || !overlay || !menuBtn) return;

  function toggle() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  menuBtn.addEventListener('click', toggle);
  overlay.addEventListener('click', toggle);

  sidebar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) toggle();
    });
  });
}


// --- Player ---
function setupPlayer() {
  const playerFooter = document.getElementById('player-footer');
  const titleEl = document.getElementById('player-title');
  const artistEl = document.getElementById('player-artist');
  const playPauseBtn = document.getElementById('play-pause-btn');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  const audioService = AudioService.getInstance();

  playPauseBtn.addEventListener('click', () => audioService.toggle());
  prevBtn.addEventListener('click', () => audioService.prev());
  nextBtn.addEventListener('click', () => audioService.next());

  document.addEventListener('track-change', (e) => {
    const track = e.detail;
    if (track) {
      playerFooter.classList.add('active');
      titleEl.textContent = track.title;
      artistEl.textContent = track.singer;
      playPauseBtn.textContent = '⏸';
    }
  });

  document.addEventListener('player-state', (e) => {
    const { isPlaying } = e.detail;
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
  });
}
