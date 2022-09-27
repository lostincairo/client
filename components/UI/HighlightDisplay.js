import React from "react";
import { selectedCell, highlightCell } from "../../game/scenes/sceneSlice";
import { useSelector } from "react-redux";

export default function HighlightDisplay() {
  const {highlightedCell} = useSelector((store) => store._scene);

  return (
    <div>
      <span className="inline-flex items-center rounded-full bg-charcoal px-3 py-0.5 text-sm font-medium text-white">
        Highlight to {highlightedCell}
      </span>
    </div>
  );
}
