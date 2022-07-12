console.log('Score: 85/85\nВёрстка соответствует макету. Ширина экрана 390px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22');

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