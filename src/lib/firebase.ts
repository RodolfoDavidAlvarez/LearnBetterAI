import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyC6j-xJu4TRb4eOocmFFFUimpIKSSp9xXM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "better-systems-ai.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "better-systems-ai",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "better-systems-ai.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "87944804705",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:87944804705:web:f01dbf783bec65333cad20",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-FXJVZJY9KS",
};

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;
let analytics: Analytics | null = null;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  // Only initialize analytics in browser environment
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw error;
}

export { app, db, analytics };
