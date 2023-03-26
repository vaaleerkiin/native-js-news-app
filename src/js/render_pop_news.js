const newsGalleryEl = document.querySelector('.gallery__cards-list');

export function renderMostPopMarkup(news) {
  const markup = news
    .map(
      (
        { abstract, published_date, media, title, des_facet, url, section },
        index
      ) => {
        if (index < 8) {
          let image;
          if (media[0]) {
            image = media[0]['media-metadata'][2].url;
          } else {
            image = `https://source.unsplash.com/random/300x300/?${des_facet[0]}`;
          }
          return `<li class="card-photo">
      		<div class="image-wrapper">
                <img class="photo" src="${image}" alt="${des_facet
            .map(val => val)
            .join(', ')}" loading="lazy" />
		    </div>
            <div class="card-category">${section}</div>
            <button type="button" class="add-to-favorite">Add to favorite</button>
            <h2 class="card-title">${title}</h2>
            <p class="card-info">${abstract}</p>
	        <span class="card-date">${published_date}</span>
            <a href="${url}" alt="" target="_blank"
                rel="noopener noreferrer nofollow">Read more</a>
            </li>`;
        }
      }
    )
    .join('');

  newsGalleryEl.innerHTML = markup;
}
