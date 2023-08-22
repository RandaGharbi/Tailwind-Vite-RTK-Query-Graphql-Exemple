import { PlayerDetails } from "../app/types/player";

export const playersDetails: PlayerDetails[] = [
  {
    country: {
      code: "SUI",
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
    },
    firstName: "Stan",
    gender: "MAN",
    id: "player-1",
    lastName: "Wawrinka",
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    shortName: "S.WAW",
    stats: {
      age: 33,
      height: "1.83 m",
      points: 1784,
      rank: 21,
      weight: "81 Kg",
    },
    totalLosses: 0,
    totalMatchesPlayed: 3,
    totalWins: 3,
    winningMatches: [
      {
        endTime: "2022-01-31T16:33:00.000Z",
        matchId: "match-1",
        players: [
          {
            firstName: "Roger",
            id: "player-1",
            lastName: "Federer",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
            shortName: "R.FED",
          },
          {
            firstName: "Rafael",
            id: "player-2",
            lastName: "Nadal",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
            shortName: "R.NAD",
          },
        ],
        startTime: "2022-01-31T07:12:00.000Z",
      },
      {
        endTime: "2021-10-29T13:20:00.000Z",
        matchId: "match-2",
        players: [
          {
            firstName: "Roger",
            id: "player-1",
            lastName: "Federer",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
            shortName: "R.FED",
          },
          {
            firstName: "Rafael",
            id: "player-2",
            lastName: "Nadal",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
            shortName: "R.NAD",
          },
        ],
        startTime: "2021-10-29T06:39:00.000Z",
      },
      {
        endTime: "2021-05-14T14:38:00.000Z",
        matchId: "match-3",
        players: [
          {
            firstName: "Roger",
            id: "player-1",
            lastName: "Federer",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
            shortName: "R.FED",
          },
          {
            firstName: "Rafael",
            id: "player-2",
            lastName: "Nadal",
            picture:
              "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
            shortName: "R.NAD",
          },
        ],
        startTime: "2021-05-14T03:20:00.000Z",
      },
    ],
  },
  {
    country: {
      code: "ESP",
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
    },
    firstName: "Rafael",
    gender: "MAN",
    id: "player-2",
    lastName: "Nadal",
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
    shortName: "R.NAD",
    stats: {
      age: 33,
      height: "1.85 m",
      points: 1982,
      rank: 1,
      weight: "85 Kg",
    },
    totalLosses: 3,
    totalMatchesPlayed: 3,
    totalWins: 0,
    winningMatches: [],
  },
];
