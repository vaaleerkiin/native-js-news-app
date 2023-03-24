import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

const loginStateEl = document.querySelector('.loginState');
const loginSignupEl = document.querySelector('.button-authorization');

// const logoutButtonEl = document.getElementById('logout');

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
    );
    console.log(userCredential.user);
  } catch (error) {
    console.log(error.message);
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
      // console.log(user);
      // loginSignupEl.classList.add('hidden');
      // logoutButtonEl.classList.remove('hidden');
      loginSignupEl.textContent = 'Logout';
      showLoginState(user);
    } else {
      // loginSignupEl.classList.remove('hidden');
      // logoutButtonEl.classList.add('hidden');
      loginStateEl.innerHTML = '<p><b>You are not logged in.</b></p>';
    }
  });
}
