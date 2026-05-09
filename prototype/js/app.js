function render() {
  const route = location.hash.replace('#', '') || 'branches-list';
  const page = Pages[route] || Pages['branches-list'];
  document.getElementById('app').innerHTML = page();
}

window.addEventListener('hashchange', render);
render();
