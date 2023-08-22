import { MatchResponse, Match } from "../../types/match";

export function parseMatches({ matches }: MatchResponse): Match[] {
  return matches.map((match) => ({
    ...match,
    players: match.players.map((player) => ({
      ...player,
      picture: player.picture.url,
      firstName: player.firstname,
      lastName: player.lastname,
      shortName: player.shortname,
    })),
  }));
}
