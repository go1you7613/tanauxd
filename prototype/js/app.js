function render() {
  const route = location.hash.replace('#', '') || 'dashboard';
  const page = Pages[route] || Pages.dashboard;
  document.getElementById('app').innerHTML = page();

  document.querySelectorAll('[data-sidebar-toggle]').forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const group = toggle.closest('[data-sidebar-group]');
      const isOpen = group.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  });

  bindDashboardSummary();
  bindAttachmentDownloads();
}

const SummaryData = {
  hq: {
    total: { amount: '88,400만원', approved: '214건', rate: '12.1%', registered: '1,768건', received: '132건' },
    year: { amount: '35,800만원', approved: '91건', rate: '12.3%', registered: '739건', received: '48건' }
  },
  branch: {
    total: { amount: '12,600만원', approved: '28건', rate: '9.8%', registered: '312건', received: '63건' },
    year: { amount: '5,000만원', approved: '9건', rate: '9.5%', registered: '95건', received: '19건' }
  }
};

function bindDashboardSummary() {
  document.querySelectorAll('[data-dashboard-summary]').forEach((card) => {
    const role = card.dataset.dashboardSummary || 'hq';
    const applyMode = (mode) => {
      const values = SummaryData[role]?.[mode];
      if (!values) return;

      Object.entries(values).forEach(([key, value]) => {
        const target = card.querySelector(`[data-summary-field="${key}"]`);
        if (target) target.textContent = value;
      });

      card.querySelectorAll('[data-summary-mode]').forEach((button) => {
        const isActive = button.dataset.summaryMode === mode;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', String(isActive));
      });
    };

    card.querySelectorAll('[data-summary-mode]').forEach((button) => {
      button.addEventListener('click', () => applyMode(button.dataset.summaryMode));
    });
  });
}

function bindAttachmentDownloads() {
  document.querySelectorAll('[data-download-file]').forEach((button) => {
    button.addEventListener('click', () => {
      const fileName = button.dataset.downloadFile || 'attachment.txt';
      const blob = new Blob([`DAESINLOAN prototype attachment: ${fileName}`], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    });
  });
}

window.addEventListener('hashchange', render);
render();
