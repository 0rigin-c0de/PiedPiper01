import React from "react";
import Layout from "../components/Layout";
import SideBarDesktop from "../components/Mobile+Desktop(Navbar)/SideBarDesktop";
import Posts from "./Posts";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="flex md:flex-row flex-col pt-10 ">
          <SideBarDesktop />
          <Posts />
          <Sidebar />
        </div>
      </Layout>
    </>
  );
};

export default Home;
