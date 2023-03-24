export {renderMarkup};

const gallery = document.querySelector('.gallery');

function renderMarkup (searchedNews) {
    const markup = searchedNews
    .map(({ abstract, pub_date, multimedia, headline, keywords}) => {
        return `<div class="card">

            <div class="card-photo">
            <div class="photo"><a href="" alt=""></a>
      		<img src="https://www.nytimes.com/${multimedia.url}" alt="${keywords.value}" width = "30" height = "220" loading="lazy" />
		
            <div class="card-category"></div>
            <button type="button" class="add-to-favorite">Add to favorite</button>
	        </div>

            <h2 class="card-title">${headline.main}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${pub_date}</span>
            <button type="button" class="read-more">Read more</button>
 
            </div>`;
}).join('');    

gallery.innerHTML = markup;
}
