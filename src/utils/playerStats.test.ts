import matchesData  from "../fixtures/match";
import playersData from "../fixtures/player";
import getPlayerStatistics from "./playerStats";

describe("getPlayerStatistics", () => {
  it("calculates player statistics correctly", () => {
    const playerStatistics = getPlayerStatistics(
      playersData,
      matchesData
    ) as Map<string, any>;

    expect(playerStatistics.get("player-1").totalMatchesPlayed).toBe(3);
    expect(playerStatistics.get("player-1").totalWins).toBe(3);
    expect(playerStatistics.get("player-1").totalLosses).toBe(0);
    expect(playerStatistics.get("player-1").winningMatches).toHaveLength(3);

    expect(playerStatistics.get("player-2").totalMatchesPlayed).toBe(3);
    expect(playerStatistics.get("player-2").totalWins).toBe(0);
    expect(playerStatistics.get("player-2").totalLosses).toBe(3);
    expect(playerStatistics.get("player-2").winningMatches).toHaveLength(0);
  });
});
