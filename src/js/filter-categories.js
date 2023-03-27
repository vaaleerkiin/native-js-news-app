export const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

export function filtrBtnClickHandler(evt) {
  const otherBtnsContainerRef = document.querySelector(
    '.other-buttons-container'
  );

  if (evt.target.nodeName !== 'BUTTON' && evt.target.nodeName !== 'A') {
    return;
  }

  console.log(evt.target.nodeName);
  const previousActiveBtn = document.querySelector(
    '.news__filtr-menu-button--active'
  );

  if (previousActiveBtn) {
    previousActiveBtn.classList.remove('news__filtr-menu-button--active');
  }

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

export function createCategoriesFilter(categories, amount) {
  const horizontalCategories = categories.splice(0, amount);
  const horizontalMenu = document.createElement('ul');
  horizontalMenu.classList.add('news__filtr-menu');

  const horizontalMemuButtons = horizontalCategories
    .map(({ display_name }, index) => {
      if (index === amount - 1) {
        return (
          `<li class="news__filtr-menu-item"><button class="news__filtr-menu-button">${display_name}</button></li>` +
          `<li class="news__filtr-menu-item"><a class="news__filtr-menu-button menu-button-others" data-value="Others">Others</a></li>`
        );
      }

      // <svg class="menu-button-others__icon">
      //   <use href="/src/images/icons.svg#others-arrow"></use>
      // </svg>;

      return `<li class="news__filtr-menu-item"><button class="news__filtr-menu-button">${display_name}</button></li>`;
    })
    .join('');
  horizontalMenu.insertAdjacentHTML('beforeend', horizontalMemuButtons);

  const verticalMenu = document.createElement('ul');
  verticalMenu.classList.add('other-buttons-container', 'btns-are-hidden');

  const verticalMenuBauttons = categories
    .map(({ display_name }) => {
      return `<li class="other-button-item"><button type="button" class="other-button">${display_name}</button></li>`;
    })
    .join('');

  verticalMenu.insertAdjacentHTML('beforeend', verticalMenuBauttons);

  filtrButtonsContainerRef.append(horizontalMenu, verticalMenu);
}
