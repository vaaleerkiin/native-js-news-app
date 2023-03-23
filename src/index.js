import { axiosInstance, newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';

// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'BUTTON') {
      onChangePage(ev.target);
      //   console.log(pagination.genCurrentPage());
      const page = pagination.genCurrentPage();
      //   console.log(page);
      newsApi.setPage(page);
      newsApi.setCategorySearchUrl();
      console.log('page in news API: ' + newsApi.getPage());
      let news = [];
      newsApi.getNewsByCategory().then(res => {
        news = res;
        // console.log(news);
        newsApi.getTotalHits();
      });
    }
  });

// let news = [];
// newsApi.getNewsByCategory().then(res => {
//   news = res;
//   console.log(news);
//   newsApi.getTotalHits();
// });
