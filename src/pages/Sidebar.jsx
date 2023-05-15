import React from "react";
import { useLocation } from "react-router-dom";
import PostList from "../components /sidebar/PostList";
import { useAuthContent } from "../Hooks/useAuthContent";

const Sidebar = () => {
  const { user } = useAuthContent();
  const location = useLocation();

  return (
    <>
      <div className=" w-[26%] pt-10 hidden absolute px-[3rem] top-0 right-0 md:block  z-0">
        {location.pathname.includes("articles") && (
          <>
            {user && (
              <div className="mt-12">
                <div>
                  <img
                    src={user.createdBy.photoURL}
                    alt={user.createdBy.displayName}
                    className="w-15 rounded-full"
                  />
                  <h1 className="mt-6 text-xl font-medium">
                    {user.createdBy.displayName}
                  </h1>

                  <h1 className="mt-12 text-2xl font-bold">
                    More From pied-piper
                  </h1>
                </div>
              </div>
            )}
          </>
        )}
        <PostList />
      </div>
    </>
  );
};

export default Sidebar;
