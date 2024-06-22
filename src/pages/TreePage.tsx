import { statusOptions, useTree } from "../hooks/useTree";

import GoogleMapComponent from "../components/GoogleMapComponent";
import { useParams } from "react-router-dom";
import { useRef } from "react";

const TreePage = () => {
  const { treeId } = useParams();

  if (treeId === undefined) return <div>route not found </div>;

  const { tree, error, updateStatus } = useTree(treeId);
  const statusSelectRef = useRef<HTMLSelectElement>(null);

  if (!tree)
    return (
      <div>{error && <p className="text-red-500">{error}</p>} Loading...</div>
    );

  return (
    <div className="">
      <h1 className="font-bold text-[32px]">{tree.id}</h1>
      <hr />
      <div className="flex gap-[1rem] py-[1rem]">
        <div className="w-1/3">
          <img
            loading="lazy"
            className="w-full object-cover"
            src={tree.imageObject.url}
            alt=""
          />
        </div>
        <div className="w-1/3 flex flex-col gap-[0.25rem]">
          <h1 className="text-[32px]">Info</h1>
          <hr />
          <p>
            <span className="font-bold">Owner:</span> {tree.treeOwner}
          </p>

          <p>
            <span className="font-bold">Date: </span>
            {new Date(tree.date).toDateString()}
          </p>
          <p>
            <span className="font-bold">Status: </span> {tree.status}
          </p>
          <p>
            <span className="font-bold">Lat: </span> {tree.coord.lat}
            <span className="font-bold">Lon: </span> {tree.coord.lon}
          </p>
          <GoogleMapComponent center={tree.coord} />
        </div>
        <div className="w-1/3 flex flex-col gap-[0.25rem]">
          <h1 className="text-[32px]">Status</h1>
          <hr />
          <select
            ref={statusSelectRef}
            defaultValue={tree.status}
            className="p-[1rem]"
          >
            {statusOptions.map((status, key) => (
              <option value={status} key={key}>
                {status}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500">{error}</p>}
          <button
            className="button"
            onClick={() => updateStatus(statusSelectRef.current?.value)}
          >
            Submit review
          </button>
        </div>
      </div>
    </div>
  );
};

export default TreePage;
