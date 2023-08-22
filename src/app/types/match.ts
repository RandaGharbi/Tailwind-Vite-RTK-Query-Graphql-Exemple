import { Player } from "./player";

export interface Match {
  id: string;
  players: Pick<
    Player,
    "firstName" | "id" | "lastName" | "shortName" | "picture"
  >[];
  winner: Pick<Player, "id">;
  startTime: string;
  endTime: string;
}

export interface RawMatch extends Omit<Match, "players"> {
  players: {
    id: string;
    firstname: string;
    lastname: string;
    shortname: string;
    picture: {
      url: string;
    };
  }[];
}

export interface MatchResponse {
  matches: RawMatch[];
}
