// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDO9IZLg63MyeSKfn5XReX1uF_bsahW2os',
  authDomain: 'blog-app-67413.firebaseapp.com',
  projectId: 'blog-app-67413',
  storageBucket: 'blog-app-67413.appspot.com',
  messagingSenderId: '847006929177',
  appId: '1:847006929177:web:24bbc83e9961e4250c7588',
  measurementId: 'G-KPZJW498J0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
