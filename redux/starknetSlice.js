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
  position: (state, action) => {
      state.playerPosition = action.payload;
  },
  direction: (state, action) => {
      state.playerDirection = action.payload;
  }
  }
});

// Action creators are generated for each case reducer function
export const { turn, action, position, direction } = starknetSlice.actions

export default starknetSlice.reducer