import moment from 'moment/moment';
import { FavoriteStorage } from '../localStorage';
const favoriteStorage = new FavoriteStorage();

const favGallery = document.querySelector('.favorite__list');

function renderFavoriteMarkup(news) {
  const markup = news
    .map(({ src, title, url, info, published_date, alt, section }) => {
      const cardDate = moment(published_date).format('DD/MM/YYYY');

      return `<li class="card-photo">
                <div class="image-wrapper">
          <img class="photo" src="https://www.nytimes.com/${src}" alt="${alt}" loading="lazy" />
          </div>
              <div class="card-category">${section}</div>
              <button type="button" class="favorite-button__activ">Remove from favorite</button>
              <h2 class="card-title">${title}</h2>
              <p class="card-info">${info}</p>
              <span class="card-date">${cardDate}</span>
              <a href="${url}" class="card-url">Read more</a>
   
              </li>`;
    })
    .join('');

  favGallery.innerHTML = markup;
}

// renderFavoriteMarkup(favoriteStorage.getNews());
