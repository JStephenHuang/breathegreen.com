import { useEffect, useRef } from "react";

import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated, isLoading } = useAuthContext();
  const { error, login } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        navigate("/admin");
      }
    }
  }, [isAuthenticated]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-1/4 flex flex-col p-10 border">
      <p className="text-[20px] font-bold text-center">Admin Page</p>
      {error && <p className="text-center text-red-500">{error}</p>}
      <p className="my-5">Username</p>
      <input ref={usernameInputRef} className="inputField" type="text" />
      <p className="my-5">Password</p>
      <input ref={passwordInputRef} className="inputField" type="password" />
      <button
        type="submit"
        onClick={() =>
          login(
            usernameInputRef.current?.value,
            passwordInputRef.current?.value
          )
        }
        className="button"
      >
        Submit
      </button>
      <p className="text-center">
        *this is reserved strictly to the owners of breathe green*
      </p>
    </div>
  );
};

export default LoginPage;
