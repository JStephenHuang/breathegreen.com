import { createContext, useContext, useEffect, useState } from "react";

import { useBackend } from "../hooks/useBackend";

const AuthContext = createContext<{
  username: string | null;
  isAuthenticated: boolean | null;
  isLoading: boolean;
}>({
  username: null,
  isAuthenticated: null,
  isLoading: true,
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const backend = useBackend();

  useEffect(() => {
    (async () => {
      const res = await backend.post("/token").catch(() => {
        setIsAuthenticated(false);
        setUsername(null);
      });

      if (res) {
        if (res.status === 200) {
          setIsAuthenticated(true);
          setUsername(res.data.username);
        }
      }
    })();
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ username, isAuthenticated, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
