'use strict';

const header = document.querySelector('.site-header');

if (header) {
  const onScroll = () => {
    header.style.borderBottom = window.scrollY > 8
      ? '1px solid rgba(255, 255, 255, 0.08)'
      : '1px solid transparent';
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const id = anchor.getAttribute('href');
    if (!id || id === '#') return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
