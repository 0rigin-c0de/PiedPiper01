import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "info0567.firebaseapp.com",
  projectId: "info0567",
  storageBucket: "info0567.appspot.com",
  messagingSenderId: "144148417706",
  appId: "1:144148417706:web:369be3ac727512a0f454d3",
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
