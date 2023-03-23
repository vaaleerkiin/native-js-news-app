import axios from 'axios';
export const axiosInstance = axios.create();

class nytNewsApi {
  constructor() {
    this.BASE_URL = 'https://api.nytimes.com/svc/';
    this.API_KEY = '73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z';
    this.POP_URL = 'mostpopular/v2/viewed/1.json';
    this.SEARCH_URL = 'search/v2/articlesearch.json';
    this.CATEGORY_URL = 'news/v3/content/nyt/';

    // Most popular search
    this.mostPopUrl = `${this.BASE_URL}${this.POP_URL}?api-key=${this.API_KEY}`;
    // Search by keyword
    this.page = 1;
    this.searchQuery = `election`;
    this.searchUrl = `${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`;
    // Sections
    this.sectionListUrl = `${this.BASE_URL}news/v3/content/section-list.json?api-key=${this.API_KEY}`;
    // Category search
    this.category = 'world';
    this.limit = 20;
    this.currentPage = 1;
    this.categorySearchUrl = `${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.currentPage}&api-key=${this.API_KEY}`;
  }

  async getMostPopularNews() {
    try {
      const news = await axiosInstance.get(this.mostPopUrl).then(response => {
        if ((response.statusText = 'OK')) {
          console.log(response.data.results);
        }
      });
      return news;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getNewsBySearchQuery() {
    try {
      const news = await axiosInstance.get(this.searchUrl).then(response => {
        if ((response.statusText = 'OK')) {
          console.log(response.data.response.docs);
        }
      });
      return news;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getCategories() {
    try {
      const categories = await axiosInstance
        .get(this.sectionListUrl)
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

  async getNewsByCategory() {
    try {
      const news = await axiosInstance
        .get(this.categorySearchUrl)
        .then(response => {
          if ((response.statusText = 'OK')) {
            console.log(response.data.results);
          }
        });
      return news;
    } catch (error) {
      console.log(error.message);
    }
  }
}

export const newsApi = new nytNewsApi();

/* TMP Section to delete */

// newsApi.getMostPopularNews();
// newsApi.getNewsBySearchQuery();
// newsApi.getCategories();
// newsApi.getNewsByCategory();

// const API_KEY = '73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z';
// const BASE_URL = 'https://api.nytimes.com/svc/';
// const POP_URL = 'mostpopular/v2/viewed/1.json';
// const SEARCH_URL = 'search/v2/articlesearch.json';
// const CATEGORY_URL = 'news/v3/content/nyt/';

// // Get most popular news

// const mostPopUrl = `${BASE_URL}${POP_URL}?api-key=${API_KEY}`;

// async function getMostPopularNews(url) {
//   try {
//     const news = await axiosInstance.get(url).then(response => {
//       if ((response.statusText = 'OK')) {
//         console.log(response.data.results);
//       }
//     });
//     return news;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // getMostPopularNews(mostPopUrl);

// // Search by keyword

// const page = 1;
// const searchQuery = `election`;
// const searchUrl = `${BASE_URL}${SEARCH_URL}?q=${searchQuery}&page=${page}&api-key=${API_KEY}`;

// async function getNewsBySearchQuery(url) {
//   try {
//     const news = await axiosInstance.get(url).then(response => {
//       if ((response.statusText = 'OK')) {
//         console.log(response.data.response.docs);
//       }
//     });
//     return news;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // getNewsBySearchQuery(searchUrl);

// // Get categories list from server

// async function getCategories() {
//   const sectionListUrl = `${BASE_URL}news/v3/content/section-list.json?api-key=${API_KEY}`;
//   try {
//     const categories = await axiosInstance
//       .get(sectionListUrl)
//       .then(response => {
//         if ((response.statusText = 'OK')) {
//           console.log(response.data.results);
//         }
//       });
//     return categories;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // getCategories();

// // Get news by category

// const category = 'world';
// const limit = 20;
// const currentPage = 1;
// const categorySearchUrl = `${BASE_URL}${CATEGORY_URL}${category}.json?limit=${limit}&offset=${currentPage}&api-key=${API_KEY}`;

// async function getNewsByCategory(url) {
//   try {
//     const news = await axiosInstance.get(url).then(response => {
//       if ((response.statusText = 'OK')) {
//         console.log(response.data.results);
//       }
//     });
//     return news;
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // getNewsByCategory(categorySearchUrl);
