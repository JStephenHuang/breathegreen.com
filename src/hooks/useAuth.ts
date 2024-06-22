import { Cookies } from "react-cookie";
import { useBackend } from "./useBackend";
import { useState } from "react";

export const useAuth = () => {
  const backend = useBackend();
  const cookies = new Cookies();
  const [error, setError] = useState<string | null>(null);

  const login = async (
    username: string | undefined,
    password: string | undefined
  ) => {
    if (!username || !password) {
      setError("Missing username or password");
      return;
    }

    const res = await backend
      .post("/login", {
        username: username,
        password: password,
      })
      .catch((error) => {
        setError(error.response.data.message);
      });

    if (res) {
      if (res.status === 200) {
        cookies.set("token", res.data.token);
        window.location.reload();
      }
    }
  };

  const logout = async () => {
    const res = await backend.post("/logout").catch((error) => {
      console.log(error);
    });

    if (res) {
      if (res.status === 200) {
        cookies.remove("token");
        window.location.reload();
      }
    }
  };

  return { error, login, logout };
};
