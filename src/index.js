import { newsApi } from './js/api/news-api';
import { pagination, onChangePage } from './js/pagination';
import { Report } from 'notiflix/build/notiflix-report-aio';
// ===============filter-menu===================

import {
  addCategoriesFilter,
  filtrBtnClickHandler,
  closeOtherBtnsMenu,
  filtrButtonsContainerRef,
  otherCategoryBtnClickHandler,
} from './js/filter-categories';

// =====================search form=================
import { searchInputAnimation } from './js/search-input-animation';

// ==================mobile menu open===================
import { oNmobileMenu } from './js/mobile-menu';

// ==================================================

import { renderMarkup } from './js/rendermarkup';
import { setLoadingFrame, resetLoadingFrame } from './js/main_loading_frame';
import { monitorAuthState } from './js/ui/ui';
// import { auth } from './js/ui/firebase';
import './js/modal';
import { onThemeChange } from './js/switcher';
import { loadWeather } from './js/weather';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import 'air-datepicker/air-datepicker.css';

import { onMobileThemeChange } from './js/switcher-mobile';

// import CalendarDates from 'calendar-dates';

import CalendarDates from 'calendar-dates';
import moment from 'moment';

// ===============filter===================

addCategoriesFilter();

// ==============================
const clientWidth = document.documentElement.clientWidth;
const numberOfNewsCards = () => {
  if (clientWidth <= 768) {
    return 4;
  } else if (clientWidth > 768 && clientWidth <= 1280) {
    return 7;
  } else {
    return 8;
  }
};

filtrButtonsContainerRef.addEventListener('click', filtrBtnClickHandler);
filtrButtonsContainerRef.addEventListener(
  'click',
  otherCategoryBtnClickHandler
);

document.addEventListener('click', closeOtherBtnsMenu);

// ==================================

const stateOfPopular = { status: true, pages: [], numberOfNewsCards: 8 };
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
  setLoadingFrame();
  let news = [];
  newsApi
    .getMostPopularNews()
    .then(res => {
      for (let i = 0; i < res.length; i += numberOfNewsCards()) {
        const chunk = res.slice(i, i + numberOfNewsCards());
        news.push(chunk);
      }
      newsApi.getTotalHits();
      renderMostPopMarkup(news[0]);
      loadWeather();
      stateOfPopular.pages = news;
      pagination.renderPagination(
        pagination.createPagination(stateOfPopular.pages.length, 1)
      );
    })
    .finally(res => resetLoadingFrame());
}

// burger menu

oNmobileMenu();
searchInputAnimation();
// onThemeChange();

/* Firebase auth*/

monitorAuthState();

/* Search by word */

const searchQuery = document.querySelector('.search-form');
searchQuery.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(e) {
  e.preventDefault();
  const query = searchQuery.query.value.trim().toLowerCase();

  if (!query) {
    return;
  }
  setLoadingFrame();
  newsApi.resetPage();
  let news = [];
  newsApi
    .getNewsBySearchQuery(query)
    .then(res => {
      news = res;

      stateOfPopular.status = false;
      typeOfSearch.categoriesStatus = false;
      typeOfSearch.searchStatus = true;
      loadWeather();
      pagination.setCurrentPage(1);
      pagination.renderPagination(
        pagination.createPagination(newsApi.getTotalHits(), 1)
      );

      renderMarkup(news.slice(0, numberOfNewsCards()));
    })
    .catch(er => {
      console.log(er);
      Report.failure('Failure', `Try again later or reload the page`, 'Okay');
    })
    .finally(res => resetLoadingFrame());
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
    setLoadingFrame();
    newsApi.resetPage();
    newsApi.setCategory(category);
    let news = [];
    newsApi
      .getNewsByCategory(0)
      .then(res => {
        news = res;

        console.log(news);
        newsApi.getTotalHits();
        renderCategoryMarkup(news.slice(0, numberOfNewsCards()));
        loadWeather();

        stateOfPopular.status = false;
        typeOfSearch.categoriesStatus = true;
        typeOfSearch.searchStatus = false;
        pagination.setCurrentPage(1);
        pagination.renderPagination(
          pagination.createPagination(
            Math.ceil(newsApi.getTotalHits() / numberOfNewsCards()),
            1
          )
        );
        resetLoadingFrame();
      })
      .catch(er => {
        Report.failure('Failure', `Nothing found here, please return`, 'Okay');
      })
      .finally(res => resetLoadingFrame());
  }
}

