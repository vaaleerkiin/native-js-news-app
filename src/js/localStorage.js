export class FavoriteStorage {
  constructor() {
    this.KEY = 'FAVORITE_NEWS';
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
    return this.getNews().some(({ url }) => url === item.url);
  }

  removeNews(item) {
    const array = this.getNews();
    array.forEach((news, index) => {
      if (news.url === item.url) {
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
    return this.getNews().some(({ url }) => url === item.url);
  }
}
