import Logo from "../../assets/logo.png";
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useNavigate } from "react-router-dom";

const SidebarMobile = () => {
  const { handleSignOut } = useAuthContent();
  const navigate = useNavigate();
  const handleSignOutSystem = () => {
    handleSignOut();
    navigate("/Get-Started");
  };
  return (
    <div className="md:hidden flex p-2 justify-between items-center shadow fixed w-full bg-transparent z-1 top-0">
      <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />
      <div className="flex items-center gap-4">
        <button
          onClick={handleSignOutSystem}
          aria-label="sign out"
          className="text-red-700 font-bold"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default SidebarMobile;
