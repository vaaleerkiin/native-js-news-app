import { ReadStorage } from './localStorage';

const readStorage = new ReadStorage();
const news = readStorage.getNews();

// News array for test
// const news = [
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '27/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '27/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '26/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '26/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '25/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
//   {
//     alt: 'Politics and Government, Speeches and Statements',
//     info: 'Protests broke out shortly after Prime Minister Benjamin Netanyahu fired the defense minister, who had called for a halt to efforts to weaken the judiciary.',
//     published_date: '2023-03-26',
//     readDate: '25/03/2023',
//     section: 'World',
//     src: 'https://static01.nyt.com/images/2023/03/26/multimedia/26israel-new-mwcq-promo/26israel-new-mwcq-mediumThreeByTwo440.jpg',
//     title: 'Israel Boils as Netanyahu Ousts Minister Who Bucked Court Overhaul',
//     url: 'https://www.nytimes.com/2023/03/26/world/middleeast/judiciary-overhaul-benjamin-netanyahu-israel-parliament.html',
//   },
// ];

// Uncomment this
// const dates = [...new Set(news.map(obj => obj.readDate))];

// Comment this
dates = ['27/03/2023', '26/03/2023', '25/03/2023'];

const accordionEl = document.querySelector('.accordion');
// console.log('Dates: ' + dates);

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

accordionEl.innerHTML = renderAccordion();
const accordion = document.getElementsByClassName('container');
const labels = document.querySelectorAll('.accordion-date');

// console.log(labels);
// { readDate, src, title, url, info, published_date, alt, section }
console.log(`News: `);
console.log(news);

labels.forEach(element => {
  const accordionElDate = element.innerText;
  console.log(`Checking for ${accordionElDate}`);
  news.map(
    ({ readDate, src, title, url, info, published_date, alt, section }) => {
      // console.log(el);
      // const readDate = el.readDate;
      // const src = el.src;
      // const title = el.title;
      // const url = el.url;
      // const info = el.info;
      // const published_date = el.published_date;
      // const alt = el.alt;
      // const section = el.section;
      // console.log('Reading news date: ' + readDate);
      if (readDate === accordionElDate) {
        //   console.log(readDate === accordionElDate);
        //   console.log(readDate);
        //   console.log('Hooraay!!!');
        const markup = `<li class="card-photo">
                <div class="image-wrapper">
          <img class="photo" src="${src}" alt="${alt}" loading="lazy" />
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
