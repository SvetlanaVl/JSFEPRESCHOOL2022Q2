console.log('Score: 85/85\nВёрстка соответствует макету. Ширина экрана 390px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22');

/*menu hamburger*/

(function () {
  const burgerItem = document.querySelector('.hamburger');
  const menu = document.querySelector('.burger-menu');
  const menuCloseItem = document.querySelector('.hamburger-close');
  const screenDimming = document.querySelector('.hamburger-screen-dimming');
  const burgerLinks = document.querySelectorAll('.burger-link');
  
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

  for (let i = 0; i < burgerLinks.length; i += 1) {
    burgerLinks[i].addEventListener('click', () => {
      menu.classList.remove('burger-menu-active');
      screenDimming.classList.remove('hamburger-screen-dimming-active');
    });
  }

}());

/*pop up*/

(function () {
  const buttonMobile = document.querySelector('.account');
  const button = document.querySelector('.button-header');
  const popupDimming = document.querySelector('.popup-screen-dimming');
  const popupSign = document.querySelector('.popup-sign');
  const buttonRegister = document.querySelector('.popup-link-register');
  const buttonForm = document.querySelector('.button-popup-form');
  const email = document.querySelector('.popup-form-input-email');
  const password = document.querySelector('.popup-form-input-password');
  const heading = document.querySelector('.popup-heading');
  const register = document.querySelector('.register');
  const buttonFacebook = document.querySelector('.button-popup-facebook');
  const buttonGoogle = document.querySelector('.button-popup-google');
  const popupLineOr = document.querySelector('.popup-line-or');
  const forgotPassword = document.querySelector('.popup-forgot-your-password');
  const registerLogin = document.querySelector('.register-login');
  const buttonLogin = document.querySelector('.popup-link-log');
  const popupHeight = document.querySelector('.popup-heading');
  
  /*pop up open-close*/

  buttonMobile.addEventListener('click', () => {
    popupDimming.classList.add('popup-screen-dimming-active');
    popupSign.classList.add('popup-sign-active');
    document.body.style.overflow = 'hidden';
  });
  button.addEventListener('click', () => {
    popupDimming.classList.add('popup-screen-dimming-active');
    popupSign.classList.add('popup-sign-active');
    document.body.style.overflow = 'hidden';
  });
  popupDimming.addEventListener('click', () => {
    popupDimming.classList.remove('popup-screen-dimming-active');
    popupSign.classList.remove('popup-sign-active');
    document.body.style.overflow = '';
  });
  
  /*alert*/

  buttonForm.addEventListener('click', () => {
    alert('E-mail: ' + email.value + '\n' + 'Password: ' + password.value)
  });

  /*sign up*/

  buttonRegister.addEventListener('click', () => {
    buttonFacebook.classList.add('hidden');
    buttonGoogle.classList.add('hidden');
    popupLineOr.classList.add('hidden');
    forgotPassword.classList.add('hidden');
    popupSign.classList.add('popup-height');
    register.classList.add('hidden');
    registerLogin.classList.remove('hidden');
  });
  buttonLogin.addEventListener('click', () => {
    buttonFacebook.classList.remove('hidden');
    buttonGoogle.classList.remove('hidden');
    popupLineOr.classList.remove('hidden');
    forgotPassword.classList.remove('hidden');
    popupSign.classList.remove('popup-height');
    register.classList.remove('hidden');
    registerLogin.classList.add('hidden');
  });

  buttonRegister.addEventListener('click', () => {
    buttonForm.innerHTML = 'Sign Up';
    heading.innerHTML = 'Create account';
  });
  buttonLogin.addEventListener('click', () => {
    buttonForm.innerHTML = 'Sign In';
    heading.innerHTML = 'Log in to your account';
  });

}());

/*destinations slider*/

(function () {
  const images = document.querySelectorAll('.slider-position');
  const imageUsa = document.querySelector('.slider-position4');
  const imageSpain = document.querySelector('.slider-position2');
  const imageJapan = document.querySelector('.slider-position3');
  const inputJapan = document.querySelector('.destinations-input-japan');
  const inputSpain = document.querySelector('.destinations-input-spain');
  const inputUsa = document.querySelector('.destinations-input-usa');
  
  
  imageUsa.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.add('destinations-slider-position');
      images[i].classList.remove('destinations-slider-position-right');
    }
    inputUsa.style.background = '#F2785C';
    inputJapan.style.background = 'rgba(242, 120, 92, 0.5)';
    inputSpain.style.background = 'rgba(242, 120, 92, 0.5)';
  });

  imageSpain.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.add('destinations-slider-position-right');
      images[i].classList.remove('destinations-slider-position');
    }
    inputUsa.style.background = 'rgba(242, 120, 92, 0.5)';
    inputJapan.style.background = 'rgba(242, 120, 92, 0.5)';
    inputSpain.style.background = '#F2785C';
  });

  imageJapan.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.remove('destinations-slider-position-right');
      images[i].classList.remove('destinations-slider-position');
    }
    inputUsa.style.background = 'rgba(242, 120, 92, 0.5)';
    inputJapan.style.background = '#F2785C';
    inputSpain.style.background = 'rgba(242, 120, 92, 0.5)';
  });

  inputUsa.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.add('destinations-slider-position');
      images[i].classList.remove('destinations-slider-position-right');
    }
    inputUsa.style.background = '#F2785C';
    inputJapan.style.background = 'rgba(242, 120, 92, 0.5)';
    inputSpain.style.background = 'rgba(242, 120, 92, 0.5)';
  });

  inputSpain.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.add('destinations-slider-position-right');
      images[i].classList.remove('destinations-slider-position');
    }
    inputUsa.style.background = 'rgba(242, 120, 92, 0.5)';
    inputJapan.style.background = 'rgba(242, 120, 92, 0.5)';
    inputSpain.style.background = '#F2785C';
  });

  inputJapan.addEventListener('click', () => {
    for (let i = 0; i < images.length; i += 1) {
      images[i].classList.remove('destinations-slider-position-right');
      images[i].classList.remove('destinations-slider-position');
    }
    inputUsa.style.background = 'rgba(242, 120, 92, 0.5)';
    inputJapan.style.background = '#F2785C';
    inputSpain.style.background = 'rgba(242, 120, 92, 0.5)';
  });
}());

