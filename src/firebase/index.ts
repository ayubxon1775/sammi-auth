import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDNF7wUh83WG0hcJVZ4xfAvHgs2qfflU8U",
  authDomain: "sammi-auth-798c3.firebaseapp.com",
  projectId: "sammi-auth-798c3",
  storageBucket: "sammi-auth-798c3.appspot.com",
  messagingSenderId: "969011507111",
  appId: "1:969011507111:web:48c3edfec0d11b61145082"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth()

export default app;
export { db, auth};