import { normalizeImage, normalizeAlt, normalizeData } from '../normalize';
import { FavoriteStorage, ReadStorage } from '../localStorage';
import { onCardClick, onReadClick } from '../onCardClick';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsGalleryEl = document.querySelector('.gallery__cards-list');
const newsgallery = document.querySelector('.gallery__cards-list');
export function renderMostPopMarkup(news) {
  // console.log(news);
  const markup = news
    .map(
      (
        { abstract, published_date, media, title, des_facet, url, section },
        index
      ) => {
        const data = normalizeData(
          media,
          title,
          url,
          abstract,
          published_date,
          des_facet,
          section
        );
        // console.log(data);
        let activeClass = '';
        let activeText = '';
        let backdropRead = '';
        let readText = '';
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
        if (readStorage.hasNews({ url })) {
          backdropRead = ' opacity';
          readText = '<span class="news__read-status">Already read</span>';
        }
        return `<li class="card-photo${backdropRead}">
      		<div class="image-wrapper">
                <img class="photo" src="${data.image}" alt="${data.alt}" loading="lazy" />
		    </div>
            <div class="card-category">${data.category}</div>
            <button type="button" class="${activeClass}">${activeText} <span><svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">
    <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
        stroke-width="2.2857"
        d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">
    </path>
</svg></span></button>
            <h2 class="card-title">${data.title}</h2>
            <p class="card-info">${data.info}</p>
	        <span class="card-date">${data.published_date}</span>
            <a class="card-url" href="${data.url}" alt="" target="_blank"
                rel="noopener noreferrer nofollow">Read more</a>
                ${readText}
            </li>`;
      }
    )
    .join('');

  newsGalleryEl.innerHTML = markup;
}
