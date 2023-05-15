import { createContext, useReducer, useState } from "react";
import firebase, {
  auth,
  projectFireStore,
  signInWithGoogle,
} from "../firebase";

export const AuthContent = createContext();

const initialState = {
  userData: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_IS_READY":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
export const AuthContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const [user, setUser] = useState("");

  const handleLogin = () => {
    signInWithGoogle();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "AUTH_IS_READY", payload: user });
        projectFireStore.collection("users").doc(user.uid).set({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        });
      }
    });
  };

  const handleSignOut = () => {
    auth.signOut();
    firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
  };

  return (
    <AuthContent.Provider
      value={{ ...state, dispatch, handleLogin, handleSignOut, user, setUser }}
    >
      {children}
    </AuthContent.Provider>
  );
};
