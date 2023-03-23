export default class Pagination {
  constructor() {
    this.paginationContainer = document.getElementById('pagination-container');
    this.currentPage = 1;
    this.totalPages;
  }
  createPagination(totalPages, currentPage) {
    this.totalPages = totalPages;
    let startPage, endPage;
    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 4;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    let pagination = [];
    if (startPage > 1) {
      pagination.push('<button class="page__btn"><</button>');
      pagination.push('<button class="page__btn">1</button>');
      pagination.push('<button class="page__btn pre-dots">...</button>');
    }

    for (let i of pages) {
      if (i === currentPage) {
        pagination.push(`<button class="current--page">${i}</button>`);
      } else {
        pagination.push(i);
      }
    }

    if (endPage < totalPages) {
      pagination.push('<button class="page__btn post-dots">...</button>');
      pagination.push(`<button class="page__btn">${totalPages}</button>`);
      pagination.push(`
        <button class="page__btn">></button>`);
    }

    return pagination;
  }
  renderPagination(pag) {
    for (let item of pag) {
      const listItem = document.createElement('li');
      listItem.classList.add('page-item');

      if (item === '<') {
        listItem.innerHTML = `<button class="page__btn">&laquo</button>`;
      } else if (item === '>') {
        listItem.innerHTML = '<button class="page__btn">&raquo</button>';
      } else if (typeof item === 'number') {
        listItem.innerHTML = `<button class="page__btn">${item}</button>`;
      } else {
        listItem.innerHTML = item;
      }

      this.paginationContainer.appendChild(listItem);
    }
  }
}
