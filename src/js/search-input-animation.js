export function searchInputAnimation() {
  const searchIconchRef = document.querySelector('.search-form__icon-search');
  const search = document.querySelector('.search');
  const searchFormBtnRef = document.querySelector('.search-form__button');

  searchIconchRef.addEventListener('click', e => {
    e.stopPropagation();
    search.classList.add('search--active');
  });

  searchFormBtnRef.addEventListener('click', () => {
    search.classList.remove('search--active');
  });
}
