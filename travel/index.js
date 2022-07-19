console.log('Score: 85/85\nВёрстка соответствует макету. Ширина экрана 390px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\nНа ширине экрана 390рх и меньше реализовано адаптивное меню +22');

/*menu hamburger*/

(function () {
  const burgerItem = document.querySelector('.hamburger');
  const menu = document.querySelector('.burger-menu');
  const menuCloseItem = document.querySelector('.hamburger-close');
  const menuLinks = document.querySelectorAll('.link');
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
  const button = document.querySelector('.account');
  const popupDimming = document.querySelector('.popup-screen-dimming');
  const popupSign = document.querySelector('.popup-sign');
  const buttonRegister = document.querySelector('.popup-link-register');
  const buttonForm = document.querySelector('.button-popup-form');
  const email = document.querySelector('.popup-form-input-email');
  const password = document.querySelector('.popup-form-input-password');
  const heading = document.querySelector('.heading-popup');
  const register = document.querySelector('.register');
  const buttonFacebook = document.querySelector('.button-popup-facebook');
  const buttonGoogle = document.querySelector('.button-popup-google');
  const popupLineOr = document.querySelector('.popup-line-or');
  const forgotPassword = document.querySelector('.popup-forgot-your-password');
  

  /*pop up open-close*/

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
    buttonForm.innerHTML = 'Sign Up';
    heading.innerHTML = 'Create account';
    register.innerHTML = 'Already have an account? <a href="#" class="popup-link popup-link-login">Log in</a>';
    buttonFacebook.style.display = 'none';
    buttonGoogle.style.display = 'none';
    popupLineOr.style.display = 'none';
    forgotPassword.style.display = 'none';
    popupSign.style.height = '436px';
  });

  

}());



