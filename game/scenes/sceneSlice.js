import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  selectedCell: null,
  highlightedCell: null,
  availableMoves: [],
  whoseMove: "player",
  history: [],
  isOver: "false",
  playerPosition: null,
}


export const sceneSlice = createSlice({
  name: "_scene",
  initialState,
  reducers: {
    selectCell: (state, action) => {
        state.selectedCell = action.payload;
    },
    highlightCell: (state, action) => {
        state.highlightedCell = action.payload;
    },
    movePlayer: (state, action) => {
        state.playerPosition = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectCell, highlightCell, movePlayer } = sceneSlice.actions

export default sceneSlice.reducer