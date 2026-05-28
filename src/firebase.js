import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEu1pAJBdO4iF98bxK9OEGu0JsWoUxrAM",
  authDomain: "tourist-safety-dfbe1.firebaseapp.com",
  projectId: "tourist-safety-dfbe1",
  storageBucket: "tourist-safety-dfbe1.firebasestorage.app",
  messagingSenderId: "749826859078",
  appId: "1:749826859078:web:db17689d06b3306c83aa47",
  measurementId: "G-JMH91GWFNP"
};
export const firebaseConfigIssue =
  !firebaseConfig.apiKey ||
  !firebaseConfig.authDomain ||
  !firebaseConfig.projectId
    ? "Firebase is not configured. Add VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, and VITE_FIREBASE_PROJECT_ID to your .env file."
    : null;

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
