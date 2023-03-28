export function currentPage() {
  const previousActivePage = document.querySelector('.nav__link--current');

  if (previousActivePage) {
    previousActivePage.classList.remove('nav__link--current');
  }

  const pathName = window.location.pathname;
  console.log(pathName);
  const links = [...document.querySelectorAll('.nav__list .nav__link')];

  if (pathName === '/goit-js-news-app/read.html') {
    links[2].classList.add('nav__link--current');
    return;
  }
  if (pathName === '/goit-js-news-app/favorite.html') {
    links[1].classList.add('nav__link--current');
    return;
  }
}
