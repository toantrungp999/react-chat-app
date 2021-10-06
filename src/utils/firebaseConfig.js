import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkFS7fGL5HVkhHlDbM3yX_jNVfDZYUo20",
  authDomain: "app-chat-39f94.firebaseapp.com",
  projectId: "app-chat-39f94",
  storageBucket: "app-chat-39f94.appspot.com",
  messagingSenderId: "538758172364",
  appId: "1:538758172364:web:7542a88a8c2a8a8791bc69",
  measurementId: "G-CWZCT4HR6R",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const ggProvider = new GoogleAuthProvider();

const ggLogin = async () => {
  const result = await signInWithPopup(auth, ggProvider);

  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const { displayName, email, photoURL, uid } = result.user;

  return { token, displayName, email, photoURL, uid };
};

const db = getFirestore(app);

export { ggLogin, auth, onAuthStateChanged, db };
