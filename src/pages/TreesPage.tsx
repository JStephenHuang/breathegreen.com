import { Link } from "react-router-dom";
import { Tree } from "../lib/model/tree";
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

const TreesPage = () => {
  const { error, trees } = useTrees();

  if (!trees)
    return <div>{error && <p className="text-red-500">{error}</p>}Loading</div>;

  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-[32px]">Trees</h1>
      <hr />
      <div className="grid grid-cols-4 gap-[1rem] py-[1rem]">
        {trees.map((tree, key) => (
          <TreeWidget tree={tree} key={key} />
        ))}
      </div>
    </div>
  );
};

export default TreesPage;
