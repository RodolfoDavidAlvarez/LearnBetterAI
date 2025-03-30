import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  sendEmailVerification,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { app } from "../lib/firebase";
import { db } from "../lib/firebase";

const auth = getAuth(app);

// Development admin credentials
const DEV_ADMIN = {
  email: "admin@better-systems-ai.com",
  password: "admin123456789",
};

export const authService = {
  async login(email: string, password: string): Promise<User> {
    // In development, always allow admin login
    if (process.env.NODE_ENV !== "production") {
      const userCredential = await signInWithEmailAndPassword(auth, DEV_ADMIN.email, DEV_ADMIN.password).catch(async () => {
        // If admin doesn't exist, create it
        const newUser = await createUserWithEmailAndPassword(auth, DEV_ADMIN.email, DEV_ADMIN.password);

        // Create admin document in Firestore
        await setDoc(doc(db, "system", "admin"), {
          email: DEV_ADMIN.email,
          createdAt: new Date().toISOString(),
          userId: newUser.user.uid,
          isDevelopment: true,
        });

        return newUser;
      });
      return userCredential.user;
    }

    // In production, use normal login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  },

  async logout(): Promise<void> {
    await signOut(auth);
  },

  getCurrentUser(): Promise<User | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(user);
      });
    });
  },

  onAuthStateChanged(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
  },

  async createUser(email: string, password: string): Promise<User> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(userCredential.user);
    return userCredential.user;
  },

  async sendPasswordResetEmail(email: string): Promise<void> {
    await sendPasswordResetEmail(auth, email);
  },

  async sendVerificationEmail(user: User): Promise<void> {
    await sendEmailVerification(user);
  },

  // Helper method to check if user is admin
  async isAdmin(user: User | null): Promise<boolean> {
    if (!user) return false;

    // In development, always treat the dev admin as admin
    if (process.env.NODE_ENV !== "production" && user.email === DEV_ADMIN.email) {
      return true;
    }

    const adminDoc = await getDoc(doc(db, "system", "admin"));
    return adminDoc.exists() && adminDoc.data().userId === user.uid;
  },
};
