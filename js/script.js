    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('overlay');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      overlay.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('hidden');
    });

  document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 800,
      once: true
    });
  });



  const fmt = new Intl.NumberFormat('pt-BR');

  function animateValue(el, to, duration = 1500) {
    const start = 0;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(start + (to - start) * progress);
      el.textContent = fmt.format(value);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        animateValue(el, target);
        obs.unobserve(el); 
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.countup').forEach(el => observer.observe(el));

  lucide.createIcons();