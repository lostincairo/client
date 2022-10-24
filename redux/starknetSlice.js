import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  turn: false,
  action: null,
  own_x: -0,
  own_y: 8,
  game_idx: null,
  own_address: null,
  opponent_address: null,
  opponent_x: 15,
  opponent_y: 8,
  history: [],
};

export const starknetSlice = createSlice({
  name: "_starknet",
  initialState,
  reducers: {
    setTurn: (state, action) => {
      state.turn = action.payload;
    },
    setAction: (state, action) => {
      state.action = action.payload;
    },
    setOwnX: (state, action) => {
      state.own_x = action.payload;
    },
    setOwnY: (state, action) => {
      state.own_y = action.payload;
    },
    setGameIdx: (state, action) => {
      state.game_idx = action.payload;
    },
    setOwnAddress: (state, action) => {
      state.own_address = action.payload;
    },
    setOpponentAddress: (state, action) => {
      state.opponent_address = action.payload;
    },
    setOpponentX: (state, action) => {
      state.opponent_x = action.payload;
    },
    setOpponentY: (state, action) => {
      state.opponent_y = action.payload;
    },
    addHistory: (state, action) => {
      state.history.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setTurn,
  setA,
  setOwnX,
  setOwnY,
  setGameIdx,
  setOwnAddress,
  setOpponentAddress,
  setOpponentX,
  setOpponentY,
  addHistory,
} = starknetSlice.actions;

export default starknetSlice.reducer;
