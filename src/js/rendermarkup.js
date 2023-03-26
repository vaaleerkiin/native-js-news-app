import moment from 'moment/moment';
export { renderMarkup };
import { FavoriteStorage, ReadStorage } from './localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsgallery = document.querySelector('.gallery__cards-list');

function renderMarkup(searchedNews) {
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
        const image = () => {
          try {
            return `https://www.nytimes.com/${multimedia[0].url}`;
          } catch {
            return 'https://source.unsplash.com/random/300x300?noimage';
          }
        };
        const keyword = () => {
          try {
            return keywords[0].value;
          } catch {
            return 'news';
          }
        };
        if (index < 8) {
          const cardDate = moment(pub_date).format('DD/MM/YYYY');
          let activeClass = '';
          let activeText = '';
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

          return `<li class="card-photo">
      		<div class="image-wrapper">
        <img class="photo" src="${image()}" alt="${keyword()}" loading="lazy" />
		</div>
            <div class="card-category">${section_name}</div>
            <button type="button" class="${activeClass}">Add to favorite</button>
            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${cardDate}</span>
            <a href="${web_url}" class="card-url">Read more</a>
 
            </li>`;
        }
      }
    )
    .join('');

  newsgallery.innerHTML = markup;
}

newsgallery.addEventListener('click', onCardClick);

function onCardClick(e) {
  if (e.target.tagName.toLowerCase() !== 'button') {
    return;
  } else {
    console.log('Click');
    const favoriteBtn = e.target.closest('BUTTON');
    console.log(favoriteBtn);
    const newsCard = favoriteBtn.closest('li');

    const headline = newsCard.querySelector('.card-title').textContent;

    const multimediaSrc = newsCard.querySelector('img').getAttribute('src');
    const multimediaAlt = newsCard.querySelector('img').getAttribute('alt');

    const info = newsCard.querySelector('p').textContent;

    const date = newsCard.querySelector('span').textContent;

    const category = newsCard.querySelector('.card-category').textContent;

    const webUrl = newsCard.querySelector('.card-url').getAttribute('href');

    const data = {
      src: multimediaSrc,
      title: headline,
      url: webUrl,
      info: info,
      published_date: date,
      alt: multimediaAlt,
      section: category,
    };
    console.log(data);
    if (favoriteStorage.hasNews(data)) {
      favoriteStorage.removeNews(data);
      favoriteBtn.classList.replace(
        'favorite-button__activ',
        'add-to-favorite'
      );
      favoriteBtn.textContent = 'Add to favorite';
    } else {
      favoriteStorage.addNews(data);
      favoriteBtn.classList.replace(
        'add-to-favorite',
        'favorite-button__activ'
      );
      favoriteBtn.textContent = 'Remove';
    }
    return data;
  }
}

newsgallery.addEventListener('click', onReadClick);

function onReadClick(e) {
  if (e.target.tagName.toLowerCase() !== 'a') {
    return;
  } else {
    console.log('Click');
    const moreBtn = e.target.closest('A');
    console.log(moreBtn);
    const newsCard = moreBtn.closest('li');
    console.log(newsCard);
    const headline = newsCard.querySelector('.card-title').textContent;

    const multimediaSrc = newsCard.querySelector('img').getAttribute('src');
    const multimediaAlt = newsCard.querySelector('img').getAttribute('alt');

    const info = newsCard.querySelector('p').textContent;

    const date = newsCard.querySelector('span').textContent;

    const category = newsCard.querySelector('.card-category').textContent;

    const webUrl = newsCard.querySelector('.card-url').getAttribute('href');

    const data = {
      src: multimediaSrc,
      title: headline,
      url: webUrl,
      info: info,
      published_date: date,
      alt: multimediaAlt,
      section: category,
    };
    console.log(data);

    readStorage.addNews(data);
  }
}
