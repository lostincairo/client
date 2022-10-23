import { combineReducers, configureStore } from "@reduxjs/toolkit";
import connectReducer from "./connectSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import connectModalReducer from "./modalSlice";
import sceneReducer from "./sceneSlice";
import gameReducer from "./gameSlice";
import starknetReducer from "./starknetSlice";
import thunk from "redux-thunk";

const reducers = combineReducers({
  _connect: connectReducer,
  _connectModal: connectModalReducer,
  _scene: sceneReducer,
  _game: gameReducer,
  _starknet: starknetReducer,
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: reducers,
  middleware: [thunk]
});

export default store;