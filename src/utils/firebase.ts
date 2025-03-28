// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6j-xJu4TRb4eOocmFFFUimpIKSSp9xXM",
  authDomain: "better-systems-ai.firebaseapp.com",
  projectId: "better-systems-ai",
  storageBucket: "better-systems-ai.firebasestorage.app",
  messagingSenderId: "87944804705",
  appId: "1:87944804705:web:f01dbf783bec65333cad20",
  measurementId: "G-FXJVZJY9KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, addDoc, serverTimestamp };