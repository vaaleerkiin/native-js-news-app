export function filtrBtnClickHandler(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const previousActiveBtn = document.querySelector(
    '.news__filtr-menu-button--active'
  );

  previousActiveBtn.classList.remove('news__filtr-menu-button--active');
  const currentActiveBtn = evt.target;
  currentActiveBtn.classList.add('news__filtr-menu-button--active');
}
