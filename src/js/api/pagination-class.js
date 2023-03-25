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
        `<button class="pagination__btn pagination__arrow-left"><a class="pagination__link" href="#top">...</a></button>`
      );
      pagination.push(
        '<button class="pagination__btn">1<a class="pagination__link" href="#top">`</a></button>'
      );
      pagination.push(
        '<button class="pagination__btn pre-dots"><a class="pagination__link" href="#top">...</a></button>'
      );
    }

    for (let i of pages) {
      if (i === currentPage) {
        pagination.push(
          `<button class="pagination__current-page"><a class="pagination__link" href="#top">${i}</a></button>`
        );
      } else {
        pagination.push(i);
      }
    }

    if (endPage < totalPages) {
      pagination.push(
        '<button class="pagination__btn post-dots"><a class="pagination__link" href="#top">...</a></button>'
      );
      pagination.push(
        `<button class="pagination__btn"><a class="pagination__link" href="#top">${totalPages}</a></button>`
      );
      pagination.push(
        `<button class="pagination__btn pagination__arrow-right"><a class="pagination__link" href="#top"></a></button>`
      );
    }

    return pagination;
  }
  renderPagination(pag) {
    for (let item of pag) {
      const listItem = document.createElement('li');
      listItem.classList.add('pagination__item');

      if (typeof item === 'number') {
        if (this.currentPage + 2 >= this.totalPages || this.currentPage <= 3) {
          listItem.innerHTML = `<button class="pagination__btn "><a class="pagination__link" href="#top">${item}</a></button>`;
        } else {
          listItem.classList.add('pagination__num');
          listItem.innerHTML = `<button class="pagination__btn pagination__num"><a class="pagination__link" href="#top">${item}</a></button>`;
        }
      } else {
        listItem.innerHTML = item;
      }

      this.paginationContainer.appendChild(listItem);
    }
  }
  genCurrentPage() {
    return this.currentPage;
  }
}
