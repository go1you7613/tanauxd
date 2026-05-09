(function () {
  const icons = {
    dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12l9-9 9 9"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/></svg>',
    loans: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>',
    notices: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>',
    products: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>',
    stats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    members: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    branch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/><path d="M9 9h.01"/><path d="M9 13h.01"/><path d="M9 17h.01"/></svg>',
    recruiter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>',
    system: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82"/><path d="M4.6 9a1.65 1.65 0 0 0-.33-1.82"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    permission: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="11" width="18" height="10" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    admin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/><path d="M18 3v4"/><path d="M20 5h-4"/></svg>',
    logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
    chevron: '<svg class="sidebar__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6"/></svg>',
  };

  const currentFile = location.pathname.split('/').pop() || '00-01_dashboard_hq.html';

  function activeKey() {
    if (currentFile === '00_dashboard.html' || currentFile.startsWith('00-0')) return 'dashboard';
    if (currentFile.startsWith('01-')) return 'loans';
    if (currentFile.startsWith('04-')) return 'notices';
    if (currentFile.startsWith('02-')) return 'products';
    if (currentFile.startsWith('08-')) return 'stats';
    if (currentFile.startsWith('05-')) return 'branches';
    if (currentFile.startsWith('06-')) return 'recruiters';
    if (currentFile === '07-01_system_codes.html') return 'codes';
    if (currentFile === '07-02_system_permissions.html') return 'permissions';
    if (currentFile === '07-05_system_access_logs.html') return 'access';
    if (currentFile === '07-03_system_security.html') return 'security';
    if (currentFile === '07-04_system_admins.html') return 'admins';
    return '';
  }

  function renderSidebar(active) {
    const memberOpen = ['branches', 'recruiters'].includes(active);
    const systemOpen = ['codes', 'permissions', 'access', 'security', 'admins'].includes(active);

    return `<aside class="sidebar">
      <a href="00-01_dashboard_hq.html" class="sidebar__logo" aria-label="DAESINLOAN 대시보드로 이동"><img src="image/logo.png" alt="DAESINLOAN"></a>
      <ul class="sidebar__menu">
        <li class="sidebar__item ${active === 'dashboard' ? 'is-active' : ''}"><a href="00-01_dashboard_hq.html">${icons.dashboard}대시보드</a></li>
        <li class="sidebar__item ${active === 'loans' ? 'is-active' : ''}"><a href="01-01_loans_list.html">${icons.loans}대출진행목록</a></li>
        <li class="sidebar__item ${active === 'notices' ? 'is-active' : ''}"><a href="04-01_notices_list.html">${icons.notices}공지사항</a></li>
        <li class="sidebar__item ${active === 'products' ? 'is-active' : ''}"><a href="02-01_products_list.html">${icons.products}상품관리</a></li>
        <li class="sidebar__item ${active === 'stats' ? 'is-active' : ''}"><a href="08-01_statistics_daily.html">${icons.stats}통계관리</a></li>
        <li class="sidebar__item sidebar__item--group ${memberOpen ? 'is-active is-open' : ''}" data-sidebar-group>
          <button type="button" class="sidebar__group-label" data-sidebar-toggle aria-expanded="${memberOpen ? 'true' : 'false'}">${icons.members}<span>회원관리</span>${icons.chevron}</button>
          <ul class="sidebar__submenu">
            <li class="sidebar__subitem ${active === 'branches' ? 'is-active' : ''}"><a href="05-01_branches_list.html">${icons.branch}지사관리</a></li>
            <li class="sidebar__subitem ${active === 'recruiters' ? 'is-active' : ''}"><a href="06-01_recruiters_list.html">${icons.recruiter}모집인 관리</a></li>
          </ul>
        </li>
        <li class="sidebar__item sidebar__item--group ${systemOpen ? 'is-active is-open' : ''}" data-sidebar-group>
          <button type="button" class="sidebar__group-label" data-sidebar-toggle aria-expanded="${systemOpen ? 'true' : 'false'}">${icons.system}<span>시스템 관리</span>${icons.chevron}</button>
          <ul class="sidebar__submenu">
            <li class="sidebar__subitem ${active === 'codes' ? 'is-active' : ''}"><a href="07-01_system_codes.html">${icons.code}코드관리</a></li>
            <li class="sidebar__subitem ${active === 'permissions' ? 'is-active' : ''}"><a href="07-02_system_permissions.html">${icons.permission}권한관리</a></li>
            <li class="sidebar__subitem ${active === 'access' ? 'is-active' : ''}"><a href="07-05_system_access_logs.html">${icons.access}접속자관리</a></li>
            <li class="sidebar__subitem ${active === 'security' ? 'is-active' : ''}"><a href="07-03_system_security.html">${icons.security}보안관리</a></li>
            <li class="sidebar__subitem ${active === 'admins' ? 'is-active' : ''}"><a href="07-04_system_admins.html">${icons.admin}관리자 관리</a></li>
          </ul>
        </li>
      </ul>
      <div class="sidebar__bottom">
        <a href="00_login.html" class="sidebar__logout">${icons.logout}로그아웃</a>
      </div>
    </aside>`;
  }

  const root = document.getElementById('sidebar-root');
  if (!root) return;

  root.innerHTML = renderSidebar(activeKey());

  root.querySelectorAll('[data-sidebar-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const group = toggle.closest('[data-sidebar-group]');
      if (!group) return;

      const isOpen = group.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });
})();
