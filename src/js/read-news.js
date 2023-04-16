import { FavoriteStorage, ReadStorage } from './localStorage';
import { searchInputAnimation } from './search-input-animation';
import { oNmobileMenu } from './mobile-menu';
import { currentPage } from './current-page';
import { onCardClick } from './onCardClick';
import { monitorAuthState } from './ui/ui';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const news = () => {
  if (readStorage.getNews().length === 0) {
    return;
  } else {
    return readStorage.getNews();
  }
};

import { onThemeChange } from './switcher';
oNmobileMenu();
searchInputAnimation();
currentPage();
monitorAuthState();

const dates = () => [...new Set(news().map(obj => obj.readDate))].reverse();
const accordionEl = document.querySelector('.accordion');

function renderAccordion() {
  const markup = dates()
    .map(date => {
      return `<div class="accordion-container">
        <div class="accordion-date"><span class="accordion-paragraph">${date}</span><i class="accordion-arrow"></i>
        <hr />
            <div class="newsgallery visually-hidden">
                <ul class="gallery__cards-list"></ul>
            </div>
        </div>
      </div>`;
    })
    .join('');
  return markup;
}
if (news()) {
  accordionEl.innerHTML = renderAccordion();
}

const accordionContainer = document.getElementsByClassName(
  'accordion-container'
);
const accordion = document.querySelectorAll('.accordion-date');
if (news()) {
  renderAccordionNews(accordion);
}

function renderAccordionNews(arr) {
  arr.forEach(element => {
    const accordionElDate = element.innerText;
    news().map(
      ({ readDate, src, title, url, info, published_date, alt, section }) => {
        if (readDate === accordionElDate) {
          const favoriteIcon = `<span>
                                <svg
                                    class="item-news__block-icon active-news-icon"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 37 32"
                                >
                                    <path
                                    style="stroke: var(--color1, #4440f7)"
                                    stroke-linejoin="round"
                                    stroke-linecap="round"
                                    stroke-miterlimit="4"
                                    stroke-width="2.2857"
                                    d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"
                                    ></path>
                                </svg>
                            </span>`;

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
          const markup = `<li class="card-photo ">
                            <div class="image-wrapper">
                                <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
                            </div>
                            <div class="card-category">${section}</div>
                            <button type="button" class="${activeClass}">${activeText}${favoriteIcon}</button>
                            <h2 class="card-title">${title}</h2>
                            <p class="card-info">${info}</p>
                            <span class="card-date">${published_date}</span>
                            <a href="${url}" class="card-url">Read more</a>
                           
                        </li>`;
          const contentEl = element.querySelector('.gallery__cards-list');
          contentEl.insertAdjacentHTML('beforeend', markup);
        }
      }
    );
  });
  try {
    // document.querySelector('.accordion-date').classList.toggle('active');
    document.querySelector('.newsgallery').classList.toggle('visually-hidden');
    document.querySelector('.accordion-arrow').classList.toggle('active');
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function (e) {
    if (e.target !== this) {
      return;
    }
    // this.classList.toggle('active');
    const currentGallery = this.querySelector('.newsgallery');
    currentGallery.classList.toggle('visually-hidden');
    this.querySelector('.accordion-arrow').classList.toggle('active');
  });
}

accordionEl.addEventListener('click', onCardClick);

if (accordionEl.innerHTML == '') {
  accordionEl.insertAdjacentHTML('afterend', `<div class="news__plug"></div>`);
}

document.querySelector('.search-form__input').addEventListener('click', () => {
  window.location.href = './index.html';
});
