import { FavoriteStorage, ReadStorage } from '../localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsGalleryEl = document.querySelector('.gallery__cards-list');

export function renderMostPopMarkup(news) {
  const markup = news
    .map(
      (
        { abstract, published_date, media, title, des_facet, url, section },
        index
      ) => {
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
        return `<li class="card-photo">
      		<div class="image-wrapper">
                <img class="photo" src="${
                  media[0]['media-metadata'][2].url
                }" alt="${des_facet
          .map(val => val)
          .join(', ')}" loading="lazy" />
		    </div>
            <div class="card-category">${section}</div>
            <button type="button" class="${activeClass}">${activeText}</button>
            <h2 class="card-title">${title}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${published_date}</span>
            <a class="card-url" href="${url}" alt="" target="_blank"
                rel="noopener noreferrer nofollow">Read more</a>
            </li>`;
      }
    )
    .join('');

  newsGalleryEl.innerHTML = markup;
}
