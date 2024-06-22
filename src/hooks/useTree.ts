import { useEffect, useState } from "react";

import { Tree } from "../lib/model/tree";
import { useBackend } from "./useBackend";

export const statusOptions = ["Approved", "Denied", "Under review"];

export const useTrees = () => {
  const [error, setError] = useState<string | null>(null);

  const [trees, setTrees] = useState<Tree[] | null>(null);

  const backend = useBackend();

  useEffect(() => {
    (async () => {
      const res = await backend.get("/trees").catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });

      if (res) {
        if (res.status === 200) {
          setTrees(res.data);
        }
      }
    })();
  }, []);

  return { error, trees };
};

export const useTree = (treeId: string) => {
  const [error, setError] = useState<string | null>(null);
  const [tree, setTree] = useState<Tree | null>(null);

  const backend = useBackend();

  useEffect(() => {
    (async () => {
      const res = await backend.get(`/trees/${treeId}`).catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });

      if (res) {
        if (res.status === 200) {
          setTree(res.data);
        }
      }
    })();
  }, []);

  const updateStatus = async (status: string | undefined) => {
    setError("");

    if (!status) {
      setError("no value selected");
      return;
    }

    if (status === tree?.status) {
      setError("no value changed");
      return;
    }

    const res = await backend
      .put(`/trees/${treeId}`, { status: status })
      .catch((error) => {
        console.error(error);
        setError(error.response.data.message);
      });

    if (res) {
      if (res.status === 200) {
        setTree(res.data);
      }
    }
  };

  return { error, tree, updateStatus };
};
