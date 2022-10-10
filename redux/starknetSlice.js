import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isYourTurn: false,
  selectedAction: null,
  playerPosition: [],
  playerDirection: null,
}


export const starknetSlice = createSlice({
  name: "_starknet",
  initialState,
  reducers: {
    turn: (state, action) => {
      state.isYourTurn = action.payload;
  },
    action: (state, action) => {
      state.selectedAction = action.payload;
  },
  positionRow: (state, action) => {
      state.playerRow = action.payload;
  },
  positionCol: (state, action) => {
      state.playerCol = action.payload;
  },
  direction: (state, action) => {
      state.playerDirection = action.payload;
  }
  }
});

// Action creators are generated for each case reducer function
export const { turn, action, positionRow, positionCol, direction } = starknetSlice.actions

export default starknetSlice.reducer