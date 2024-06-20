// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqXv3AnfZpgr9I4aMdXUktGS9TiI7v9Lk",
  authDomain: "e-commerce-cb8f3.firebaseapp.com",
  projectId: "e-commerce-cb8f3",
  storageBucket: "e-commerce-cb8f3.appspot.com",
  messagingSenderId: "726530482949",
  appId: "1:726530482949:web:15ae5f9afc933f117f0d6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app, auth };

