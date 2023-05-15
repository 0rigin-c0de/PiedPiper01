import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuthContent } from "./Hooks/useAuthContent";
import firebase from "./firebase";
import { useEffect } from "react";
import WholeLayout from "./components /WholeLayout";
import Posts from "./pages/Post";
import "./index.css";

const GetStarted = React.lazy(() => import("./pages/GetStarted"));
const PostDetails = React.lazy(() => import("./components /post/PostDetails"));
const Create = React.lazy(() => import("./components /writePost/Create"));

function App() {
  const { userData, dispatch } = useAuthContent();
  useEffect(() => {
    const unsub = firebase.auth().onAuthStateChanged((user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
      unsub();
    });
  }, [userData, dispatch]);
  return (
    <div>
      <BrowserRouter>
        <WholeLayout>
          <Routes>
            <Route
              path="/"
              element={
                userData ? (
                  <Suspense fallback={<div>Loading..</div>}>
                    <Posts />
                  </Suspense>
                ) : (
                  <Navigate to="/Get-Started" />
                )
              }
            />

            <Route
              path="/Get-Started"
              element={
                !userData ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <GetStarted />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/write"
              element={
                userData ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <Create />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            />

            <Route
              path="/articles/:id"
              element={
                userData ? (
                  <Suspense fallback={<div>Loading...</div>}>
                    <PostDetails />
                  </Suspense>
                ) : (
                  <Navigate to="/" />
                )
              }
            ></Route>
          </Routes>
        </WholeLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
//
