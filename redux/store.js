import { configureStore } from "@reduxjs/toolkit";
import connectReducer from './connectSlice'
import connectModalReducer from './modalSlice'
import sceneReducer from './sceneSlice'
import gameReducer from './gameSlice'
import starknetReducer from './starknetSlice'

export default configureStore({
    reducer: {
        _connect: connectReducer,
        _connectModal: connectModalReducer,
        _scene: sceneReducer,
        _game: gameReducer,
        _starknet: starknetReducer
    },
});