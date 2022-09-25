import { configureStore } from "@reduxjs/toolkit";
import connectReducer from '../components/ConnectWallet/connectSlice'
import connectModalReducer from '../components/ConnectWallet/modalSlice'
import sceneReducer from '../game/scenes/sceneSlice'

export default configureStore({
    reducer: {
        _connect: connectReducer,
        _connectModal: connectModalReducer,
        _scene: sceneReducer,
    },
});