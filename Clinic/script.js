window.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.getElementById('hero-title');
    setInterval(() => {
      heroTitle.style.color = heroTitle.style.color === 'white' ? 'lightblue' : 'white';
    }, 1000);
  });
  