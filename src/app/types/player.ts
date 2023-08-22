export interface Player {
  id: string;
  firstName: string;
  lastName: string;
  shortName: string;
  gender: string;
  picture: string;
  country: {
    picture: string;
    code: string;
  };
  stats: {
    rank: number;
    points: number;
    weight: string;
    height: string;
    age: number;
  };
}

export interface PlayerStatistics {
  totalMatchesPlayed: number;
  totalWins: number;
  totalLosses: number;
  winningMatches: {
    players: Pick<
      Player,
      "firstName" | "id" | "lastName" | "shortName" | "picture"
    >[];
    matchId: string;
    startTime: string;
    endTime: string;
  }[];
}

export type PlayerDetails = Player & PlayerStatistics;

interface RawPlayer
  extends Omit<
    Player,
    "firstName" | "lastName" | "shortName" | "gender" | "picture" | "country" | "stats"
  > {
  firstname: string;
  lastname: string;
  shortname: string;
  sex: string;
  picture: {
    url: string;
  };
  stats: {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
  };
  country: {
    picture: {
      url: string;
    };
    code: string;
  };
}

export interface PlayersResponse {
  players: RawPlayer[];
}
