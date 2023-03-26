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
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';
import CalendarDates from 'calendar-dates';
import moment from 'moment';

const stateOfPopular = { status: true, pages: [], chunkSize: 8 };
const typeOfSearch = { searchStatus: false, categoriesStatus: false };
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

    stateOfPopular.status = false;
    typeOfSearch.categoriesStatus = false;
    typeOfSearch.searchStatus = true;
    loadWeather();
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

    newsApi.resetPage();
    newsApi.setCategory(category);
    let news = [];
    newsApi.getNewsByCategory(0).then(res => {
      news = res;

      newsApi.getTotalHits();
      renderCategoryMarkup(news);
      loadWeather();

      stateOfPopular.status = false;
      typeOfSearch.categoriesStatus = true;
      typeOfSearch.searchStatus = false;
      pagination.renderPagination(
        pagination.createPagination(Math.ceil(newsApi.getTotalHits() / 8), 1)
      );
    });
  }
}

/* Pagination */

// pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName !== 'UL') {
      onChangePage(ev.target);
      if (stateOfPopular.status) {
        renderMostPopMarkup(
          stateOfPopular.pages[pagination.getCurrentPage() - 1]
        );
        loadWeather();
        return;
      }
      if (typeOfSearch.searchStatus) {
        newsApi.setPage(pagination.getCurrentPage());
        const query = searchQuery.query.value.trim().toLowerCase();
        newsApi.getNewsBySearchQuery(query).then(res => {
          stateOfPopular.status = false;
          pagination.renderPagination(
            pagination.createPagination(
              newsApi.getTotalHits(),
              pagination.getCurrentPage()
            )
          );

          renderMarkup(res);
          loadWeather();
          return;
        });
      }
      if (typeOfSearch.categoriesStatus) {
        newsApi
          .getNewsByCategory((pagination.getCurrentPage() - 1) * 8)
          .then(res => {
            newsApi.getTotalHits();
            renderCategoryMarkup(res);
            loadWeather();

            pagination.renderPagination(
              pagination.createPagination(
                pagination.getTotalPage(),
                pagination.getCurrentPage()
              )
            );
          });
      }

      // let news = [];
      // newsApi.getNewsByCategory(pagination.getCurrentPage()).then(res => {
      //   news = res;
      // console.log(news);
      // });
    }
  });

// ===============filter===================

const filtrButtonsContainerRef = document.querySelector(
  'div.filtr-buttons-container'
);

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);

document.addEventListener('click', closeOtherBtnsMenu);

// ===============date form filter===================

const dateForm = document.querySelector('.date-form');
const dateFormInput = document.querySelector('.date-form__input');

const currentDate = moment().format('DD/MM/YYYY');
dateFormInput.value = currentDate;

var selectedDate;

dateForm.addEventListener('click', dateFilterOpen);

const airDateOption = {
  autoClose: true,
  position: 'bottom center',
  dateFormat: 'dd/MM/yyyy',
  locale: localeEn,
  onSelect: ({ date, formattedDate, datepicker }) => {
    selectedDate = formattedDate;
  },
};

const airDate = new AirDatepicker('.date-form__input', airDateOption);

function dateFilterOpen() {
  airDate.show();
}
