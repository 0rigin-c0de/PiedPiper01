import React, { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useAuthContent } from "../../Hooks/useAuthContent";
import CommentList from "./CommentList";
import { motion } from "framer-motion";

const CommendBox = (Props) => {
  const { data, setCommented, comment, setComment, handleSubmit } = Props;
  const [apper, setApper] = useState(false);
  const { userData } = useAuthContent();

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  console.log(windowSize.innerWidth);
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{
        width: `${windowSize.innerWidth > 766 ? "26%" : "100%"}`,
      }}
      exit={{
        width: 0,
        transition: { delay: 0.1, duration: 0.1 },
      }}
      className=" max-h-full h-screen py-12 px-10 md:w-[26%]  bg-gray-200 shadow-xl md:fixed  overflow-y-scroll md:right-0  md:top-0  z-30"
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex font-bold items-center gap-2 text-2xl">
            <h1>Responses</h1>
            <span>({data.comment.length})</span>
          </div>
          <div className="cursor-pointer">
            <TiDeleteOutline
              size={35}
              className="text-gray-700"
              onClick={() => setCommented(false)}
            />
          </div>
        </div>
      </div>

      <div className="mt-12 ">
        {!apper && (
          <input
            type="text"
            onClick={() => setApper(true)}
            className="bg-gray-200 shadow w-full p-5 text-xl rounded-md"
            placeholder="What are your thoughts?"
          />
        )}
        {apper && (
          <motion.div
            initial={{ height: 0, width: 0 }}
            animate={{
              height: "1%",
              width: "100%",
            }}
            exit={{
              height: 0,
              width: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            className="w-full rounded-md shadow  p-4"
          >
            <div className="flex items-center gap-3">
              <img
                src={userData.photoURL}
                alt={userData.displayName}
                className="w-10 rounded-full"
              />
              <p className="text-lg font-medium">{userData.displayName}</p>
            </div>
            <div className="flex flex-wrap w-80">
              <textarea
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="bg-gray-200 mt-10 wrapper resize-none md:w-full md:text-xl text-md rounded-md"
                placeholder="What are your thoughts?"
              />
            </div>
            <div className="flex mt-10 items-center gap-3 text-lg justify-end">
              <button
                aria-label="cancel the response"
                onClick={() => setApper(false)}
              >
                Cancel
              </button>
              <button
                onClick={comment !== "" && handleSubmit}
                aria-label="add new response"
                className={` ${
                  comment === "" ? "bg-[#bbdcbb] disabled:" : "bg-[#1a8918]"
                } p-2 rounded-full px-4 text-white`}
              >
                Response
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <CommentList data={data.comment} />
    </motion.div>
  );
};

export default CommendBox;
