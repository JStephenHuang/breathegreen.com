import { useEffect, useState } from "react";

import { Tree } from "../lib/model/tree";
import { useBackend } from "./useBackend";

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
        setTrees(res.data);
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
        setTree(res.data);
      }
    })();
  }, []);

  return { error, tree };
};
