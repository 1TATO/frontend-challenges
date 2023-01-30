import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8x5kvxCbWpMg6TGs_Da0YNMMJTjF4IYY',
  authDomain: 'chat-229f3.firebaseapp.com',
  projectId: 'chat-229f3',
  storageBucket: 'chat-229f3.appspot.com',
  messagingSenderId: '481076043341',
  appId: '1:481076043341:web:d878be5b29411b193a0604',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
