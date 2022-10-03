import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCell, highlightCell, movePlayer } from "../../redux/sceneSlice";
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { board } from "../../utils/sceneHelpers";

const Palmito = () => {

    // Store initialisation
  const dispatch = useDispatch();
  const { highlightedCell } = useSelector((store) => store._scene);
  const { selectedCell } = useSelector((store) => store._scene);
  const { movePlayer } = useSelector((store) => store._scene);

  // Texture setup
  const palmitoMap = useLoader(TextureLoader, "palmito.png");



  // Display the player on the grid cell.
  // WIP
        return(
        <sprite scale={[1, 1, 1]} position={[-1, 1, -1]} rotation={[0,0,0]}>
        <spriteMaterial transparent map={palmitoMap} />
         </sprite>
         );
        
        // if( movePlayer === cell) {

        // }
        // } else {
        //     return;
        // }
        //   position={{ x: rowIndex, z: 0, y: cellIndex }}


};

export default Palmito;
