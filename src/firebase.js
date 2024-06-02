// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC-9OcB9aybhy8oxqWytMXthjTKHfbdPpQ",
  authDomain: "studimate-785f6.firebaseapp.com",
  projectId: "studimate-785f6",
  storageBucket: "studimate-785f6.appspot.com",
  messagingSenderId: "4298038898",
  appId: "1:4298038898:web:bf7e78c7db3dac55a92ceb",
  measurementId: "G-9LQEH0WDGZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
