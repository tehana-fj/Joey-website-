document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('dark-toggle');
  const body = document.body;
  const savedMode = localStorage.getItem('darkMode');

  if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.removeItem('darkMode');
    }
  });
});