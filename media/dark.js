function initDarkMode() {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeToggleMobile = document.getElementById('darkModeToggleMobile');
  const htmlElement = document.documentElement;
  
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
  } else {
    htmlElement.classList.add('dark');
  }
  
  function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    const isDark = htmlElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  
  if (darkModeToggleMobile) {
    darkModeToggleMobile.addEventListener('click', toggleDarkMode);
  }
  
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'd') {
      e.preventDefault();
      toggleDarkMode();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
});
