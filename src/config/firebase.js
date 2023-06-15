// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk5FI9JB73BIdfKS66a2Ci_wAPKVvu4ag",
  authDomain: "tumadin-908ba.firebaseapp.com",
  projectId: "tumadin-908ba",
  storageBucket: "tumadin-908ba.appspot.com",
  messagingSenderId: "967572224276",
  appId: "1:967572224276:web:2ef3716229916738e02a01",
  measurementId: "G-3MLX2YW4Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const storage = getStorage(app)