import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "infosphere011.firebaseapp.com",
  projectId: "infosphere011",
  storageBucket: "infosphere011.appspot.com",
  messagingSenderId: "735133533756",
  appId: "1:735133533756:web:1389695dd3416d61d7a539",
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
