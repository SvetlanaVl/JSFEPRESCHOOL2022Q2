console.log('Score: 110/100\nВёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css + 12\nИнтерактивность, реализуемая через css +20');

(function () {
  const burgerItem = document.querySelector('.hamburger');
  const menu = document.querySelector('.burger-menu');
  const menuCloseItem = document.querySelector('.hamburger-close');
  const menuLinks = document.querySelectorAll('.link');
  const screenDimming = document.querySelector('.hamburger-screen-dimming');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('burger-menu-active');
    screenDimming.classList.add('hamburger-screen-dimming-active');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('burger-menu-active');
    screenDimming.classList.remove('hamburger-screen-dimming-active');
  });
  screenDimming.addEventListener('click', () => {
    menu.classList.remove('burger-menu-active');
    screenDimming.classList.remove('hamburger-screen-dimming-active');
  });
  if (window.innerWidth < 391) {
    for (let i = 0; i < menuLinks.length; i += 1) {
      menuLinks[i].addEventListener('click', () => {
        menu.classList.remove('burger-menu-active');
        screenDimming.classList.remove('hamburger-screen-dimming-active');
      });
    }
  }

}());