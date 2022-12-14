import React from "react";
import Cell from "./Cell";
import Player from "./Player";

const board = [
  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8", "i1", "j1", "k1", "l1", "m1", "n1", "o1", "p1"],

];


const Board = () => {

  return (
    <>
      {board.map((row, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Cell
              key={rowIndex.toString() + cellIndex.toString()}
              cell={cell}
              position={{ x: rowIndex, z: 0, y: cellIndex }}
            />
          ))}
        </React.Fragment>
      ))}
    </>
  );
};

export default Board;
