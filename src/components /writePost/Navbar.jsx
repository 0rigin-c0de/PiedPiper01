import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { useAuthContent } from "../../Hooks/useAuthContent";
import "../../index.css";

const Navbar = ({ handleSubmit, response }) => {
  const { userData } = useAuthContent();
  return (
    <div className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center gap-4 md:gap-6">
        <Link to="/">
          <img src={Logo} alt="logo" className="md:w-12 w-8 cursor-pointer" />
        </Link>
        <p className="md:text-lg text-sm md:w-full w-32 font-semibold">
          Draft in {userData.displayName}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {!response.Ispending ? (
          <button onClick={handleSubmit} className="button">
            Publish
          </button>
        ) : (
          <button disabled className="button opacity-50 cursor-not-allowed">
            Publishing
          </button>
        )}
        <img
          src={userData.photoURL}
          alt={userData.displayName}
          className="md:w-10 w-6 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;
