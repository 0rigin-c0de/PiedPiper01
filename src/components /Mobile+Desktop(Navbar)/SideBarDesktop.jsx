import Logo from "../../assets/logo.png";
import { AiFillHome, AiOutlineHome } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContent } from "../../Hooks/useAuthContent";
import { useState } from "react";

const sidebarLists = [
  {
    icon: AiFillHome,
    clickedicon: AiOutlineHome,
    url: "/",
  },
];

const noGmail = (gmail) => {
  const Index = gmail.indexOf("@");
  return gmail.substring(gmail[0], Index);
};

const SideBarDesktop = () => {
  const { userData, handleSignOut } = useAuthContent();
  const [profile, setProfile] = useState(false);
  const navigate = useNavigate();

  const handleSignOutSystem = () => {
    handleSignOut();
    navigate("/Get-Started");
  };

  return (
    <div className="w-[4%] py-10 z-20 stickySideBar bg-gray-500 h-screen  md:flex flex-col hidden items-center justify-between shadow">
      <div>
        <Link to="/">
          <img
            src={Logo}
            alt="logo"
            className="w-[40px] h-[40px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-10 ">
        {sidebarLists.map((list) => (
          <Link to={list.url} key={list.url}>
            <div className="cursor-pointer">
              <list.clickedicon size={27} />
            </div>
          </Link>
        ))}
        <div className="border border-t-[0px]"></div>
        <Link to="/write">
          <div className="cursor-pointer">
            <HiOutlinePencilAlt size={27} />
          </div>
        </Link>
      </div>

      <div className="cursor-pointer" onClick={() => setProfile(!profile)}>
        {userData ? (
          <img
            src={userData.photoURL}
            alt={userData.displayName}
            className="w-[30px] h-[30px] rounded-full"
          />
        ) : (
          <p>Loading...</p>
        )}
        {profile && (
          <>
            <div className="bg-white  shadow border border-solid border-t-2 rounded-lg w-[20rem] h-[13rem] top-[29rem] absolute py-8  flex flex-col gap-6">
              <div className="border border-t-[0px]"></div>
              <div className="px-8 flex flex-col gap-6">
                <p
                  className="text-m font-bold text-blue-500 hover:text-red-500"
                  onClick={handleSignOutSystem}
                >
                  Sign Out
                </p>
              </div>
              <div className="border border-t-[0px]"></div>
              {userData ? (
                <div className="flex items-center gap-4 px-8">
                  <img
                    src={userData && userData.photoURL}
                    alt={userData.displayName}
                    className="w-[30px] h-[30px] rounded-full"
                  />
                  <div>
                    <p className="text-lg">{userData.displayName}</p>
                    <p className="text-gray-500 tracking-wide">
                      @{noGmail(userData.email)}
                    </p>
                  </div>
                </div>
              ) : (
                <p>Loading</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SideBarDesktop;
