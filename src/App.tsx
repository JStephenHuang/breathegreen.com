import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/home";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/navbar";
import TreePage from "./pages/TreePage";
import TreesPage from "./pages/TreesPage";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="h-screen">
        <Navbar />
        <div className="w-full h-[90%] flex flex-col justify-center items-center">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "trees",
        element: <TreesPage />,
      },
      { path: "trees/:treeId", element: <TreePage /> },
      { path: "users", element: <UsersPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
