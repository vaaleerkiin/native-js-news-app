export function createFilterBtns(categories) {}

export function filtrBtnClickHandler(evt) {
  const otherBtnsContainerRef = document.querySelector(
    '.other-buttons-container'
  );

  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  const previousActiveBtn = document.querySelector(
    '.news__filtr-menu-button--active'
  );

  previousActiveBtn.classList.remove('news__filtr-menu-button--active');
  const currentActiveBtn = evt.target;
  currentActiveBtn.classList.add('news__filtr-menu-button--active');

  if (evt.target.dataset.value === 'Others') {
    otherBtnsContainerRef.classList.toggle('btns-are-hidden');
  }
}

export function closeOtherBtnsMenu(evt) {
  const otherBtnsContainerRef = document.querySelector(
    '.other-buttons-container'
  );

  if (evt.target.dataset.value !== 'Others') {
    otherBtnsContainerRef.classList.add('btns-are-hidden');
  }
}
