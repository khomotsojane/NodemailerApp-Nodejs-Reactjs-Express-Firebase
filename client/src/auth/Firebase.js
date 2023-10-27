
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQp-tHrpKZtRSGg3zJJsBoA-fg2g3q9oQ",
  authDomain: "employeeapp-6ff71.firebaseapp.com",
  projectId: "employeeapp-6ff71",
  storageBucket: "employeeapp-6ff71.appspot.com",
  messagingSenderId: "68135098490",
  appId: "1:68135098490:web:779233d3ebb80ce3fe83c3",
  measurementId: "G-VZL7B8W1ND"
};

export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firestore_db = getFirestore(firebase_app);
