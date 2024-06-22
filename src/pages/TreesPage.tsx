import { Link } from "react-router-dom";
import { Tree } from "../lib/model/tree";
import { useTrees } from "../hooks/useTree";

const TreeListing = ({ tree }: { tree: Tree }) => {
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

      <div>
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
  const { trees } = useTrees();

  if (!trees) return <div>Loading</div>;
  return (
    <div className="w-full flex flex-col">
      <h1 className="font-bold text-[32px]">Trees</h1>
      <hr />
      <div className="grid grid-cols-4 gap-[1rem] py-[1rem]">
        {trees.map((tree, key) => (
          <TreeListing tree={tree} key={key} />
        ))}
      </div>
    </div>
  );
};

export default TreesPage;
