import { FavoriteStorage, ReadStorage } from './localStorage';
const favoriteStorage = new FavoriteStorage();
const readSection = document.querySelector('.read');
// import { onCardClick } from './rendermarkup';
// падає скрипт при імпорті, не можу додавати в локалсторедж при кліку на adToFavorit

const readItems = JSON.parse(localStorage.getItem('READ_NEWS'));
readItems.sort((a, b) => b.readDate - a.readDate);
const specialtems = [];

readItems.forEach(item => {
  if (!specialtems.includes(parseDate(item.readDate))) {
    specialtems.push(parseDate(item.readDate));
  }
});
specialtems.forEach(renderRededMarkup);

function parseDate(dateMs) {
  return new Date(dateMs).toLocaleDateString().replaceAll('.', '/');
}

function renderRededMarkup(date) {
  const readCards = readItems
    .map(item => {
      if (parseDate(item.readDate) === date) {
        const { url, info, published_date, alt, section, title, src } = item;
        let activeClass = '';
        let activeText = '';
        if (
          favoriteStorage.hasNews({
            url,
          })
        ) {
          activeText = 'Remove from favorite';
          activeClass = 'favorite-button__activ';
        } else {
          activeText = 'Add to favorite';
          activeClass = 'add-to-favorite';
        }
        //   тут можна змінити розмітку для всіх екземплярів карток
        return `<li class="card-photo">
      		<div class="image-wrapper">
        <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
		</div>
            <div class="card-category">${section}</div>
            <button type="button" class="${activeClass}">Add to favorite</button>
            <h2 class="card-title">${title}</h2>
            <p class="card-info">${info}</p>
	        <span class="card-date">${published_date}</span>
            <a href="${url}" class="card-url" target=”_blank”>Read more</a>
             </li>`;
      }
    })
    .join('');
  // тут можна змінити розмітку для кожного екземпляру акордиона (я не дійшов до акордиона)
  //дати які потрібні для заголовків приходять в змінну date
  //  console.log(date);
  const readMarkup = `<p>${date}</p>
  <div class="newsgallery">
  <ul class="gallery__cards-list">${readCards}</ul>
</div>`;

  readSection.insertAdjacentHTML('beforeend', readMarkup);
  // readSection - секція з класом 'read', туди рендерю всю розмітку
}

// newsgallery.addEventListener('click', onCardClick);
