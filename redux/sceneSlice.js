import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  selected_x: null,
  selected_y: null,
  highlighted_x: null,
  highlighted_y: null,
  available_moves: [],
};

export const sceneSlice = createSlice({
  name: "_scene",
  initialState,
  reducers: {
    setSelectedX: (state, action) => {
      state.selected_x = action.payload;
    },
    setSelectedY: (state, action) => {
      state.selected_y = action.payload;
    },
    setHighlightedX: (state, action) => {
      state.highlighted_x = action.payload;
    },
    setHighlightedY: (state, action) => {
      state.highlighted_y = action.payload;
    },
    addAvailableMoves: (state, action) => {
      state.available_moves.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedX, setSelectedY, setHighlightedX, setHighlightedY, addAvailableMoves } =
  sceneSlice.actions;

export default sceneSlice.reducer;
