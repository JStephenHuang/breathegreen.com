import { useEffect, useState } from "react";

import { User } from "../lib/model/user";
import { useBackend } from "./useBackend";

export const useUsers = () => {
  const [error, setError] = useState<string | null>(null);
  const [users, setUsers] = useState<User[] | null>(null);

  const backend = useBackend();

  useEffect(() => {
    (async () => {
      const res = await backend.get(`/users`).catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });

      if (res) {
        if (res.status === 200) {
          setUsers(res.data);
        }
      }
    })();
  }, []);

  return { error, users };
};
