const LogoSrc = 'data:image/png;base64,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';

const Icons = {
  dashboard: '<span aria-hidden="true">⌂</span>',
  menu: '<span aria-hidden="true">☰</span>',
  notice: '<span aria-hidden="true">▣</span>',
  product: '<span aria-hidden="true">◇</span>',
  chart: '<span aria-hidden="true">▥</span>',
  user: '<span aria-hidden="true">♙</span>',
  building: '<span aria-hidden="true">⌂</span>',
  system: '<span aria-hidden="true">⚙</span>',
  logout: '<span aria-hidden="true">↪</span>',
  chevron: '<span class="sidebar__chevron" aria-hidden="true">⌄</span>'
};

const Menu = [
  { id: 'dashboard', label: '대시보드', icon: Icons.dashboard },
  { id: 'loans', label: '대출진행목록', icon: Icons.menu },
  { id: 'notices', label: '공지사항', icon: Icons.notice },
  { id: 'products', label: '상품관리', icon: Icons.product },
  { id: 'statistics', label: '통계관리', icon: Icons.chart },
  {
    id: 'members',
    label: '회원관리',
    icon: Icons.user,
    children: [
      { id: 'branches-list', label: '지사관리', icon: Icons.building },
      { id: 'recruiters-list', label: '모집인 관리', icon: Icons.user }
    ]
  },
  {
    id: 'system',
    label: '시스템 관리',
    icon: Icons.system,
    children: [
      { id: 'codes', label: '코드관리' },
      { id: 'permissions', label: '권한관리' },
      { id: 'access', label: '접속자관리' },
      { id: 'security', label: '보안관리' },
      { id: 'admins', label: '관리자 관리' }
    ]
  }
];

function sidebar(activeId) {
  const items = Menu.map(item => {
    const hasActiveChild = item.children?.some(child => child.id === activeId);
    if (!item.children) {
      return `<li><a class="sidebar__link ${item.id === activeId ? 'is-active' : ''}" href="#${item.id}">${item.icon}${item.label}</a></li>`;
    }

    return `<li class="sidebar__group ${hasActiveChild ? 'is-active is-open' : ''}" data-sidebar-group>
      <button type="button" class="sidebar__group-label" data-sidebar-toggle aria-expanded="${hasActiveChild ? 'true' : 'false'}">${item.icon}<span>${item.label}</span>${Icons.chevron}</button>
      <ul class="sidebar__submenu">
        ${item.children.map(child => `<li><a class="${child.id === activeId ? 'is-active' : ''}" href="#${child.id}">${child.icon || ''}${child.label}</a></li>`).join('')}
      </ul>
    </li>`;
  }).join('');

  return `<aside class="sidebar">
    <a class="sidebar__logo" href="#dashboard" aria-label="DAESINLOAN 대시보드로 이동"><img src="${LogoSrc}" alt="DAESINLOAN"></a>
    <ul class="sidebar__menu">${items}</ul>
    <div class="sidebar__bottom"><a class="sidebar__logout" href="#login">${Icons.logout}로그아웃</a></div>
  </aside>`;
}

function layout({ activeId, title, actions = '', body }) {
  return `<div class="app-layout">
    ${sidebar(activeId)}
    <main>
      <header class="page-header">
        <h1>${title}</h1>
        <div>${actions}</div>
      </header>
      <section class="page-body">${body}</section>
    </main>
  </div>`;
}

function field(label, control) {
  return `<div class="field"><label>${label}</label>${control}</div>`;
}

function input({ id = '', value = '', type = 'text', placeholder = '' } = {}) {
  return `<input id="${id}" class="input" type="${type}" value="${value}" placeholder="${placeholder}">`;
}

function select(options, selected) {
  return `<select class="select">${options.map(option => `<option ${option === selected ? 'selected' : ''}>${option}</option>`).join('')}</select>`;
}

function button(label, variant = '') {
  return `<button type="button" class="btn ${variant}">${label}</button>`;
}

function table(headers, rows) {
  return `<div class="panel"><table class="table">
    <thead><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr></thead>
    <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

function formGrid(rows) {
  return `<div class="panel"><table class="form-grid"><tbody>
    ${rows.map(([label, control]) => `<tr><th>${label}</th><td>${control}</td></tr>`).join('')}
  </tbody></table></div>`;
}
