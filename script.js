document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle + auto-close on link click
  const openBtn  = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const overlay  = document.getElementById('nav-overlay');
  const links    = document.querySelectorAll('.nav-link');

  openBtn.addEventListener('click', () => {
    overlay.classList.add('open');
    openBtn.style.display  = 'none';
    closeBtn.style.display = 'block';
  });
  closeBtn.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));

  function closeMenu(){
    overlay.classList.remove('open');
    closeBtn.style.display = 'none';
    openBtn.style.display  = 'block';
  }

  // Project filtering
  const filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
  const items      = Array.from(document.querySelectorAll('.grid-item'));

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // toggle active class
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.filter;
      items.forEach(item => {
        const itemCat = item.dataset.category;
        if (category === 'all' || itemCat === category) {
          item.style.display = '';      // reset to default
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Modal functionality
  const modal      = document.getElementById('project-modal');
  const closeModal = document.getElementById('modal-close');
  const titleEl    = document.getElementById('modal-title');
  const descEl     = document.getElementById('modal-desc');
  const carouselEl = document.getElementById('modal-carousel');
  const downloadEl = document.getElementById('modal-download');

  items.forEach(item => {
    item.addEventListener('click', () => {
      titleEl.innerText    = item.dataset.title;
      descEl.innerText     = item.dataset.desc;
      downloadEl.href      = item.dataset.download;

      // Build carousel
      carouselEl.innerHTML = '';
      JSON.parse(item.dataset.media).forEach(src => {
        if (src.endsWith('.mp4')) {
          const vid = document.createElement('video');
          vid.src = src;
          vid.controls = true;
          carouselEl.appendChild(vid);
        } else {
          const img = document.createElement('img');
          img.src = src;
          img.alt = item.dataset.title;
          carouselEl.appendChild(img);
        }
      });

      modal.style.display = 'flex';
    });
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
});
