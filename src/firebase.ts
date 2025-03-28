import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6j-xJu4TRb4eOocmFFFUimpIKSSp9xXM",
  authDomain: "better-systems-ai.firebaseapp.com",
  projectId: "better-systems-ai",
  storageBucket: "better-systems-ai.firebasestorage.app",
  messagingSenderId: "87944804705",
  appId: "1:87944804705:web:f01dbf783bec65333cad20",
  measurementId: "G-FXJVZJY9KS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firestore
const db = getFirestore(app);

// Helper function to add a lead to Firestore
export const addLead = async (name: string, email: string) => {
  try {
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
