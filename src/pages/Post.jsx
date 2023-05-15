import Foryou from "../components /post/ForYou";
import Navbar from "../components /post/Navbar";
import UserList from "../components /UserList";
const Posts = () => {
  return (
    <div className="mt-[-3rem] md:w-[74%]  md:px-[8rem] px-5 overflow-x-hidden border-t-0 border border-solid border-r-2 border-b-0 ">
      <UserList />
      <Navbar />
      <Foryou />
    </div>
  );
};

export default Posts;
