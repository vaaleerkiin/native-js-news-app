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
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 3;
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
      pagination.push(
        `<a class="pagination__btn pagination__arrow-left" href="#top"><span class="pagination__icon pagination__arrow-left"></span> Prew</a>`
      );
      pagination.push('<a class="pagination__btn" href="#top">1</a>');
      pagination.push(
        '<a class="pagination__btn pre-dots" href="#top">...</a>'
      );
    }

    for (let i of pages) {
      if (i === currentPage) {
        pagination.push(
          `<a class="pagination__btn pagination__current-page" href="#top">${i}</a>`
        );
      } else {
        pagination.push(i);
      }
    }

    if (endPage < totalPages) {
      pagination.push(
        '<a class="pagination__btn post-dots" href="#top">...</a>'
      );
      pagination.push(
        `<a class="pagination__btn" href="#top">${totalPages}</a>`
      );
      pagination.push(
        `<a class="pagination__btn pagination__arrow-right" href="#top">Next <span class="pagination__icon pagination__arrow-right"></span></a>`
      );
    }

    return pagination;
  }
  renderPagination(pag) {
    this.paginationContainer.innerHTML = '';
    for (let item of pag) {
      const listItem = document.createElement('li');
      listItem.classList.add('pagination__item');

      if (typeof item === 'number') {
        if (this.currentPage + 2 >= this.totalPages || this.currentPage <= 3) {
          listItem.innerHTML = `<a class="pagination__btn" href="#top">${item}</a>`;
        } else {
          listItem.classList.add('pagination__num');
          listItem.innerHTML = `<a class="pagination__btn pagination__num" href="#top">${item}</a>`;
        }
      } else {
        listItem.innerHTML = item;
      }

      this.paginationContainer.appendChild(listItem);
    }
  }
  getCurrentPage() {
    return this.currentPage;
  }
  getTotalPage() {
    return this.totalPages;
  }
}
