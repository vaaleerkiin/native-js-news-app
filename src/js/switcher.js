// const switcherEl = document.querySelector('#theme');
// const bodyEl = document.body;
// const lightEl = document.querySelector('.switcher__text-light');
// const darkEl = document.querySelector('.switcher__text-dark');
// const linksEl = document.querySelectorAll('.nav__link');
// const logoEl = document.querySelector('.header__logo');
// const searchInputEL = document.querySelector('.search-form__input');
// const searchIconEl = document.querySelector('search-form__icon');

// switcherEl.addEventListener('change', onChange);
// function onChange(e) {
//   if (switcherEl.checked) {
//     bodyEl.classList.add('dark-mode');
//     darkEl.classList.add('switcher-light');
//     lightEl.classList.add('switcher-dark');
//     linksEl.forEach(link => link.classList.add('light-text'));
//     logoEl.classList.add('light-text');
//     searchInputEL.classList.add('search-form__input--dark');
//     searchIconEl.classList.add('search-form__icon--dark');
//     searchIconEl.setAttribute('fill', '#fff'); // set the fill color to white
//   } else {
//     bodyEl.classList.remove('dark-mode');
//     lightEl.classList.remove('switcher-dark');
//     darkEl.classList.remove('switcher-light');
//     linksEl.forEach(link => link.classList.remove('light-text'));
//     logoEl.classList.remove('light-text');
//     searchInputEL.classList.remove('search-form__input--dark');
//     searchIconEl.classList.remove('search-form__icon--dark');
//     searchIconEl.setAttribute('fill', ''); // reset the fill color
//   }
// }

// const switcherEl = document.querySelector('#theme');
// const bodyEl = document.body;
// const lightEl = document.querySelector('.switcher__text-light');
// const darkEl = document.querySelector('.switcher__text-dark');
// const elementsToColor = document.querySelectorAll(
//   '.header__logo, .nav__item, .search-form__input, .search-form__icon'
// );
// const fillableElements = document.querySelectorAll('svg [fill]');

// switcherEl.addEventListener('change', toggleDarkMode);

// console.log(elementsToColor);

// function toggleDarkMode(e) {
//   const isDarkMode = switcherEl.checked;
//   bodyEl.classList.toggle('dark-mode', isDarkMode);
//   darkEl.classList.toggle('switcher-light', isDarkMode);
//   lightEl.classList.toggle('switcher-dark', isDarkMode);
//   elementsToColor.forEach(el => el.classList.toggle('light-text', !isDarkMode));
//   fillableElements.forEach(el =>
//     el.setAttribute('fill', isDarkMode ? '#fff' : '')
//   );
// }
// const refs = {
//   themeSwitcherEl: document.querySelector('#theme'),
//   bodyEl: document.body,
//   lightTextEls: document.querySelectorAll('.light-text'),
//   switcherLightEl: document.querySelector('.switcher__text-light'),
//   switcherDarkEl: document.querySelector('.switcher__text-dark'),
//   linksEl: document.querySelectorAll('.nav__link'),
//   logoEl: document.querySelector('.header__logo'),
//   searchInputEl: document.querySelector('.search-form__input'),
//   searchIconEl: document.querySelector('.search-form__icon'),
// };
// refs.themeSwitcherEl.addEventListener('change', onThemeChange);

// function onThemeChange() {
//   refs.bodyEl.classList.toggle('dark-mode');
//   refs.switcherLightEl.classList.toggle('switcher-dark');
//   refs.switcherDarkEl.classList.toggle('switcher-light');
//   refs.linksEl.forEach(linkEl => linkEl.classList.toggle('light-text'));
//   refs.logoEl.classList.toggle('light-text');
//   refs.searchInputEl.classList.toggle('search-form__input--dark');
//   refs.searchIconEl.classList.toggle('search-form__icon--dark');
//   refs.searchIconEl.setAttribute(
//     'fill',
//     refs.themeSwitcherEl.checked ? '#fff' : ''
//   );
// }
const themeKey = 'selectedTheme';
const refs = {
  themeSwitcherEl: document.querySelector('#theme'),
  bodyEl: document.body,
  lightTextEls: document.querySelectorAll('.light-text'),
  switcherLightEl: document.querySelector('.switcher__text-light'),
  switcherDarkEl: document.querySelector('.switcher__text-dark'),
  linksEl: document.querySelectorAll('.nav__link'),
  logoEl: document.querySelector('.header__logo'),
  searchInputEl: document.querySelector('.search-form__input'),
  searchIconEl: document.querySelector('.search-form__icon'),
};

// set the initial theme based on the value from localStorage
if (localStorage.getItem(themeKey) === 'dark') {
  refs.themeSwitcherEl.checked = true;
  setDarkTheme();
}

refs.themeSwitcherEl.addEventListener('change', onThemeChange);

function onThemeChange() {
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
}

// function setLightTheme() {
//   refs.bodyEl.classList.remove('dark-mode');
//   refs.switcherLightEl.classList.remove('switcher-dark');
//   refs.switcherDarkEl.classList.remove('switcher-light');
//   refs.linksEl.forEach(linkEl => linkEl.classList.remove('light-text'));
//   refs.logoEl.classList.remove('light-text');
//   refs.searchInputEl.classList.remove('search-form__input--dark');
//   refs.searchIconEl.classList.remove('search-form__icon--dark');
//   refs.searchIconEl.setAttribute('fill', '');
// }
