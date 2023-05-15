import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABsqS9iSREa_4ZRbp-w-vTT-pi3MPvIHQ",
  authDomain: "bloggy-d85ce.firebaseapp.com",
  projectId: "bloggy-d85ce",
  storageBucket: "bloggy-d85ce.appspot.com",
  messagingSenderId: "927253908331",
  appId: "1:927253908331:web:ce8a376f94ffe0a7909a2e",
};

//init firebase

firebase.initializeApp(firebaseConfig);

//init services

const projectFireStore = firebase.firestore();
const projectStorage = firebase.storage();

const timeStamp = firebase.firestore.Timestamp;

//init firebase auth

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export { projectFireStore, projectStorage, timeStamp };

export default firebase;
