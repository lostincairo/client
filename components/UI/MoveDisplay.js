import React from "react";
import { selectedCell, highlightCell } from "../../redux/sceneSlice"
import { useSelector } from "react-redux";

export default function MoveDisplay() {

  const { selectedCell } = useSelector((store) => store._scene)




  return (
    <div>
    <span className="inline-flex items-center rounded-full bg-earth px-3 py-0.5 text-sm font-medium text-white">
      Move Player to {selectedCell}
    </span>
      </div>
  );
}
