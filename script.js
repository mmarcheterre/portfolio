// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  navbar.style.boxShadow = window.scrollY > 50
    ? '0 4px 20px rgba(0,0,0,0.3)'
    : '0 2px 12px rgba(0,0,0,0.15)';
});

// Animated stat counters
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

// Fade-in on scroll
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .timeline-item, .skill-category, .service-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  fadeObserver.observe(el);
});

// -------------------------------------------------------
// TECH BANNER — défilement fluide via requestAnimationFrame
// Principe : on duplique les items, on défile jusqu'à la
// moitié exacte (en px), puis on remet à 0 sans saut.
// -------------------------------------------------------
(function initTechBanner() {
  const track = document.querySelector('.tech-track');
  if (!track) return;

  // Supprimer les doublons HTML existants (on gère tout en JS)
  const originalItems = Array.from(track.children);
  const half = originalItems.length / 2;
  // Garder seulement le premier set si déjà doublé dans le HTML
  const items = originalItems.slice(0, half > 0 ? half : originalItems.length);
  track.innerHTML = '';
  items.forEach(el => track.appendChild(el));

  // Cloner pour boucle infinie
  items.forEach(el => track.appendChild(el.cloneNode(true)));

  // Attendre que le layout soit calculé
  requestAnimationFrame(() => {
    const singleSetWidth = track.scrollWidth / 2; // largeur exacte d'un set
    let offset = 0;
    const speed = 0.5; // px par frame (~30s pour traverser)
    let paused = false;

    // Pause au survol
    track.addEventListener('mouseenter', () => { paused = true; });
    track.addEventListener('mouseleave', () => { paused = false; });

    function tick() {
      if (!paused) {
        offset += speed;
        if (offset >= singleSetWidth) {
          offset -= singleSetWidth; // reset invisible
        }
        track.style.transform = `translateX(-${offset}px)`;
      }
      requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
})();
