import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCollection } from "../../Hooks/useCollection";

const PostList = () => {
  const { document } = useCollection("articles");
  const location = useLocation();
  return (
    <div className="mt-6">
      <div className="flex items-center gap-3">
        <div className="bg-green-400 w-3 h-3 rounded-full"></div>
        <h1 className="text-xl font-semibold">What We're Reading Today</h1>
      </div>
      {document ? (
        document.map((data) => (
          <Link to={`/articles/${data.id}`} key={data.id}>
            <div
              className={`mt-5 my-10 ${
                location.pathname.includes("articles") &&
                "flex items-center justify-between"
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <img
                    src={data.createdBy.photoURL}
                    alt={data.createdBy.displayName}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-md font-medium">
                    {data.createdBy.displayName}
                  </p>
                </div>
                <h1 className="mt-2 text-xl font-bold ml-2">{data.title}</h1>
              </div>
              {location.pathname.includes("articles") && (
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-20 rounded"
                />
              )}
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostList;
