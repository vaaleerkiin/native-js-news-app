import { auth } from './ui/firebase';

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
};

refs.openModalBtn.addEventListener('click', loginLogout);
refs.closeModalBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

function loginLogout() {
  if (refs.openModalBtn.textContent === 'Logout') {
    onLogout();
  } else {
    toggleModal();
  }
}

async function onLogout() {
  const userSignOut = await auth.signOut();
}
//1233
