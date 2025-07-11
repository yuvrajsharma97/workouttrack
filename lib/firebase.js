// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYA_F5QM9ORyjBA0u3qb_Y6s6FHnPVW-g",
  authDomain: "workouttracker-3e11b.firebaseapp.com",
  projectId: "workouttracker-3e11b",
  storageBucket: "workouttracker-3e11b.firebasestorage.app",
  messagingSenderId: "695427746807",
  appId: "1:695427746807:web:caf5116cf4895596007cf2",
  measurementId: "G-DKQ6C1G346",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
