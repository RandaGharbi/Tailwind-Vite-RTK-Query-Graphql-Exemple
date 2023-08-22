import { store } from "../store";
import { Match } from "./match";
import { Player } from "./player";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type MatchState = {
  matches: Match[] | undefined;
};

export type PlayersState = {
  players: Player[] | undefined;
};
