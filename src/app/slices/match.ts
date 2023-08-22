import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/match/matchApi";
import type { MatchState, RootState } from "../types/store";

const slice = createSlice({
  name: "match",
  initialState: { matches: undefined } as MatchState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getMatches.matchFulfilled,
      (state, { payload }) => {
        state.matches = payload;
      }
    );
  },
});

export default slice.reducer;

export const rootSelector = (state: RootState) => state.matchSlice.matches;
