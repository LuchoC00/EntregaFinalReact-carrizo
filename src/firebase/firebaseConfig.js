// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAW6aVHUsFeRFGhQo1IOFpVtWQpEZfdlGQ',
  authDomain: 'react-carrizo.firebaseapp.com',
  projectId: 'react-carrizo',
  storageBucket: 'react-carrizo.appspot.com',
  messagingSenderId: '645554076281',
  appId: '1:645554076281:web:2a3feee1c2b41a689832a8'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
