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
  
  darkModeToggle.addEventListener('click', toggleDarkMode);
  darkModeToggleMobile.addEventListener('click', toggleDarkMode);
}

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
});
