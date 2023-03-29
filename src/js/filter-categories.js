const categoriesList = [
  { section: 'admin', display_name: 'Admin' },
  { section: 'arts', display_name: 'Arts' },
  { section: 'automobiles', display_name: 'Automobiles' },
  { section: 'books', display_name: 'Books' },
  { section: 'briefing', display_name: 'Briefing' },
  { section: 'business', display_name: 'Business' },
  { section: 'climate', display_name: 'Climate' },
  { section: 'corrections', display_name: 'Corrections' },
  {
    section: 'crosswords \u0026 games',
    display_name: 'Crosswords & Games',
  },
  { section: 'education', display_name: 'Education' },
  { section: 'en español', display_name: 'En Español' },
  { section: 'fashion', display_name: 'Fashion' },
  { section: 'food', display_name: 'Food' },
  { section: 'guides', display_name: 'Guides' },
  { section: 'health', display_name: 'Health' },
  { section: 'home \u0026 garden', display_name: 'Home & Garden' },
  { section: 'home page', display_name: 'Home Page' },
  { section: 'job market', display_name: 'Job Market' },
  { section: 'lens', display_name: 'Lens' },
  { section: 'magazine', display_name: 'Magazine' },
  { section: 'movies', display_name: 'Movies' },
  { section: 'multimedia/photos', display_name: 'Multimedia/Photos' },
  { section: 'new york', display_name: 'New York' },
  { section: 'obituaries', display_name: 'Obituaries' },
  { section: 'opinion', display_name: 'Opinion' },
  { section: 'parenting', display_name: 'Parenting' },
  { section: 'podcasts', display_name: 'Podcasts' },
  { section: 'reader center', display_name: 'Reader Center' },
  { section: 'real estate', display_name: 'Real Estate' },
  { section: 'science', display_name: 'Science' },
  { section: 'smarter living', display_name: 'Smarter Living' },
  { section: 'sports', display_name: 'Sports' },
  { section: 'style', display_name: 'Style' },
  { section: 'sunday review', display_name: 'Sunday Review' },
  { section: 't brand', display_name: 'T Brand' },
  { section: 't magazine', display_name: 'T Magazine' },
  { section: 'technology', display_name: 'Technology' },
  { section: 'the learning network', display_name: 'The Learning Network' },
  { section: 'the upshot', display_name: 'The Upshot' },
  { section: 'the weekly', display_name: 'The Weekly' },
  { section: 'theater', display_name: 'Theater' },
  { section: 'times insider', display_name: 'Times Insider' },
  { section: 'today’s paper', display_name: 'Today’s Paper' },
  { section: 'travel', display_name: 'Travel' },
  { section: 'u.s.', display_name: 'U.S.' },
  { section: 'universal', display_name: 'Universal' },
  { section: 'video', display_name: 'Video' },
  { section: 'well', display_name: 'Well' },
  { section: 'world', display_name: 'World' },
  { section: 'your money', display_name: 'Your Money' },
];

export const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

export function filtrBtnClickHandler(evt) {
  const otherBtn = document.querySelector('a[data-value="Others"]');
  const arrowIcon = document.querySelector('.menu-button-others__icon');
  const otherBtnsContainerRef = document.querySelector(
    '.other-buttons-container'
  );

  if (
    evt.target.nodeName !== 'BUTTON' &&
    evt.target.nodeName !== 'A' &&
    evt.target.nodeName !== 'SPAN'
  ) {
    return;
  }

  const previousActiveBtn = document.querySelector(
    '.news__filtr-menu-button--active'
  );

  if (previousActiveBtn) {
    previousActiveBtn.classList.remove('news__filtr-menu-button--active');
  }

  if (evt.target.dataset.value === 'Others') {
    otherBtnsContainerRef.classList.toggle('btns-are-hidden');
    otherBtn.classList.add('news__filtr-menu-button--active');

    arrowIcon.classList.toggle('icon-is-rotate');
    arrowIcon.classList.add('icon-is-white');
    return;
  }
  // console.dir(evt.target);

  const currentActiveBtn = evt.target;
  currentActiveBtn.classList.add('news__filtr-menu-button--active');
  arrowIcon.classList.remove('icon-is-white');
}

