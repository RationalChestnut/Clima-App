import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

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

export const app = firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);

// Providers
export const auth = firebase.auth(app);

export const loginRequest = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const signupRequest = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const resetEmail = (email) => auth.sendPasswordResetEmail(email);

export const logout = () => auth.signOut();
