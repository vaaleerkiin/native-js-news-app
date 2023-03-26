export class FavoriteStorage {
    constructor() {
      this.KEY = 'FAVORITE_NEWS';
      this.selectedNews = [];
    }
  
    getNews() {
      const news = localStorage.getItem(this.KEY);
      if (news) {
        return JSON.parse(news);
      }
      return [];
    }
  
    addNews(item) {
      const arr = this.getNews();
      if (this.hasNews(item)) {
        return;
      }
      arr.push(item);
      localStorage.setItem(this.KEY, JSON.stringify(arr));
    }
  
    hasNews(item) {
      this.getNews().some(({ web_url }) => web_url === item.web_url);
    }
  
    removeNews(item) {
      const array = this.getNews();
      array.forEach((news, index) => {
        if (news.web_url === item.web_url) {
          array.splice(index, 1);
        }
        return;
      });
      localStorage.setItem(this.KEY, JSON.stringify(array));
    }
  }
  
  export class ReadStorage {
    constructor() {
      this.KEY = 'READ_NEWS';
      this.selectedNews = [];
    }
  
    getNews() {
      const news = localStorage.getItem(this.KEY);
      if (news) {
        return JSON.parse(news);
      }
      return [];
    }
  
    addNews(item) {
      if (this.hasNews(item)) {
        return;
      }
      this.selectedNews.push(item);
      localStorage.setItem(this.KEY, JSON.stringify(this.selectedNews));
    }
  
    hasNews(item) {
      this.selectedNews.some(({ web_url }) => web_url === item.web_url);
    }
  }