import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDs9nrlnlOVeUto2aBAAwLNc9y6awzN-CM",
  authDomain: "r-afaction.firebaseapp.com",
  databaseURL:
    "https://r-afaction-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "r-afaction",
  storageBucket: "r-afaction.appspot.com",
  messagingSenderId: "159857331928",
  appId: "1:159857331928:web:7985628f0150a14c2991ad",
  measurementId: "G-6D5Q54EMH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
