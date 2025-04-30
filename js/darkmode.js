document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark');
  const body = document.body;

  // Lấy từ localStorage hoặc dùng class từ config mặc định
  const saved = localStorage.getItem('theme');
  if (saved) {
    body.classList.remove('light', 'dark');
    body.classList.add(saved);
  }

  toggle.addEventListener('click', () => {
    const isDark = body.classList.contains('dark');
    body.classList.toggle('dark', !isDark);
    body.classList.toggle('light', isDark);
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  });
});
