export { renderMarkup };
import { FavoriteStorage, ReadStorage } from './localStorage';
const favoriteStorage = new FavoriteStorage();
const readStorage = new ReadStorage();
const newsgallery = document.querySelector('.gallery__cards-list');

function renderMarkup(searchedNews) {
  const markup = searchedNews
    .map(
      ({
        abstract,
        pub_date,
        multimedia,
        headline,
        keywords,
        web_url,
        section_name,
      }) => {
        let activeClass = '';
        if (
          favoriteStorage.hasNews({
            web_url,
          })
        ) {
          activeClass = 'favorite-button__activ';
        } else {
          activeClass = 'add-to-favorite';
        }

        return `<li class="card-photo">
      		<div class="image-wrapper">
        <img class="photo" src="https://www.nytimes.com/${multimedia[0].url}" alt="${keywords[0].value}" loading="lazy" />
		</div>
            <div class="card-category">${section_name}</div>
            <button type="button" class="${activeClass}">Add to favorite</button>
            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${pub_date}</span>
            <a href="${web_url}" class="card-url">Read more</a>
 
            </li>`;
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
      multimedia: [{ url: multimediaSrc }],
      headline: {
        main: headline,
      },
      web_url: webUrl,
      abstract: info,
      pub_date: date,
      keywords: { value: multimediaAlt },
      section_name: category,
    };
    console.log(data);
    if (favoriteBtn.classList.contains('favorite-button__activ')) {
      favoriteStorage.removeNews(data);
      favoriteBtn.classList.replace(
        'favorite-button__activ',
        'add-to-favorite'
      );
    } else {
      favoriteStorage.addNews(data);
      favoriteBtn.classList.replace(
        'add-to-favorite',
        'favorite-button__activ'
      );
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
      multimedia: [{ url: multimediaSrc }],
      headline: {
        main: headline,
      },
      web_url: webUrl,
      abstract: info,
      pub_date: date,
      keywords: { value: multimediaAlt },
      section_name: category,
    };
    console.log(data);

    readStorage.addNews(data);
    return data;
  }
}
