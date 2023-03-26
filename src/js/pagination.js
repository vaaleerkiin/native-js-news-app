import Pagination from './api/pagination-class';
export let pagination = new Pagination();

export async function onChangePage(ev) {
  if (ev.classList.contains('pagination__arrow-left')) {
    pagination.currentPage = +pagination.currentPage - 1;
    pagination.paginationContainer.innerHTML = '';
    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.classList.contains('pagination__arrow-right')) {
    pagination.currentPage = +pagination.currentPage + 1;
    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.classList.contains('post-dots')) {
    pagination.currentPage = Math.ceil(
      (+pagination.currentPage + +pagination.totalPages) / 2
    );
    pagination.paginationContainer.innerHTML = '';
    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.classList.contains('pre-dots')) {
    pagination.currentPage = Math.ceil(+pagination.currentPage / 2);
    pagination.paginationContainer.innerHTML = '';
    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else {
    ev = ev.textContent;
    pagination.currentPage = +ev;
    pagination.paginationContainer.innerHTML = '';
    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );
    pagination.renderPagination(pag);
  }
}
