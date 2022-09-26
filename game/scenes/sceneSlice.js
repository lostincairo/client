import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  selectedCell: null,
  highlightedCell: null,
  availableMoves: [],
  whoseMove: "player",
  history: [],
  isOver: "false",
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
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectCell, highlightCell } = sceneSlice.actions

export default sceneSlice.reducer