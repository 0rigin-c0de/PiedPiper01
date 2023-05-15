import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const CommentList = ({ data }) => {
  const [apper, setApper] = useState(false);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10">
      {data.length < 0 && <p>There is no response Yet</p>}
      {data &&
        data.map((comment) => (
          <div className="my-12">
            <div
              className="flex my-4 items-center justify-between relative"
              key={comment.id}
            >
              <div className="flex items-center gap-3">
                <img
                  src={comment.photoURL}
                  alt={comment.displayName}
                  className="w-12 rounded-full"
                />
                <div>
                  <p className="text-md">{comment.displayName}</p>
                  <p className="flex flex-col text-md gap-2">
                    {formatDistanceToNow(comment.createAt.toDate(), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
              <div className="cursor-pointer">
                <BsThreeDots size={25} onClick={() => setApper(!apper)} />
              </div>
            </div>

            <div className="mt-6">
              <p>{comment.content}</p>
            </div>
            <div className="border border-solid border-black border-t-0 mt-7 "></div>
          </div>
        ))}
    </div>
  );
};

export default CommentList;
