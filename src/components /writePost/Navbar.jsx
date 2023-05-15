import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useAuthContent } from "../../Hooks/useAuthContent";

const Navbar = ({ handleSubmit, response }) => {
  const { userData } = useAuthContent();
  return (
    <div className="container mx-auto flex items-center justify-between ">
      <div className="flex items-center gap-2 md:gap-6">
        <Link to="/">
          <img src={Logo} alt="logo" className="md:w-14 w-8 cursor-pointer" />
        </Link>
        <p className="md:text-xl text-md md:w-full w-28">
          Draft in {userData.displayName}{" "}
        </p>
      </div>
      <div className="flex items-center gap-5">
        {!response.Ispending && (
          <button
            onClick={handleSubmit}
            aria-label="publish article"
            className="bg-green-400 hover:bg-green-800 rounded-full text-white  p-1 tracking-wide px-3 md:px-4 md:text-lg text-md "
          >
            Publish
          </button>
        )}
        {response.Ispending && (
          <button
            disabled
            aria-label="publish article"
            className="bg-green-500 hover:bg-green-800 rounded-full text-white  p-1 tracking-wide px-3 md:px-4 md:text-lg text-md "
          >
            Publishing
          </button>
        )}
        <img
          src={userData.photoURL}
          alt={userData.displayName}
          className="md:w-11 w-4 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
