import { Match } from "../app/types/match";

const matchesData = [
  {
    id: "match-1",
    players: [
      {
        id: "player-1",
        firstName: "Roger",
        lastName: "Federer",
        shortName: "R.FED",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
      },
      {
        id: "player-2",
        firstName: "Rafael",
        lastName: "Nadal",
        shortName: "R.NAD",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      },
    ],
    winner: {
      id: "player-1",
    },
    startTime: "2022-01-31T07:12:00.000Z",
    endTime: "2022-01-31T16:33:00.000Z",
  },
  {
    id: "match-2",
    players: [
      {
        id: "player-1",
        firstName: "Roger",
        lastName: "Federer",
        shortName: "R.FED",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
      },
      {
        id: "player-2",
        firstName: "Rafael",
        lastName: "Nadal",
        shortName: "R.NAD",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      },
    ],
    winner: {
      id: "player-1",
    },
    startTime: "2021-10-29T06:39:00.000Z",
    endTime: "2021-10-29T13:20:00.000Z",
  },
  {
    id: "match-3",
    players: [
      {
        id: "player-1",
        firstName: "Roger",
        lastName: "Federer",
        shortName: "R.FED",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg",
      },
      {
        id: "player-2",
        firstName: "Rafael",
        lastName: "Nadal",
        shortName: "R.NAD",
        picture:
          "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      },
    ],
    winner: {
      id: "player-1",
    },
    startTime: "2021-05-14T03:20:00.000Z",
    endTime: "2021-05-14T14:38:00.000Z",
  },
] satisfies Match[];

export default matchesData;