export function otherCategoryBtnClickHandler(evt) {
  const otherBtn = document.querySelector('a[data-value="Others"]');
  const arrowIcon = document.querySelector('.menu-button-others__icon');

  if (
    evt.target.nodeName !== 'BUTTON' ||
    evt.target.dataset.value !== 'other-category'
  ) {
    return;
  }
  otherBtn.firstElementChild.textContent = evt.target.textContent;
  otherBtn.classList.add('news__filtr-menu-button--active');
  arrowIcon.classList.add('icon-is-white');
}

export function closeOtherBtnsMenu(evt) {
  const otherBtnsContainerRef = document.querySelector(
    '.other-buttons-container'
  );

  if (evt.target.dataset.value !== 'Others') {
    otherBtnsContainerRef.classList.add('btns-are-hidden');
    const arrowIcon = document.querySelector('.menu-button-others__icon');
    arrowIcon.classList.remove('icon-is-rotate');
  }
}

function createCategoriesFilter(categories, amount) {
  const horizontalCategories = categories.splice(0, amount);
  const horizontalMenu = document.createElement('ul');

  horizontalMenu.classList.add('news__filtr-menu');

  const horizontalMemuButtons = horizontalCategories
    .map(({ display_name }, index) => {
      if (index === amount - 1) {
        return (
          `<li class="news__filtr-menu-item"><button class="news__filtr-menu-button">${display_name}</button></li>` +
          `<li class="news__filtr-menu-item"><a class="news__filtr-menu-button menu-button-others" data-value="Others"><span data-value="Others">Others</span><span class="menu-button-others__icon" data-value="Others"></span></a></li>`
        );
      }

      return `<li class="news__filtr-menu-item"><button class="news__filtr-menu-button">${display_name}</button></li>`;
    })
    .join('');
  horizontalMenu.insertAdjacentHTML('beforeend', horizontalMemuButtons);

  const verticalMenu = document.createElement('ul');
  verticalMenu.classList.add('other-buttons-container', 'btns-are-hidden');

  const verticalMenuButtons = categories
    .map(({ display_name }) => {
      return `<li class="other-button-item"><button type="button" class="other-button" data-value="other-category">${display_name}</button></li>`;
    })
    .join('');

  verticalMenu.insertAdjacentHTML('beforeend', verticalMenuButtons);

  filtrButtonsContainerRef.append(horizontalMenu, verticalMenu);
}

function createCategoriesFilterMobile(categories) {
  const arrowIcon =
    '<svg class="menu-button-others__icon" viewBox="0 0 32 32"> <path d="M8.538 12.23c-4.090 3.789-7.43 6.908-7.426 6.929s0.663 0.644 1.461 1.382c0.8 0.738 1.577 1.459 1.726 1.604l0.271 0.26 5.692-5.257c1.557-1.455 3.425-3.17 5.306-4.872l0.432-0.385c0.026 0 2.607 2.366 5.739 5.257l5.692 5.257 0.271-0.26c0.235-0.226 3.177-2.944 3.221-2.976 0.017-0.013-14.914-13.839-14.935-13.833-0.009 0.002-3.36 3.104-7.45 6.893z"></path></svg>';
  const categoriesBtn = `<a class="news__filtr-menu-button menu-button-others" data-value="Others"><span data-value="Others">Categories</span><span class="menu-button-others__icon" data-value="Others"></span></a>`;

  const verticalMenu = document.createElement('ul');
  verticalMenu.classList.add('other-buttons-container', 'btns-are-hidden');

  const verticalMenuButtons = categories
    .map(({ display_name }) => {
      return `<li class="other-button-item"><button type="button" class="other-button" data-value="other-category">${display_name}</button></li>`;
    })
    .join('');

  verticalMenu.insertAdjacentHTML('beforeend', verticalMenuButtons);

  filtrButtonsContainerRef.insertAdjacentHTML('beforeend', categoriesBtn);
  filtrButtonsContainerRef.append(verticalMenu);
}

export function addCategoriesFilter() {
  const windowWidth = document.documentElement.clientWidth;
  if (windowWidth >= 1280) {
    createCategoriesFilter(categoriesList, 6);
    return;
  }
  if (windowWidth >= 768 && windowWidth < 1280) {
    createCategoriesFilter(categoriesList, 4);
    return;
  }
  createCategoriesFilterMobile(categoriesList);
}
