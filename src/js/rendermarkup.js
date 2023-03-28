import moment from 'moment/moment';
export { renderMarkup };
import { FavoriteStorage, ReadStorage } from './localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsgallery = document.querySelector('.gallery__cards-list');
// const readBtn = document.querySelector('.')

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
        if (index <= 8) {
          const cardDate = moment(pub_date).format('DD/MM/YYYY');
          let activeClass = '';
          let activeText = '';
          let backdropRead = '';
          let readText = '';
          if (favoriteStorage.hasNews(web_url)) {
            activeText = 'Remove from favorite';
            activeClass = 'favorite-button__activ';
          } else {
            activeText = 'Add to favorite';
            activeClass = 'add-to-favorite';
          }
          if (readStorage.hasNews(web_url)) {
            backdropRead = ' opacity';
            readText = '<span class="news__read-status">Already read</span>';
          } else {
            backdropRead = '';
          }

          return `<li class="card-photo${backdropRead}">
      		<div class="image-wrapper">
         <img class="photo" src="${image()}" alt="${keyword()}" loading="lazy" />
		 </div>
            <div class="card-category">${section_name}</div>
            <button type="button" class="${activeClass}">Add to favorite
            <span><svg class="item-news__block-icon active-news-icon" width="16" height="16" viewBox="0 0 37 32">
    <path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4"
        stroke-width="2.2857"
        d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z">
    </path>
</svg></span></button>
            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
            <span class="card-date">${cardDate}</span>
            <a href="${web_url}" class="card-url">Read more</a>
 ${readText}
            </li>`;
        }
      }
    )
    .join('');

  newsgallery.innerHTML = markup;
}

newsgallery.addEventListener('click', onCardClick);

const cardUrls = document.querySelectorAll('.card-url');
cardUrls.forEach(cardUrl => {
  cardUrl.addEventListener('click', () => {
    cardUrl.parentElement.classList.add('opacity');
  });
});
console.log(cardUrls);
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
    if (favoriteStorage.hasNews(data.url)) {
      favoriteStorage.removeNews(data.url);
      favoriteBtn.classList.replace(
        'favorite-button__activ',
        'add-to-favorite'
      );
      // favoriteBtn.textContent = 'Add to favorite';
      favoriteBtn.innerHTML =
        'Add to favorite <svg class=" active-news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>';
    } else {
      favoriteStorage.addNews(data);
      favoriteBtn.classList.replace(
        'add-to-favorite',
        'favorite-button__activ'
      );
      // favoriteBtn.textContent = 'Remove from favorite ';
      // favoriteBtn.insertAdjacentHTML('beforeend', '');
      favoriteBtn.innerHTML =
        'Remove from favorite  <svg class="news-icon" width="16" height="16" viewBox="0 0 37 32"><path style="stroke: var(--color1, #4440f7)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.2857" d="M10.666 2.286c-4.207 0-7.619 3.377-7.619 7.543 0 3.363 1.333 11.345 14.458 19.413 0.235 0.143 0.505 0.219 0.78 0.219s0.545-0.076 0.78-0.219c13.125-8.069 14.458-16.050 14.458-19.413 0-4.166-3.412-7.543-7.619-7.543s-7.619 4.571-7.619 4.571-3.412-4.571-7.619-4.571z"></path></svg>';
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
    newsCard.classList.add('opacity');
    const headline = newsCard.querySelector('.card-title').textContent;
    newsCard.insertAdjacentHTML(
      'beforeend',
      '<span class="news__read-status">Already read</span>'
    );

    const multimediaSrc = newsCard.querySelector('img').getAttribute('src');
    const multimediaAlt = newsCard.querySelector('img').getAttribute('alt');

    const info = newsCard.querySelector('p').textContent;

    const date = newsCard.querySelector('span').textContent;

    const category = newsCard.querySelector('.card-category').textContent;

    const webUrl = newsCard.querySelector('.card-url').getAttribute('href');

    const readDate = moment(Date.now()).format('DD/MM/YYYY');

    const data = {
      readDate: readDate,
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
