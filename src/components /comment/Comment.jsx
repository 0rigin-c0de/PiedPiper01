import React, { useState } from "react";

import { FaRegComment } from "react-icons/fa";
import { timeStamp } from "../../firebase";
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useFireStore } from "../../Hooks/useFirestore";
import CommendBox from "./CommendBox";
import { AnimatePresence } from "framer-motion";

const Comment = ({ data }) => {
  const [comment, setComment] = useState("");
  const [Commented, setCommented] = useState(false);
  const { UpdateDocument, response } = useFireStore("articles");
  const { userData } = useAuthContent();

  const handleSubmit = async () => {
    const commentToAdd = {
      displayName: userData.displayName,
      photoURL: userData.photoURL,
      content: comment,
      id: Math.random(),
      createAt: timeStamp.fromDate(new Date()),
    };

    await UpdateDocument(data.id, {
      comment: [...data.comment, commentToAdd],
    });

    if (!response.error) {
      setComment("");
    }
  };

  return (
    <>
      <div className="my-12 ">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaRegComment size={25} onClick={() => setCommented(true)} />
          <p>{data.comment.length}</p>
        </div>
      </div>
      <AnimatePresence>
        {Commented && (
          <CommendBox
            data={data}
            setCommented={setCommented}
            comment={comment}
            setComment={setComment}
            handleSubmit={handleSubmit}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Comment;
