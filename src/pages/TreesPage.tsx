import { Link, useLocation } from "react-router-dom";

import { Tree } from "../lib/model/tree";
import { useMemo } from "react";
import { useTrees } from "../hooks/useTree";

const TreeWidget = ({ tree }: { tree: Tree }) => {
  return (
    <div className="w-full flex flex-col">
      <Link to={`${tree.id}`} className="relative flex w-full aspect-square">
        <img
          className="absolute w-full h-full object-cover hover:opacity-40"
          src={tree.imageObject.url}
          alt=""
        />
        <div className="w-full h-full grid place-items-center bg-black">
          <p className="text-white">View Tree</p>
        </div>
      </Link>

      <div className="flex flex-col gap-[0.25rem]">
        <p>
          <span className="font-bold">Owner:</span> {tree.treeOwner}
        </p>

        <p>
          <span className="font-bold">Status:</span>: {tree.status}
        </p>
        <p>
          <span className="font-bold">Date:</span>:{" "}
          {new Date(tree.date).toDateString()}
        </p>
      </div>
    </div>
  );
};

const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};

const TreesPage = () => {
  const { error, trees } = useTrees();
  const query = useQuery();

  if (!trees)
    return <div>{error && <p className="text-red-500">{error}</p>}Loading</div>;

  const queryStatus = query.get("status");
  const selectedStatus =
    queryStatus === "ur"
      ? "Under review"
      : queryStatus === "approved"
      ? "Approved"
      : queryStatus === "denied"
      ? "Denied"
      : "All";

  const filteredTrees = trees.filter((tree) => {
    if (selectedStatus === "All") return true;
    return tree.status === selectedStatus;
  });

  return (
    <div className="w-full flex flex-col gap-[1rem]">
      <div>
        <h1 className="font-bold text-[32px]">Trees ({selectedStatus})</h1>
        <hr />
      </div>

      <div className="flex items-center gap-[1rem]">
        <Link className="button" to="">
          All
        </Link>
        <Link className="button" to="?status=ur">
          Under Review
        </Link>
        <Link className="button" to="?status=approved">
          Approved
        </Link>
        <Link className="button" to="?status=denied">
          Denied
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-[1rem]">
        {filteredTrees.map((tree, key) => (
          <TreeWidget tree={tree} key={key} />
        ))}
      </div>
    </div>
  );
};

export default TreesPage;
