import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  selectedRow: null,
  selectedCol: null,
  highlightedRow: null,
  highlightedCol: null,
  availableMoves: [],
  history: [],
  isOver: "false",
  playerPosition: null,
}


export const sceneSlice = createSlice({
  name: "_scene",
  initialState,
  reducers: {
    selectRow: (state, action) => {
        state.selectedRow = action.payload;
    },
    selectCol: (state, action) => {
        state.selectedCol = action.payload;
    },
    highlightRow: (state, action) => {
        state.highlightedRow = action.payload;
    },
    highlightCol: (state, action) => {
        state.highlightedCol = action.payload;
    },
    movePlayer: (state, action) => {
        state.playerPosition = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectRow, selectCol, highlightRow, highlightCol, movePlayer } = sceneSlice.actions

export default sceneSlice.reducer