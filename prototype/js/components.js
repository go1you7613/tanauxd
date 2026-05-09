const Icons = {
  menu: '<span aria-hidden="true">☰</span>',
  notice: '<span aria-hidden="true">▣</span>',
  product: '<span aria-hidden="true">◇</span>',
  chart: '<span aria-hidden="true">▥</span>',
  user: '<span aria-hidden="true">♙</span>',
  building: '<span aria-hidden="true">⌂</span>',
  system: '<span aria-hidden="true">⚙</span>',
  logout: '<span aria-hidden="true">↪</span>'
};

const Menu = [
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

    return `<li class="sidebar__group ${hasActiveChild ? 'is-active' : ''}">
      <div class="sidebar__group-label">${item.icon}${item.label}</div>
      <ul class="sidebar__submenu">
        ${item.children.map(child => `<li><a class="${child.id === activeId ? 'is-active' : ''}" href="#${child.id}">${child.icon || ''}${child.label}</a></li>`).join('')}
      </ul>
    </li>`;
  }).join('');

  return `<aside class="sidebar">
    <div class="sidebar__logo">DAESINLOAN.</div>
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
