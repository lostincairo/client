import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  inLobby: false,
  inGame: false,
  inInit: false,
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
    },
    enterInit: (state) => {
        state.inInit = true;
    },
    exitInit: (state) => {
        state.inInit = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { enterGame, exitGame, enterLobby, exitLobby, enterInit, exitInit } = gameSlice.actions

export default gameSlice.reducer