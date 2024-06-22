import { useParams } from "react-router-dom";
import { useTree } from "../hooks/useTree";

const TreePage = () => {
  const { treeId } = useParams();

  if (treeId === undefined) return <div>route not found </div>;

  const { tree, error } = useTree(treeId);

  if (error) return <div>{error}</div>;

  if (!tree) return <div>Loading...</div>;

  return (
    <div className="">
      <h1 className="font-bold text-[32px]">{tree.id}</h1>
      <hr />
      <div className="flex py-[1rem]">
        <div className="w-1/2">
          <img
            className="w-full object-cover"
            src={tree.imageObject.url}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default TreePage;
