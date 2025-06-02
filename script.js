document.addEventListener('DOMContentLoaded', () => {
  console.log("Joey's site loaded with super powers ⚡");

  const toggle = document.getElementById('dark-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
});
