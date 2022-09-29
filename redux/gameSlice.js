import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  inLobby: false,
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
    },
    enterLobby: (state) => {
        state.inLobby = true;
    },
    exitLobby: (state) => {
        state.inLobby = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { enterGame, exitGame, enterLobby, exitLobby } = gameSlice.actions

export default gameSlice.reducer