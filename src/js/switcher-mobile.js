const themeKey = 'selectedTheme';
const refs = {
  burgerEl: document.querySelector('#theme-burger'),
  bodyEl: document.body,
  mobileLogo: document.querySelector('.mobile-logo'),
  mobileLink: document.querySelectorAll('.mobile-menu__link'),
  switcherLightEl: document.querySelector('.switcher-burger__text-light'),
  switcherDarkEl: document.querySelector('.switcher-burger__text-dark'),
  searchIconEl: document.querySelector('.mobile-menu__icon'),
  mobileCont: document.querySelector('.mobile-menu-container'),
  mobileArr: document.querySelector('.mobile-menu__right-arrow'),
  headerLogo: document.querySelector('.header__logo'),
  btnEl: document.querySelectorAll('.mobile-menu-button__icon'),
  iconSun: document.querySelector('.icon-sun-burger'),
  iconMoon: document.querySelector('.icon-moon-burger'),
  headerEl: document.querySelector('.header'),
};

const isDarkTheme = () => refs.bodyEl.classList.contains('dark-mode');

const setTheme = () => {
  const isChecked = refs.burgerEl.checked;
  refs.bodyEl.classList.toggle('dark-mode', isChecked);
  refs.mobileLogo.classList.toggle('light-text', isChecked);
  refs.mobileLink.forEach(linkEl =>
    linkEl.classList.toggle('light-text', isChecked)
  );
  refs.mobileCont.classList.toggle('dark-mode', isChecked);
  refs.switcherLightEl.classList.toggle('switcher-dark', isChecked);
  refs.switcherDarkEl.classList.toggle('switcher-light', isChecked);
  refs.headerLogo.classList.toggle('light-text', isChecked);
  refs.iconSun.classList.toggle('icon-sun-night-burger', isChecked);
  refs.iconMoon.classList.toggle('icon-moon-night-burger', isChecked);
  refs.btnEl.forEach(btnEl => btnEl.classList.toggle('white-icon', isChecked));
  refs.headerEl.classList.toggle('header-border', isChecked);
  localStorage.setItem(themeKey, isChecked ? 'dark' : 'light');
};

if (localStorage.getItem(themeKey) === 'dark') {
  refs.burgerEl.checked = true;
}

refs.burgerEl.addEventListener('change', setTheme);

setTheme();
