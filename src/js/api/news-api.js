import axios from 'axios';
export const axiosInstance = axios.create();

class nytNewsApi {
  constructor() {
    this.BASE_URL = 'https://api.nytimes.com/svc/';
    this.API_KEY = '73zrfLwsQvyOL4F8B4EmM5lidJ3O3t7Z';
    this.POP_URL = 'mostpopular/v2/viewed/1.json';
    this.SEARCH_URL = 'search/v2/articlesearch.json';
    this.CATEGORY_URL = 'news/v3/content/all/';
    this.totalHits = 0;

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
    // this.currentPage = 1;
    this.categorySearchUrl = `${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`;
  }

  async getMostPopularNews() {
    try {
      const news = await axiosInstance.get(this.mostPopUrl).then(response => {
        if ((response.statusText = 'OK')) {
          // console.log(response.data.num_results);
          this.totalHits = response.data.num_results;
          return response.data.results;
        }
      });
      return news;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getNewsBySearchQuery(query) {
    this.setSearchQuery(query);
    this.setSearchUrl();
    try {
      const news = await axiosInstance.get(this.searchUrl).then(response => {
        if ((response.statusText = 'OK')) {
          console.log(this.searchUrl);
          // console.log(response.data.response.docs);
          if (Math.ceil(response.data.response.meta.hits / 10) > 100) {
            this.totalHits = 100;
          } else {
            this.totalHits = Math.floor(response.data.response.meta.hits / 10);
          }
          return response.data.response.docs;
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
            return response.data.results;
          }
        });
      return categories;
    } catch (error) {
      console.log(error.message);
    }
  }

  async getNewsByCategory(page) {
    this.setPage(page);
    this.setCategorySearchUrl();
    // console.log(this.categorySearchUrl);
    try {
      const news = await axiosInstance
        .get(this.categorySearchUrl)
        .then(response => {
          if ((response.statusText = 'OK')) {
            // console.log(this.categorySearchUrl);
            // console.log(response.data.results);
            this.totalHits = response.data.num_results;
            return response.data.results;
          }
        });
      return news;
    } catch (error) {
      console.log(error.message);
    }
  }

  getTotalHits() {
    console.log(this.totalHits);
    return this.totalHits;
  }

  setPage(page) {
    this.page = page;
  }

  resetPage() {
    this.page = 1;
  }

  getPage() {
    return this.page;
  }

  setSearchQuery(query) {
    this.searchQuery = query;
  }

  setSearchUrl() {
    this.searchUrl = `${this.BASE_URL}${this.SEARCH_URL}?q=${this.searchQuery}&page=${this.page}&api-key=${this.API_KEY}`;
  }

  setCategory(category) {
    this.category = category;
  }

  setCategorySearchUrl() {
    this.categorySearchUrl = `${this.BASE_URL}${this.CATEGORY_URL}${this.category}.json?limit=${this.limit}&offset=${this.page}&api-key=${this.API_KEY}`;
  }
}

export const newsApi = new nytNewsApi();
