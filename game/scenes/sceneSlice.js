import { createSlice } from '@reduxjs/toolkit'

export const sceneSlice = createSlice({
  name: "_scene",
  initialState: {
    isHovered: false,
  },
  reducers: {
    hovered: (state) => {
      state.isHovered = true;
    },
    idle: (state) => {
        state.isHovered = false;
      },
  },
});

// Action creators are generated for each case reducer function
export const { hovered, idle } = sceneSlice.actions

export default sceneSlice.reducer