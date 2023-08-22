import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/player/palyerApi";
import type { PlayersState, RootState } from "../types/store";

const slice = createSlice({
  name: "player",
  initialState: { players: undefined } as PlayersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getPlayers.matchFulfilled,
      (state, { payload }) => {
        state.players = payload;
      }
    );
  },
});

export default slice.reducer;

export const rootSelector = (state: RootState) => state.playerSlice.players;
