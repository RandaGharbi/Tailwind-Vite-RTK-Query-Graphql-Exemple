import { Match } from "../app/types/match";
import { Player, PlayerStatistics } from "../app/types/player";

function getPlayerStatistics(players: Player[], matches: Match[]) {
  const playerStatistics = new Map<Player["id"], PlayerStatistics>();

  players.forEach((player) => {
    playerStatistics.set(player.id, {
      totalMatchesPlayed: 0,
      totalWins: 0,
      totalLosses: 0,
      winningMatches: [],
    });
  });

  matches.forEach((match) => {
    match.players.forEach((player) => {
      const playerStat = playerStatistics.get(player.id);
      if (!playerStat) return;
      playerStat.totalMatchesPlayed++;

      if (match.winner.id === player.id) {
        playerStat.totalWins++;
        playerStat.winningMatches.push({
          matchId: match.id,
          startTime: match.startTime,
          endTime: match.endTime,
          players: match.players,
        });
      } else {
        playerStat.totalLosses++;
      }
    });
  });

  return playerStatistics;
}

export default getPlayerStatistics;
