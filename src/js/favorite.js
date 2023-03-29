import { FavoriteStorage, ReadStorage } from './localStorage';
import { onCardClick, onReadClick } from './onCardClick';
import { searchInputAnimation } from './search-input-animation';
import { oNmobileMenu } from './mobile-menu';
import { currentPage } from './current-page';
import { monitorAuthState } from './ui/ui';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();

oNmobileMenu();
searchInputAnimation();
currentPage();
monitorAuthState();

const conteiner = document.querySelector('.favorite__conteiner');

function renderFavorite(news) {
  console.log(news);
  const markup = news
    .map(({ src, title, url, info, published_date, alt, section }) => {
      let activeClass = '';
      let activeText = '';
      let iconClass = '';
      let backdropRead = '';
      let readText = '';
      if (
        favoriteStorage.hasNews({
          url,
        })
      ) {
        activeText = 'Remove from favorite';
        activeClass = 'favorite-button__activ';
        iconClass = 'news-icon';
      } else {
        activeText = 'Add to favorite';
        activeClass = 'add-to-favorite';
        iconClass = 'active-news-icon';
      }
      if (readStorage.hasNews({ url })) {
        backdropRead = ' opacity';
        readText =
          '<span class="news__read-status">Already read <span class="card-icon"></span>';
      } else {
        backdropRead = '';
      }
      return `<li class="card-photo${backdropRead}">
                            <div class="image-wrapper">
                                <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
                            </div>
                            <div class="card-category">${section}</div>
                            <button type="button" class="${activeClass}">${activeText} <span><svg class="item-news__block-icon ${iconClass}" width="16" height="16" viewBox="0 0 37 32">
                            <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
                                stroke-width="2.2857"
                                d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">
                            </path>
                        </svg></span></button>
                            <h2 class="card-title">${title}</h2>
                            <p class="card-info">${info}</p>
                            <span class="card-date">${published_date}</span>
                            <a href="${url}" class="card-url">Read more</a>
                            ${readText}
                        </li>`;
    })
    .join('');
  conteiner.innerHTML = markup;
}

const news = favoriteStorage.getNews();
renderFavorite(news);

conteiner.addEventListener('click', onCardClick);
conteiner.addEventListener('click', onReadClick);
if (conteiner.innerHTML == '') {
  conteiner.insertAdjacentHTML('afterend', `<div class="news__plug"></div>`);
}

document.querySelector('.search-form__input').addEventListener('click', () => {
  window.location.href = './index.html';
});
