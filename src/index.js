import { newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';

// ===============filter-menu===================
import { filtrBtnClickHandler } from './js/filter-categories';
import { closeOtherBtnsMenu } from './js/filter-categories';
import { categoriesList } from './js/filter-categories';

// =====================search form=================
import { searchInputAnimation } from './js/search-input-animation';

// ==================mobile menu open===================
import { oNmobileMenu } from './js/mobile-menu';

// ==================================================

import { renderMarkup } from './js/rendermarkup';
import { monitorAuthState } from './js/ui/ui';
// import { auth } from './js/ui/firebase';
import './js/modal';
import { onThemeChange } from './js/switcher';
import { loadWeather } from './js/weather';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
// import CalendarDates from 'calendar-dates';
const stateOfPopular = { status: true, pages: [], chunkSize: 8 };

// newsApi.getCategories(); // Returns list of 50 categories
// newsApi.getMostPopularNews(); // Returns array of Most popular news
// newsApi.getNewsBySearchQuery(); // Returns array of articles by search word. Can get pages
// newsApi.getNewsByCategory(); // Returns array of articles by category. Can get pages

/* On page load */

import { renderMostPopMarkup } from './js/render/render_pop_news';

onLoad();

function onLoad() {
  newsApi.resetPage();
  let news = [];
  newsApi.getMostPopularNews().then(res => {
    for (let i = 0; i < res.length; i += 8) {
      const chunk = res.slice(i, i + 8);
      news.push(chunk);
    }
    console.log(news);
    newsApi.getTotalHits();
    renderMostPopMarkup(news[0]);
    loadWeather();
    stateOfPopular.pages = news;

    pagination.renderPagination(pagination.createPagination(3, 1));
  });
}

// burger menu

oNmobileMenu();
searchInputAnimation();

/* Firebase auth*/

monitorAuthState();

/* Search by word */

const searchQuery = document.querySelector('.search-form');
searchQuery.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const query = searchQuery.query.value.trim().toLowerCase();
  // console.log(query);
  if (!query) {
    return;
  }
  newsApi.resetPage();
  let news = [];
  newsApi.getNewsBySearchQuery(query).then(res => {
    news = res;
    console.log(news);
    stateOfPopular.status = false;
    pagination.renderPagination(
      pagination.createPagination(newsApi.getTotalHits(), 1)
    );

    renderMarkup(news);
  });
}

/* Search by category */

import { renderCategoryMarkup } from './js/render/render_category_news';

const newsNavigationEl = document.querySelector('.news-navigation');
newsNavigationEl.addEventListener('click', onCategoryBtnClick);

function onCategoryBtnClick(e) {
  // console.log(e.target);
  if (e.target.tagName.toLowerCase() !== 'button') {
    return;
  } else {
    // console.log('Click');
    const categoryBtn = e.target.closest('BUTTON');
    const category = categoryBtn.textContent.trim().toLowerCase();
    if (category === 'others') {
      return;
    }
    console.log(category);
    newsApi.resetPage();
    newsApi.setCategory(category);
    let news = [];
    newsApi.getNewsByCategory(1).then(res => {
      news = res;
      console.log(news);
      newsApi.getTotalHits();
      renderCategoryMarkup(news);
      loadWeather();
      console.log(newsApi.getTotalHits());
    });
  }
}

/* Pagination */

// pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    console.log(ev.target.nodeName);
    if (ev.target.nodeName === 'A') {
      if (stateOfPopular.status) {
        onChangePage(ev.target);
        console.log(pagination.genCurrentPage());
        renderMostPopMarkup(
          stateOfPopular.pages[pagination.genCurrentPage() - 1]
        );

        return;
      }

      onChangePage(ev.target);
      let news = [];
      newsApi.getNewsByCategory(pagination.genCurrentPage()).then(res => {
        news = res;
        // console.log(news);
      });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);

document.addEventListener('click', closeOtherBtnsMenu);

// ===============date form filter===================

const dateForm = document.querySelector('.date-form__input');
const dateFormButton = document.querySelector('.date-form__input');

dateForm.addEventListener('click', dateFilterOpen);

function dateFilterOpen() {
  new AirDatepicker('.date-form__input', {
    autoClose: true,
    position: 'bottom center',
    dateFormat: 'dd/MM/yyyy',
  });
}

// const calendarDates = new CalendarDates();

// const main = async () => {
//   for (const meta of await calendarDates.getDates(new Date())) {
//     console.log(meta);
//   }

//   for (const meta of await calendarDates.getMatrix(new Date())) {
//     console.log(meta);
//   }
// };

// main();
