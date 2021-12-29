import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

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
const storage = getStorage(app);
// const analytics = getAnalytics(app);

const timestamp = serverTimestamp();

export { db, auth, storage, timestamp };
