import { createSelector } from "@reduxjs/toolkit";

import { PlayerDetails } from "../types/player";
import { rootSelector as rootMatchSelector } from "./match";
import { rootSelector as rootPlayerSelector } from "./player";
import getPlayerStatistics from "../../utils/playerStats";

export const playersSelector = createSelector(
  rootPlayerSelector,
  rootMatchSelector,
  (players, matches): PlayerDetails[] | undefined => {
    if (!players || !matches) return undefined;
    const playerStatistics = getPlayerStatistics(players, matches);
    return players.map((player) => ({
      ...player,
      ...playerStatistics.get(player.id),
    })) as PlayerDetails[];
  }
);

export const playerByIdSelector = (id: string) =>
  createSelector(playersSelector, (players) => {
    if (!players) return undefined;
    return players.find((player) => player.id === id);
  });
