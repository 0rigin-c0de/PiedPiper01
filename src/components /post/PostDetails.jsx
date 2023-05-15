import { formatDistanceToNow } from "date-fns";
import { useNavigate, useParams } from "react-router-dom";
import { useDocument } from "../../Hooks/useDocument";
import { BsThreeDots } from "react-icons/bs";
import DetailsBody from "./DetailsBody";
import { useAuthContent } from "../../Hooks/useAuthContent";
import Comment from "../comment/Comment";
import { useState, useEffect } from "react";
import { useFireStore } from "../../Hooks/useFirestore";

const PostDetails = () => {
  const { id } = useParams();
  const { document, isPending } = useDocument("articles", id);
  const { setUser, userData } = useAuthContent();
  const [appear, setAppear] = useState(false);
  const { deleteDocument } = useFireStore("articles");
  const navigate = useNavigate();

  useEffect(() => {
    if (document) {
      setUser(document);
    }
  }, [document, setUser]);

  const handleDelete = async () => {
    await deleteDocument(document.id);
    setAppear(false);
    navigate("/");
  };

  return (
    <div className="md:w-[74%] mt-12 md:mt-12 pb-[4rem] md:pb-0 md:px-[15rem] px-5 overflow-x-hidden relative border border-solid border-r-2 border-t-0 border-b-0">
      {isPending && <p>Loading..</p>}
      {document && (
        <>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={document.createdBy.photoURL}
                alt={document.createdBy.displayName}
                className="w-12 md:w-14 rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="text-xl font-medium">
                  {document.createdBy.displayName}
                </p>
                <div className="flex items-center gap-3 text-gray-500">
                  {formatDistanceToNow(document.createAt.toDate(), {
                    addSuffix: true,
                  })}{" "}
                  .<p>{document.timetoRead} min read .</p>
                </div>
              </div>
            </div>
            <div>
              <div className="cursor-pointer ">
                <BsThreeDots
                  size={30}
                  className="text-gray-700"
                  onClick={() => setAppear(!appear)}
                />
              </div>
            </div>
            {appear && (
              <div className="w-40 shadow-lg bg-gray-50 top-[2.5rem] left-[60rem] absolute right-0 text-center text-red-500 px-4 py-2 ">
                {userData.uid === document.createdBy.id ? (
                  <button
                    className="delete-button"
                    aria-label="delete the article"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this post?"
                        )
                      ) {
                        handleDelete();
                      }
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  <button
                    aria-label="you can't delete the article"
                    className="text-green-500 delete-button"
                  >
                    You Can't Delete this
                  </button>
                )}
              </div>
            )}
          </div>
          <DetailsBody data={document} />
          <Comment data={document} />
        </>
      )}
    </div>
  );
};

export default PostDetails;
