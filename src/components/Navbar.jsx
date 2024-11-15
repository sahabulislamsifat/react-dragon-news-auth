import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between py-2 my-5">
      <div>{user && user.email}</div>
      <div className="space-x-5">
        <Link to={"/"}>Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <img src={useIcon} alt="" />
        </div>

        {user && user?.email ? (
          <button
            onClick={logOut}
            className="btn btn-error bg-[#D72050] text-white rounded-none "
          >
            Log Out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
