import { ReadStorage } from './localStorage';

const readStorage = new ReadStorage();
const news = readStorage.getNews();
console.log(`News: `);
console.log(news);

// Раскоментить это
// const dates = [...new Set(news.map(obj => obj.readDate))];

// Закоментить это
dates = ['27/03/2023', '26/03/2023', '25/03/2023'];

const accordionEl = document.querySelector('.accordion');
console.log('Dates: ' + dates);

function renderAccordion() {
  const markup = dates
    .map(date => {
      return `<div class="container">
        <div class="accordion-date">${date}
        <hr />
            <div class="newsgallery">
                <ul class="gallery__cards-list"></ul>
            </div>
        </div>
      </div>`;
    })
    .join('');
  return markup;
}

/*  */

// function renderFromStorage(news) {
//   const markup = news
//     .map(({ src, title, url, info, published_date, alt, section }) => {
//       return `<li class="card-photo">
//                 <div class="image-wrapper">
//           <img class="photo" src="https://www.nytimes.com/${src}" alt="${alt}" loading="lazy" />
//           </div>
//               <div class="card-category">${section}</div>
//               <button type="button" class="favorite-button__activ">Remove from favorite</button>
//               <h2 class="card-title">${title}</h2>
//               <p class="card-info">${info}</p>
//               <span class="card-date">${published_date}</span>
//               <a href="${url}" class="card-url">Read more</a>

//               </li>`;
//     })
//     .join('');

//   //   favGallery.innerHTML = markup;
// }

/*  */

accordionEl.innerHTML = renderAccordion();

const accordion = document.getElementsByClassName('container');

const labels = document.querySelectorAll('.accordion-date');

// console.log(labels);

labels.forEach(element => {
  //   console.log(element.innerHTML);
  news.map(
    ({ readDate, src, title, url, info, published_date, alt, section }) => {
      console.log('Reading news');
      if (readDate === element.innerText) {
        console.log('Hooraay!!!');
        const markup = `<li class="card-photo">
                <div class="image-wrapper">
          <img class="photo" src="https://www.nytimes.com/${src}" alt="${alt}" loading="lazy" />
          </div>
              <div class="card-category">${section}</div>
              <button type="button" class="favorite-button__activ">Remove from favorite</button>
              <h2 class="card-title">${title}</h2>
              <p class="card-info">${info}</p>
              <span class="card-date">${published_date}</span>
              <a href="${url}" class="card-url">Read more</a>
              </li>`;
        const contentEl = element.querySelector('.gallery__cards-list');
        // console.log(contentEl);
        contentEl.insertAdjacentHTML('beforeend', markup);
      }
    }
  );
});

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
