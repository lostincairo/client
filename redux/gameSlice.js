import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  inGame: false,
}


export const gameSlice = createSlice({
  name: "_game",
  initialState,
  reducers: {
    enterGame: (state) => {
        state.inGame = true;
    },
    exitGame: (state) => {
        state.inGame = false;
    }
    }
  }
);

// Action creators are generated for each case reducer function
export const { enterGame, exitGame } = gameSlice.actions

export default gameSlice.reducer