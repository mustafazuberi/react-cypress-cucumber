import { useNavigate } from "react-router-dom";
import useAppStore from "./store";

const Header = () => {
  const navigate = useNavigate();
  const { credentials, isLoggedIn, logOut } = useAppStore((state) => state);
  return (
    <div className="flex flex-row items-center py-2 px-4 h-16 bg-[#202837]">
      <div className="Logo text-white font-bold">My GH Projects</div>
      <div className="flex-1"></div>
      <div className="flex items-center ">
        {isLoggedIn && (
          <div className="flex items-center gap-x-3">
            <div className="text-sm text-white">{credentials.email}</div>
            <button
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
              onClick={() => {
                logOut();
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
