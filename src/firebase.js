import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
 apiKey: "AIzaSyDQ6wL2EwIPxr63Pyv8X0jnUs8H1qIlbhM",
  authDomain: "blog-f470c.firebaseapp.com",
  projectId: "blog-f470c",
  storageBucket: "blog-f470c.appspot.com",
  messagingSenderId: "983867726662",
  appId: "1:983867726662:web:426903da424ca0a1eae347"
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
