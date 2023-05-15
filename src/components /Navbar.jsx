import Logo from "../assets/logo.png";
import { useAuthContent } from "../Hooks/useAuthContent";
import "../index.css";

const Navbar = () => {
  const { handleLogin } = useAuthContent();

  return (
    <nav className="container  pt-0  mx-auto py-3 flex justify-between align-center">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt=" logo" className="w-14" />
        <h1 className="logo md:text-5xl text-3xl  font-bold">Pied-Piper</h1>
      </div>
      <ul className="flex items-center gap-6">
        <button
          aria-label="login signup"
          className="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
