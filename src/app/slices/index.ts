import playerReducer, { rootSelector as rootPlayerSelector } from "./player";
import matchReducer, { rootSelector as rootMatchSelector } from "./match";
import { playerByIdSelector, playersSelector } from "./selectors";

export {
  playerReducer,
  matchReducer,

  // selectors
  rootPlayerSelector,
  rootMatchSelector,
  playersSelector,
  playerByIdSelector,
};
