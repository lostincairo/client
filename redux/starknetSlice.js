import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  isYourTurn: false,
  selectedAction: null,
  playerRow: null,
  playerCol: null,
  playerDirection: null,
  highlight: null,
  gameIdx: null,
  player_address: null,
  opponent_address: null,
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
  },
  SNhighlightRow: (state, action) => {
      state.highlightActionRow = action.payload;
  },
  SNhighlightCol: (state, action) => {
      state.highlightActionCol = action.payload;
  },
  setGameIdx: (state, action) => {
    state.gameIdx = action.payload;
  },
  setPlayerAddress: (state, action) => {
    state.player_address = action.payload;
  },
  setOpponentAddress: (state, action) => {
    state.opponent_address = action.payload;
  },
  setOpponentRow: (state, action) => {
    state.opponent_row = action.payload;
  },
  setOpponentCol: (state, action) => {
    state.opponent_col = action.payload;
  },
  }
});

// Action creators are generated for each case reducer function
export const { turn, action, positionRow, positionCol, direction, SNhighlightRow, SNhighlightCol, setGameIdx, setPlayerAddress, setOpponentAddress, setOpponentRow, setOpponentCol } = starknetSlice.actions

export default starknetSlice.reducer