const newsGalleryEl = document.querySelector('.gallery__cards-list');
import { FavoriteStorage, ReadStorage } from '../localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();

export function renderCategoryMarkup(news) {
  console.log(news);
  const markup = news
    .map(
      (
        {
          abstract,
          published_date,
          multimedia,
          title,
          des_facet,
          url,
          section,
        },
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
        if (index < 8) {
          let image;
          if (multimedia) {
            image = multimedia[2].url;
          } else if (des_facet) {
            image = `https://source.unsplash.com/random/300x300/?${des_facet[0]}`;
          } else {
            image = `https://source.unsplash.com/random/300x300?noimage`;
          }
          let alt;
          if (des_facet) {
            alt = des_facet.map(val => val).join(', ');
          }
          return `<li class="card-photo">
      		<div class="image-wrapper">
                <img class="photo" src="${image}" alt="${alt}" loading="lazy" />
		    </div>
            <div class="card-category">${section.toLowerCase()}</div>
            <button type="button" class="${activeClass}">Add to favorite</button>
            <h2 class="card-title">${title}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${published_date}</span>
            <a class="card-url" href="${url}" alt="" target="_blank"
                rel="noopener noreferrer nofollow">Read more</a>
            </li>`;
        }
      }
    )
    .join('');

  newsGalleryEl.innerHTML = markup;
}
