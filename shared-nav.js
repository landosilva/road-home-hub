// Shared navigation header — injected by all pages.
// Edit this file to change the header everywhere.
(function() {
  const currentPage = location.pathname.split('/').pop() || 'index.html';

  const pages = [
    { href: 'gdd.html', label: 'GDD', icon: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>' },
    { href: 'screen-flow.html', label: 'Screen Flow', icon: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"/><path d="M4 9h16M9 4v16"/></svg>' },
    { href: 'contact.html', label: 'Contact', icon: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.5-9.75-6.5"/></svg>' },
    { href: null, label: 'Demo', locked: true, icon: '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/></svg>' }
  ];

  const tabs = pages.map((p, i) => {
    const sep = i > 0 ? '<span class="nav-sep">·</span>' : '';
    if (p.locked) return sep + `<span class="nav-tab-locked">${p.icon} ${p.label}</span>`;
    const active = currentPage === p.href ? ' class="active"' : '';
    return sep + `<a href="${p.href}"${active}>${p.icon} ${p.label}</a>`;
  }).join('');

  const header = document.createElement('div');
  header.className = 'nav-header';
  header.innerHTML = `
    <a class="nav-header-title" href="index.html">Road Home</a>
    <div class="nav-header-tabs">${tabs}</div>
  `;

  document.body.insertBefore(header, document.body.firstChild);
})();
