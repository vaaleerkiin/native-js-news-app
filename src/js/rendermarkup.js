import moment from "moment/moment";
export {renderMarkup};

const newsgallery = document.querySelector('.gallery__cards-list');

function renderMarkup (searchedNews) {
    const markup = searchedNews
    .map(({ abstract, pub_date, multimedia, headline, keywords, web_url, section_name }, index) => {
       if (index < 8) {
        const cardDate = moment(pub_date).format('DD/MM/YYYY');
              
        return `<li class="card-photo">
      		<div class="image-wrapper">
        <img class="photo" src="https://www.nytimes.com/${multimedia[0].url}" alt="${keywords[0].value}" loading="lazy" />
		</div>
            <div class="card-category">${section_name}</div>
            <button type="button" class="add-to-favorite">Add to favorite<svg class="add-to-favorite__icon" width="16" height="16">
            <use href="./images/icons.svg#heart"></use>
            </svg>
            </button>

            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
            <span class="card-date">${cardDate}</span>
            <a href="${web_url}" alt="" class="read-more">Read more</a>
 
            </li>`;
       }
       else {
        return;
    }
}).join('');    

newsgallery.innerHTML = markup;
}


