// whatsapp-widget.js
(function() {
  const link = 'https://wa.me/556730297847?text=Olá, vim pelo site!';

  const btn = document.createElement('a');
  btn.className = 'whatsapp-floating';
  btn.href = link;
  btn.target = '_blank';
  btn.rel = 'noopener noreferrer';
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <path fill="white" d="M16.02 4C9.4 4 4.02 9.28 4.02 15.77c0 2.08.57 4.12 1.64 5.9L4 28l6.53-1.6a12.2 12.2 0 0 0 5.49 1.3c6.62 0 12-5.28 12-11.77S22.64 4 16.02 4Zm0 21.58a10.04 10.04 0 0 1-5.02-1.35l-.36-.2-3.88.95 1-3.74-.24-.38a9.47 9.47 0 0 1-1.44-5.09c0-5.32 4.46-9.65 9.94-9.65s9.94 4.33 9.94 9.65-4.46 9.81-9.94 9.81Z"/>
      <path fill="white" d="M21.45 18.65c-.3-.15-1.76-.86-2.03-.95-.27-.1-.47-.15-.67.15-.2.29-.76.95-.94 1.14-.17.2-.35.22-.64.07-.3-.14-1.25-.45-2.38-1.43-.88-.77-1.47-1.72-1.65-2.01-.17-.29-.02-.45.13-.59.14-.14.3-.35.45-.52.15-.17.2-.29.3-.49.1-.19.05-.37-.02-.51-.08-.15-.67-1.58-.92-2.16-.24-.56-.49-.49-.67-.5h-.57c-.2 0-.52.07-.79.36-.27.29-1.04 1-1.04 2.43s1.07 2.82 1.22 3.01c.15.2 2.1 3.14 5.1 4.4.71.3 1.27.48 1.7.62.71.22 1.36.19 1.87.11.57-.08 1.76-.7 2.01-1.38.25-.68.25-1.26.17-1.38-.07-.12-.27-.19-.57-.34Z"/>
    </svg>
  `;

  Object.assign(btn.style, {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '56px',
    height: '56px',
    backgroundColor: '#25D366',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    zIndex: '9999',
    transition: 'transform 0.2s ease, opacity 0.2s ease, visibility 0.2s ease',
    cursor: 'pointer',
  });

  const syncMenuVisibility = () => {
    btn.classList.toggle('is-hidden-by-menu', document.body.classList.contains('menu-open'));
  };

  const observer = new MutationObserver(syncMenuVisibility);
  observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  syncMenuVisibility();

  btn.addEventListener('mouseenter', () => btn.style.transform = 'scale(1.1)');
  btn.addEventListener('mouseleave', () => btn.style.transform = 'scale(1.0)');

  document.body.appendChild(btn);
})();
