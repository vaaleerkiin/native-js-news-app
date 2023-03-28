import { normalizeData } from './normalize';
import moment from 'moment/moment';
import { onCardClick, onReadClick } from './onCardClick';
export { renderMarkup };
import { FavoriteStorage, ReadStorage } from './localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsgallery = document.querySelector('.gallery__cards-list');
// const readBtn = document.querySelector('.')

function renderMarkup(searchedNews) {
  console.log(searchedNews);
  const markup = searchedNews
    .map(
      (
        {
          abstract,
          pub_date,
          multimedia,
          headline,
          keywords,
          web_url,
          section_name,
        },
        index
      ) => {
        if (index <= 8) {
          const data = normalizeData(
            multimedia,
            headline,
            web_url,
            abstract,
            pub_date,
            keywords,
            section_name
          );
          const url = data.url;
          // console.log(data);
          let activeClass = '';
          let activeText = '';
          let backdropRead = '';
          let readText = '';
          if (
            favoriteStorage.hasNews({
              web_url,
            })
          ) {
            activeText = 'Remove from favorite';
            activeClass = 'favorite-button__activ';
          } else {
            activeText = 'Add to favorite';
            activeClass = 'add-to-favorite';
          }
          if (readStorage.hasNews({ url })) {
            backdropRead = ' opacity';
            readText = '<span class="news__read-status">Already read</span>';
          } else {
            backdropRead = '';
          }

          return `<li class="card-photo${backdropRead}">
      		<div class="image-wrapper">
         <img class="photo" src="https://www.nytimes.com/${data.image}" alt="${data.alt}" loading="lazy" />
		 </div>
            <div class="card-category">${data.category}</div>
            <button type="button" class="${activeClass}">${activeText}
            <span><svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">
    <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
        stroke-width="2.2857"
        d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">
    </path>
</svg></span></button>
            <h2 class="card-title">${data.title}</h2>
            <p class="card-info">${data.info}</p>
            <span class="card-date">${data.published_date}</span>
            <a href="${data.url}" class="card-url">Read more</a>
 ${readText}
            </li>`;
        }
      }
    )
    .join('');

  newsgallery.innerHTML = markup;
}

newsgallery.addEventListener('click', onCardClick);
newsgallery.addEventListener('click', onReadClick);

const cardUrls = document.querySelectorAll('.card-url');
cardUrls.forEach(cardUrl => {
  cardUrl.addEventListener('click', () => {
    cardUrl.parentElement.classList.add('opacity');
  });
});
