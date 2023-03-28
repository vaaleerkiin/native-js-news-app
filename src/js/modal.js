import { auth } from './ui/firebase';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  openModalBtn2: document.querySelector('[data-modal-open2]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', loginLogout);
refs.openModalBtn2.addEventListener('click', loginLogout);
refs.closeModalBtn.addEventListener('click', onCloseModal);

export function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function loginLogout() {
  if (refs.openModalBtn.textContent === 'Logout') {
    onLogout();
  } else {
    toggleModal();
  }
}

function onCloseModal() {
  toggleModal();
  document.getElementById('modal-error-message-area').textContent = '';
  document.querySelector('.order-form').reset();
}

async function onLogout() {
  const userSignOut = await auth.signOut();
}
