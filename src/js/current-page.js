export function currentPage() {
  const previousActivePage = document.querySelector('.nav__link--current');

  if (previousActivePage) {
    previousActivePage.classList.remove('nav__link--current');
  }

  const pathName = window.location.pathname;
  const links = [...document.querySelectorAll('.nav__list .nav__link')];

  if (pathName === '/read.html') {
    links[2].classList.add('nav__link--current');
    return;
  }
  if (pathName === '/favorite.html') {
    links[1].classList.add('nav__link--current');
    return;
  }
}
