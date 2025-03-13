import { useAuth0 } from "@auth0/auth0-react";
import { IoIosLogOut } from "react-icons/io";

// eslint-disable-next-line react/prop-types
const Logout = ({ anchor }) => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      className={`flex flex-row gap-1 items-center text-[inherit] ${anchor} text-[--d-blue-bg]`}>
      Log Out <IoIosLogOut />
    </button>
  );
};

export default Logout;
