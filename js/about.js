function updateBackgroundImage() {
    const hero = document.getElementById('hero');
    if (window.innerWidth <= 768) {
      hero.style.backgroundImage = "url('images/hero_mobile.jpg')";
    } else {
      hero.style.backgroundImage = "url('images/hero_1.jpg')";
    }
  }
  
  // Executa ao carregar a página e ao redimensionar
  window.addEventListener('load', updateBackgroundImage);
  window.addEventListener('resize', updateBackgroundImage);
  