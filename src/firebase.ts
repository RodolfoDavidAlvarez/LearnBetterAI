import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics only in browser environment
const analytics = typeof window !== "undefined" && process.env.NODE_ENV === "production" ? getAnalytics(app) : null;

// Initialize Firestore
const db = getFirestore(app);

// Helper function to add a lead to Firestore
export const addLead = async (name: string, email: string) => {
  try {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const docRef = await addDoc(collection(db, "leads"), {
      name,
      email,
      timestamp: new Date(),
    });
    console.log("Lead added with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding lead: ", error);
    throw error;
  }
};

export { app, analytics, db };
