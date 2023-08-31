import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "piedpiper-49e7f.firebaseapp.com",
  projectId: "piedpiper-49e7f",
  storageBucket: "piedpiper-49e7f.appspot.com",
  messagingSenderId: "586761896914",
  appId: "1:586761896914:web:08daea0acf1921c1edbe0b",
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
