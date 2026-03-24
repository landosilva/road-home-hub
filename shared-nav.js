// Shared navigation header — injected by all pages.
// Edit this file to change the header everywhere.
(function() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'gdd.html', label: 'GDD' },
    { href: 'screen-flow.html', label: 'Screen Flow' },
    { href: 'contact.html', label: 'Contact' },
    { href: null, label: 'Demo 🔒', locked: true }
  ];

  const tabs = pages.map((p, i) => {
    const sep = i > 0 ? '<span class="nav-sep">·</span>' : '';
    if (p.locked) return sep + `<span class="nav-tab-locked">${p.label}</span>`;
    const active = currentPage === p.href ? ' class="active"' : '';
    return sep + `<a href="${p.href}"${active}>${p.label}</a>`;
  }).join('');

  const header = document.createElement('div');
  header.className = 'nav-header';
  header.innerHTML = `
    <a class="nav-header-title" href="index.html">Road Home</a>
    <div class="nav-header-tabs">${tabs}</div>
  `;

  document.body.insertBefore(header, document.body.firstChild);
})();
