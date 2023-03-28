const themeKey = 'selectedTheme';
const refs = {
  themeSwitcherEl: document.querySelector('#theme'),
  bodyEl: document.body,
  switcherLightEl: document.querySelector('.switcher__text-light'),
  switcherDarkEl: document.querySelector('.switcher__text-dark'),
  linksEl: document.querySelectorAll('.nav__link'),
  logoEl: document.querySelector('.header__logo'),
  searchInputEl: document.querySelector('.search-form__input'),
  searchIconEl: document.querySelector('.search-form__icon'),
  modalEl: document.querySelector('.modal'),
  iconSun: document.querySelector('.icon-sun'),
  iconMoon: document.querySelector('.icon-moon'),
  calendarEl: document.querySelector('.date-form__input'),
  calendarButton: document.querySelector('.date-form__button-icon'),
  headerEl: document.querySelector('.header'),
  buttonAuthorization: document.querySelector('.button-authorization'),
  loginModal: document.querySelector('.modal'),
  loginModalTitle: document.querySelector('.modal__title'),
  loginModalForm: document.querySelector('.order-form'),
  loginModalInputs: document.querySelectorAll('.order-form__input'),
  loginModalButtons: document.querySelectorAll('.modal-button'),
  loginModalButtonsClose: document.querySelector('.modal__close-button'),
};

if (localStorage.getItem(themeKey) === 'dark') {
  refs.themeSwitcherEl.checked = true;
  setDarkTheme();
}

refs.themeSwitcherEl.addEventListener('change', onThemeChange);

export function onThemeChange() {
  refs.bodyEl.classList.toggle('dark-mode');
  refs.switcherLightEl.classList.toggle('switcher-dark');
  refs.switcherDarkEl.classList.toggle('switcher-light');
  refs.linksEl.forEach(linkEl => linkEl.classList.toggle('light-text'));
  refs.logoEl.classList.toggle('light-text');
  refs.searchInputEl.classList.toggle('search-form__input--dark');
  refs.searchIconEl.classList.toggle('search-form__icon--dark');
  refs.searchIconEl.setAttribute(
    'fill',
    refs.bodyEl.classList.contains('dark-mode') ? '#fff' : ''
  );
  refs.headerEl.classList.toggle('header-border');
  refs.modalEl.classList.toggle('dark-text');
  refs.iconSun.classList.toggle('icon-sun-night');
  refs.iconMoon.classList.toggle('icon-moon-night');
  refs.calendarEl.classList.toggle('input-dark-mode');
  refs.calendarButton.classList.toggle('button-dark-mode');
  refs.calendarEl.classList.toggle(
    'light-text',
    !refs.bodyEl.classList.contains('dark-mode')
  );
  refs.buttonAuthorization.classList.toggle('buttonAuthorization-dark');
  refs.loginModal.classList.toggle('modal-dark');
  refs.loginModalTitle.classList.toggle('modal-dark');
  refs.loginModalForm.classList.toggle('modal-dark');
  refs.loginModalButtonsClose.classList.toggle('modal-dark');
  refs.loginModalInputs.forEach(e => e.classList.toggle('modal-dark'));
  refs.loginModalButtons.forEach(e => e.classList.toggle('modal-dark'));
  localStorage.setItem(
    themeKey,
    refs.bodyEl.classList.contains('dark-mode') ? 'dark' : 'light'
  );
}

function setDarkTheme() {
  refs.bodyEl.classList.add('dark-mode');
  refs.switcherLightEl.classList.add('switcher-dark');
  refs.switcherDarkEl.classList.add('switcher-light');
  refs.linksEl.forEach(linkEl => linkEl.classList.add('light-text'));
  refs.logoEl.classList.add('light-text');
  refs.searchInputEl.classList.add('search-form__input--dark');
  refs.searchIconEl.classList.add('search-form__icon--dark');
  refs.searchIconEl.setAttribute('fill', '#fff');
  refs.calendarEl.classList.toggle(
    'light-text',
    !refs.bodyEl.classList.contains('dark-mode')
  );
  refs.calendarEl.classList.add('input-dark-mode');
  refs.calendarButton.classList.add('button-dark-mode');
  refs.buttonAuthorization.classList.add('buttonAuthorization-dark');
  refs.loginModal.classList.add('modal-dark');
  refs.loginModalTitle.classList.add('modal-dark');
  refs.loginModalForm.classList.add('modal-dark');
  refs.loginModalButtonsClose.classList.add('modal-dark');
  refs.loginModalInputs.forEach(e => e.classList.add('modal-dark'));
  refs.loginModalButtons.forEach(e => e.classList.add('modal-dark'));
}
