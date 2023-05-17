import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuthContent } from "../Hooks/useAuthContent";
import Sidebar from "../pages/Sidebar";
import Layout from "./Layout";
import SideBarDesktop from "./Mobile+Desktop(Navbar)/SideBarDesktop";

const WholeLayout = ({ children }) => {
  const { userData } = useAuthContent();
  const location = useLocation();

  if (location.pathname !== "/Get-Started" && !userData) {
    return <Navigate to="/Get-Started" />;
  }

  return (
    <div>
      {location.pathname === "/" && (
        <>
          {location.pathname === "/write" ? (
            <>{userData ? children : <p>Login first</p>}</>
          ) : (
            <Layout>
              <div className="flex md:flex-row flex-col pt-10 ">
                <SideBarDesktop />
                {userData && children}
                <Sidebar />
              </div>
            </Layout>
          )}
        </>
      )}

      {location.pathname.includes("articles") && (
        <>
          {location.pathname === "/write" ? (
            <>{userData ? children : <p>Login first</p>}</>
          ) : (
            <Layout>
              <div className="flex md:flex-row flex-col pt-10 ">
                <SideBarDesktop />
                {userData && children}
                <Sidebar />
              </div>
            </Layout>
          )}
        </>
      )}

      {location.pathname === "/write" && children}
      <div className="flex md:flex-row flex-col pt-10 ">
        {location.pathname === "/Get-Started" && children}
      </div>
    </div>
  );
};

export default WholeLayout;
