import { initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd9mQCohY8OebhHY-N1eNjY1O1PEWbs9A",
  authDomain: "akcxis-website-2bc9b.firebaseapp.com",
  projectId: "akcxis-website-2bc9b",
  storageBucket: "akcxis-website-2bc9b.appspot.com",
  messagingSenderId: "1091618668681",
  appId: "1:1091618668681:web:60159d07cc1abf6b61c658",
  measurementId: "G-XBWGJXTSDH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);