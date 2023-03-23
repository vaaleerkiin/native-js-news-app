import axios from 'axios';
const API_KEY = '73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z';
const BASE_URL = 'https://api.nytimes.com/svc/';
const POP_URL = 'mostpopular/v2/viewed/1.json';
const SEARCH_URL = 'search/v2/articlesearch.json';
const CATEGORY_URL = 'news/v3/content/nyt/';

const axiosInstance = axios.create({
  //   timeout: 1000,
});

// Get most popular news

const mostPopUrl = `${BASE_URL}${POP_URL}?api-key=${API_KEY}`;

async function getMostPopularNews(url) {
  try {
    const news = await axiosInstance.get(url).then(response => {
      if ((response.statusText = 'OK')) {
        console.log(response.data.results);
      }
    });
    return news;
  } catch (error) {
    console.log(error.message);
  }
}

// getMostPopularNews(mostPopUrl);

// Search by keyword

const page = 1;
const searchQuery = `election`;
const searchUrl = `${BASE_URL}${SEARCH_URL}?q=${searchQuery}&page=${page}&api-key=${API_KEY}`;

async function getNewsBySearchQuery(url) {
  try {
    const news = await axiosInstance.get(url).then(response => {
      if ((response.statusText = 'OK')) {
        console.log(response.data.response.docs);
      }
    });
    return news;
  } catch (error) {
    console.log(error.message);
  }
}

// getNewsBySearchQuery(searchUrl);

// Get categories list from server

async function getCategories() {
  const sectionListUrl = `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`;
  try {
    const categories = await axiosInstance
      .get(sectionListUrl)
      .then(response => {
        if ((response.statusText = 'OK')) {
          console.log(response.data.results);
        }
      });
    return categories;
  } catch (error) {
    console.log(error.message);
  }
}

// getCategories();

// Get news by category

const category = 'world';
const limit = 20;
const currentPage = 5;
const categorySearchUrl = `${BASE_URL}${CATEGORY_URL}${category}.json?limit=${limit}&offset=${currentPage}&api-key=${API_KEY}`;

async function getNewsByCategory(url) {
  try {
    const news = await axiosInstance.get(url).then(response => {
      if ((response.statusText = 'OK')) {
        console.log(response.data.results);
      }
    });
    return news;
  } catch (error) {
    console.log(error.message);
  }
}

// getNewsByCategory(categorySearchUrl);
