import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

const AdminNavbar = () => {
  const { username } = useAuthContext();
  const { logout } = useAuth();

  return (
    <nav className="h-[6rem] w-full border px-10 flex items-center justify-between">
      <div className="flex items-center gap-[1rem]">
        <Link className="hover:underline" to="">
          Overview
        </Link>
        <Link className="hover:underline" to="trees">
          Trees
        </Link>
        <Link className="hover:underline" to="users">
          Users
        </Link>
      </div>
      <div className="flex items-center gap-[1rem]">
        <Link className="" to="/">
          username: {username}
        </Link>

        <button className="button" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
