import { axiosInstance, newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';
import { filtrBtnClickHandler } from './js/filter-categories';

// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

pagination.renderPagination(pagination.createPagination(500, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'BUTTON') {
      onChangePage(ev.target);
      let news = [];
      newsApi.getNewsByCategory(pagination.genCurrentPage()).then(res => {
        news = res;
        // console.log(news);
        newsApi.getTotalHits();
      });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector('ul.news__filtr-menu');

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);
