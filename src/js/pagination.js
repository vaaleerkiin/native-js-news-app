import Pagination from './api/pagination-class';
let pagination = new Pagination();

pagination.renderPagination(pagination.createPagination(50, 1));

document
  .getElementById('pagination-container')
  .addEventListener('click', ev => {
    if (ev.target.nodeName === 'BUTTON') {
      onChangePage(ev.target);
    }
  });

async function onChangePage(ev) {
  if (ev.textContent == '<') {
    pagination.currentPage = +pagination.currentPage - 1;

    // const response = await fetchNewData.makeRequest(queryValue);
    pagination.paginationContainer.innerHTML = '';
    // clearAMarkup();

    // renderMarkup(response.hits);

    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.textContent === '>') {
    pagination.currentPage = +pagination.currentPage + 1;

    // const response = await fetchNewData.makeRequest(queryValue);
    pagination.paginationContainer.innerHTML = '';
    // clearAMarkup();

    // renderMarkup(response.hits);

    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.classList.contains('post-dots')) {
    pagination.currentPage = Math.ceil(
      (+pagination.currentPage + +pagination.totalPages) / 2
    );

    // const response = await fetchNewData.makeRequest(queryValue);
    pagination.paginationContainer.innerHTML = '';
    // clearAMarkup();

    // renderMarkup(response.hits);

    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else if (ev.classList.contains('pre-dots')) {
    pagination.currentPage = Math.ceil(+pagination.currentPage / 2);

    // const response = await fetchNewData.makeRequest(queryValue);
    pagination.paginationContainer.innerHTML = '';
    // clearAMarkup();

    // renderMarkup(response.hits);

    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  } else {
    ev = ev.textContent;
    pagination.currentPage = +ev;
    // const response = await fetchNewData.makeRequest(queryValue);
    pagination.paginationContainer.innerHTML = '';
    // clearAMarkup();

    // renderMarkup(response.hits);

    const pag = pagination.createPagination(
      pagination.totalPages,
      pagination.currentPage
    );

    pagination.renderPagination(pag);
  }
}
