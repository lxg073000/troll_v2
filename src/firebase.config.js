// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1R8ekQvW0IHRKg4oqb5G6WeUmKuMV-Kg",
  authDomain: "troll-ffa08.firebaseapp.com",
  projectId: "troll-ffa08",
  storageBucket: "troll-ffa08.appspot.com",
  messagingSenderId: "119706072761",
  appId: "1:119706072761:web:dcf943a684f2dfb2584d68",
  measurementId: "G-BTWDY4KTY4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

const timestamp = serverTimestamp();

export { db, auth, timestamp };
