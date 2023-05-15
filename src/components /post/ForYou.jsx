import React from "react";
import { useCollection } from "../../Hooks/useCollection";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const Foryou = () => {
  const { document } = useCollection("articles");
  if (!document) {
    return <div className="mt-12">Loading...</div>;
  }

  return (
    <div className="mt-12 ">
      {document.map((post) => (
        <div key={post.id}>
          <div className="flex items-center gap-3">
            <img
              src={post.createdBy.photoURL}
              alt={post.createdBy.displayName}
              className="w-8 md:w-10 rounded-full"
            />
            <h1 className="md:text-lg text-md font-semibold tracking-wide">
              {post.createdBy.displayName}.
            </h1>
            <p className="text-gray-500">
              {" "}
              {formatDistanceToNow(post.createAt.toDate(), {
                addSuffix: true,
              })}{" "}
            </p>
          </div>
          <Link to={`articles/${post.id}`}>
            <div className="mt-6 block">
              <div className="flex items-center gap-10">
                <h1 className="md:text-4xl text-xl self-start  font-bold">
                  {post.title}
                </h1>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[30%] self-end h-[30%] md:hidden "
                />
              </div>
              <div className="mt-4 md:flex hidden items-center gap-12">
                <p className="text-[18px] flex tracking-wide text-justify leading-7 w-[80%]">
                  {post.brief}...
                </p>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-[20%] h-[20%] "
                />
              </div>
            </div>
            <div className="mt-1 md:mt-6 flex items-center gap-4">
              <p className="bg-[#f2f2f2] p-1 px-2  md:px-4 md:text-lg text-[14px]  text-center rounded-full">
                {post.category.label}
              </p>
              <p className="text-gray-500 text-sm md:text-md">
                {post.timetoRead} min read
              </p>
            </div>
            <div className="border border-t-[2px]  my-8"></div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Foryou;
