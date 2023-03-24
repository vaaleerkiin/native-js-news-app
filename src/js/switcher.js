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
