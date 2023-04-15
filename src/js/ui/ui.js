import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth';
import { toggleModal } from '../modal';
import { async } from '@firebase/util';

const logInFormEl = document.querySelector('.order-form');
logInFormEl.addEventListener('submit', userLogIn);

const registerButtonEl = document.getElementById('register-button');
registerButtonEl.addEventListener('click', newUserRegistration);

const loginStateEl = document.querySelector('.loginState');
const loginSignupEl = document.querySelector('.button-authorization');
const modalErrorMessageAreaEl = document.getElementById(
  'modal-error-message-area'
);

async function newUserRegistration() {
  const email = logInFormEl.email.value.trim();
  const password = logInFormEl.password.value;
  const validator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!password.match(validator)) {
    modalErrorMessageAreaEl.textContent =
      'A password must be between 6 to 20 characters and contain at least one numeric digit, one uppercase and one lowercase letter.';
    if (modalErrorMessageAreaEl.classList.contains('modal-err-message')) {
      modalErrorMessageAreaEl.classList.remove('modal-err-message');
    }
    if (modalErrorMessageAreaEl.classList.contains('modal-ok-message')) {
      modalErrorMessageAreaEl.classList.remove('modal-ok-message');
    }
    modalErrorMessageAreaEl.classList.add('modal-err-message');
    return;
  }
  // console.log(email, password);
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      if (user) {
        // console.log(user);
        sendEmailVerification(auth.currentUser).then(() => {
          modalErrorMessageAreaEl.textContent = 'Email verification sent.';
          console.log('Email verification sent!');
          if (modalErrorMessageAreaEl.classList.contains('modal-err-message')) {
            modalErrorMessageAreaEl.classList.remove('modal-err-message');
          }
          if (modalErrorMessageAreaEl.classList.contains('modal-ok-message')) {
            modalErrorMessageAreaEl.classList.remove('modal-ok-message');
          }
          modalErrorMessageAreaEl.classList.add('modal-ok-message');
        });
      }
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      modalErrorMessageAreaEl.textContent = errorMessage;
    });
}

export async function userLogIn(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  // console.log(email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).then(res => {
      if (res.user) {
        toggleModal();
        logInFormEl.reset();
        modalErrorMessageAreaEl.textContent = '';
      }
    });
    // console.log(userCredential.user);
  } catch (error) {
    modalErrorMessageAreaEl.textContent =
      'Wrong email or password. Please, try again.';
    console.log(error.message);
    if (modalErrorMessageAreaEl.classList.contains('modal-err-message')) {
      modalErrorMessageAreaEl.classList.remove('modal-err-message');
    }
    if (modalErrorMessageAreaEl.classList.contains('modal-ok-message')) {
      modalErrorMessageAreaEl.classList.remove('modal-ok-message');
    }
    modalErrorMessageAreaEl.classList.add('modal-err-message');
  }
}

function showLoginState(user) {
  // Additional info. Just paste in to innerHTML
  // <p><b>You are logged in as:</b> ${user.displayName}</p>
  // <p><b>userID:</b> ${user.uid}</p>
  loginStateEl.innerHTML = `<p>${user.email}</p>`;
}

export async function monitorAuthState() {
  onAuthStateChanged(auth, user => {
    if (user) {
      loginSignupEl.textContent = 'Logout';
      showLoginState(user);
    } else {
      loginSignupEl.textContent = 'Log In';
      loginStateEl.innerHTML = '';
    }
  });
}
