import { Outlet, useNavigate } from "react-router-dom";

import AdminNavbar from "../components/AdminNavbar";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

const AdminPage = () => {
  const { isAuthenticated, isLoading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
      }
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return <div>Loading...</div>;

  return (
    <div>
      <AdminNavbar />
      <div className="p-[2rem]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
