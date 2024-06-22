import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[10%] border px-10 flex items-center justify-between">
      <Link className="text-[20px]" to="/">
        BreatheGreen
      </Link>
      <Link className="button" to="/login">
        Admin Page
      </Link>
    </nav>
  );
};

export default Navbar;