/* Pagination */

// pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName !== 'UL') {
      onChangePage(ev.target);
      setLoadingFrame();
      if (stateOfPopular.status) {
        renderMostPopMarkup(
          stateOfPopular.pages[pagination.getCurrentPage() - 1]
        );
        loadWeather();
        resetLoadingFrame();
        return;
      }
      if (typeOfSearch.searchStatus) {
        newsApi.setPage(pagination.getCurrentPage());
        const query = searchQuery.query.value.trim().toLowerCase();
        newsApi
          .getNewsBySearchQuery(query)
          .then(res => {
            stateOfPopular.status = false;

            pagination.renderPagination(
              pagination.createPagination(
                newsApi.getTotalHits(),
                pagination.getCurrentPage()
              )
            );

            renderMarkup(res.slice(0, numberOfNewsCards()));
            loadWeather();
            resetLoadingFrame();
            return;
          })
          .catch(er => {
            Report.failure(
              'Failure',
              `Try again later or reload the page`,
              'Okay'
            );
          })
          .finally(res => resetLoadingFrame());
      }
      if (typeOfSearch.categoriesStatus) {
        newsApi
          .getNewsByCategory(
            (pagination.getCurrentPage() - 1) * numberOfNewsCards()
          )
          .then(res => {
            newsApi.getTotalHits();
            renderCategoryMarkup(res.slice(0, numberOfNewsCards()));
            loadWeather();

            pagination.renderPagination(
              pagination.createPagination(
                pagination.getTotalPage(),
                pagination.getCurrentPage()
              )
            );
          })
          .catch(er => {
            Report.failure(
              'Failure',
              `Nothing found here, please return`,
              'Okay'
            );
          })
          .finally(res => resetLoadingFrame());
      }

      // let news = [];
      // newsApi.getNewsByCategory(pagination.getCurrentPage()).then(res => {
      //   news = res;
      // console.log(news);
      // });
    }
  });

// ===============date form filter===================

const dateForm = document.querySelector('.date-form');
const dateFormInput = document.querySelector('.date-form__input');
const dateFormButton = document.querySelector('.date-form__button');
const dateFormInputIcon = document.querySelector('.date-form__button-icon use');

// const currentDate = moment().format('DD/MM/YYYY');
// dateFormInput.value = currentDate;

var selectedDate;

dateForm.addEventListener('click', e => {
  e.stopPropagation();
});
dateFormButton.addEventListener('click', dateFilterOpenClose);

// let button = {
//   content: 'Clear',
//   className: 'custom-button-classname',
//   onClick: dp => {
//     airDate.hide();
//     airDate.clear(opts);
//   },
// };

const airDateOption = {
  autoClose: true,
  firstDay: 1,
  position: 'bottom center',
  dateFormat: 'dd/MM/yyyy',
  locale: localeEn,
  buttons: ['today', 'clear'],
  // visible: true,
  onSelect: ({ date, formattedDate, datepicker }) => {
    selectedDate = formattedDate;
  },
  onShow: isFinished => {
    dateFormInputIcon.href.baseVal = '/symbol-defs.ec292798.svg#icon-arrow-up';
  },
  onHide: isFinished => {
    dateFormInputIcon.href.baseVal =
      '/symbol-defs.ec292798.svg#icon-arrow-down';
  },
};

const airDate = new AirDatepicker('.date-form__input', airDateOption);

function dateFilterOpenClose(e) {
  e.stopPropagation();
  if (airDate.visible) {
    airDate.hide();
  } else {
    airDate.show();
  }
}
