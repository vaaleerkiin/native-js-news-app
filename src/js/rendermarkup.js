export {renderMarkup};

const newsgallery = document.querySelector('.gallery__cards-list');

function renderMarkup (searchedNews) {
    const markup = searchedNews
    .map(({ abstract, pub_date, multimedia, headline, keywords, web_url, section_name }) => {
        return `<li class="card-photo"><a href="" alt=""></a>
      		<div class="image-wrapper">
        <img class="photo" src="https://www.nytimes.com/${multimedia[0].url}" alt="${keywords[0].value}" loading="lazy" />
		</div>
            <div class="card-category">${section_name}</div>
            <button type="button" class="add-to-favorite">Add to favorite</button>

            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${pub_date}</span>
            <a href="${web_url}" alt="">Read more</a>
 
            </li>`;
}).join('');    

newsgallery.innerHTML = markup;
}


