import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center py-4">
        <div className="text-sm">{user && user?.email}</div>
        <div className="nav space-x-5">
          <Link to="/" className="hover:text-gray-600">Home</Link>
          <Link to="/career" className="hover:text-gray-600">Career</Link>
          <Link to="/about" className="hover:text-gray-600">About</Link>
        </div>
        <div className="login flex justify-center items-center gap-4">
          <div>
            {user && user?.email ? (
              <div className="flex items-center gap-2">
                <img src={user.photoURL} alt="user" className="w-8 h-8 rounded-full" />
                <p className="text-sm">{user?.displayName}</p>
              </div>
            ) : (
              <img className="w-8 h-8" src={userIcon} alt="" />
            )}
          </div>
          {user && user?.email ? (
            <button onClick={logOut} className="btn btn-neutral btn-sm">
              Log-Out
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn btn-neutral btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex justify-between items-center py-4">
          <div className="text-sm truncate max-w-[150px]">{user && user?.email}</div>
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Link to="/" className="hover:text-gray-600">Home</Link>
                <Link to="/career" className="hover:text-gray-600">Career</Link>
                <Link to="/about" className="hover:text-gray-600">About</Link>
                <Link to="/dev" className="hover:text-gray-600">Dev info</Link>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  {user && user?.email ? (
                    <div className="flex items-center gap-2">
                      <img src={user?.photoURL} alt="user" referrerPolicy="no-referrer" className="w-8 h-8 rounded-full" />
                      <p className="text-sm">{user?.displayName}</p>
                    </div>
                  ) : (
                    <img className="w-8 h-8" src={userIcon} alt="" />
                  )}
                </div>
                {user && user?.email ? (
                  <button onClick={logOut} className="btn btn-neutral btn-sm">
                    Log-Out
                  </button>
                ) : (
                  <Link to={"/auth/login"} className="btn btn-neutral btn-sm">
                    Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;