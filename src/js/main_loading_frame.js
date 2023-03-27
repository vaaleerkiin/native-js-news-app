export function setLoadingFrame() {
  const markup = `<div class="loading__frame"><div class="loading__icon"></div></div>`;
  if (!document.querySelector('.loading__frame')) {
    document
      .querySelector('.newsgallery')
      .insertAdjacentHTML('beforeend', markup);
  } else
    document
      .querySelector('.loading__frame')
      .classList.remove('loading__hidden');
  // document.querySelector('body').style.overflow = 'hidden';
}
export function resetLoadingFrame() {
  document.querySelector('.loading__frame').classList.add('loading__hidden');
  // document.querySelector('body').style.overflow = 'auto';
}
