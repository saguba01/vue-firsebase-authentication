// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7-Iv74701_4AVsXJSBA87R5vRkwVvzWo",
  authDomain: "vue-authen-c7064.firebaseapp.com",
  projectId: "vue-authen-c7064",
  storageBucket: "vue-authen-c7064.appspot.com",
  messagingSenderId: "23061200357",
  appId: "1:23061200357:web:3c351c562ba5371b09830c",
  measurementId: "G-6W99FW4EY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default {
    Firebase : app,
    Analytics : analytics,
    GoogleAuth : GoogleAuthProvider
} ;