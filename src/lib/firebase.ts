import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getStorage, FirebaseStorage } from "firebase/storage";
import { getAuth, Auth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6j-xJu4TRb4eOocmFFFUimpIKSSp9xXM",
  authDomain: "better-systems-ai.firebaseapp.com",
  projectId: "better-systems-ai",
  storageBucket: "better-systems-ai.appspot.com",
  messagingSenderId: "87944804705",
  appId: "1:87944804705:web:f01dbf783bec65333cad20",
  measurementId: "G-FXJVZJY9KS",
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;
let analytics: Analytics | null = null;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  // Initialize Auth with persistence
  auth = getAuth(app);
  console.log("Firebase Auth initialized successfully");

  // Initialize Firestore
  db = getFirestore(app);
  console.log("Firestore initialized successfully");

  // Initialize Storage
  storage = getStorage(app);
  console.log("Firebase Storage initialized successfully");

  // Initialize Analytics only in browser environment
  if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized successfully");
  }
} catch (error) {
  console.error("Error initializing Firebase:", error);
  if (error instanceof Error) {
    console.error("Error name:", error.name);
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
  }
  throw error;
}

// Verify Storage bucket is configured
if (!firebaseConfig.storageBucket) {
  console.error("Firebase Storage bucket is not configured!");
}

// Export the addLead function
export const addLead = async (name: string, email: string) => {
  try {
    const leadsRef = collection(db, "leads");
    await addDoc(leadsRef, {
      name,
      email,
      timestamp: new Date(),
    });
    console.log("Lead added successfully");
  } catch (error) {
    console.error("Error adding lead:", error);
    throw error;
  }
};

// Export Firebase instances
export { app, auth, db, storage, analytics };
export default app;
