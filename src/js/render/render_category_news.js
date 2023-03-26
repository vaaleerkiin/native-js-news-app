const newsGalleryEl = document.querySelector('.gallery__cards-list');

export function renderCategoryMarkup(news) {
  const markup = news
    .map(
      (
        {
          abstract,
          published_date,
          multimedia,
          title,
          des_facet,
          url,
          section,
        },
        index
      ) => {
        if (index < 8) {
          let image;
          if (multimedia[2]) {
            image = multimedia[2].url;
          } else {
            if (des_facet) {
              image = `https://source.unsplash.com/random/300x300/?${des_facet[0]}`;
            } else {
              image = `https://source.unsplash.com/random/300x300/?${section}`;
            }
          }
          let alt;
          if (des_facet) {
            alt = des_facet.map(val => val).join(', ');
          }
          return `<li class="card-photo">
      		<div class="image-wrapper">
                <img class="photo" src="${image}" alt="${alt}" loading="lazy" />
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
