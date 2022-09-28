import React from "react";
import Cell from "./Cell";
import CellPlayer from "../../game/scenes/Player";
import { board } from "../../utils/sceneHelpers";

const Board = () => {

  return (
    <>
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((cell, cellIndex) => (
            // console.log(rowIndex, cellIndex)
            <Cell
              key={rowIndex.toString() + cellIndex.toString()}
              cell={cell}
              position={{ x: rowIndex, z: 0, y: cellIndex }}
            />
          ))}
        </React.Fragment>
      ))}
      <CellPlayer />
    </>
  );
};

export default Board;
