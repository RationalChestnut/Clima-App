import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYPkZU4HTNz2Bgcvxuc7ohvpWk1s8DjXo",
  authDomain: "clima-88541.firebaseapp.com",
  projectId: "clima-88541",
  storageBucket: "clima-88541.appspot.com",
  messagingSenderId: "878817171101",
  appId: "1:878817171101:web:52a572309c8021475d6674",
  measurementId: "G-NQFK3ZK3ZN",
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
export const app = initializeApp(firebaseConfig);

// Providers

export const auth = getAuth();

export const loginRequest = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const signupRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
