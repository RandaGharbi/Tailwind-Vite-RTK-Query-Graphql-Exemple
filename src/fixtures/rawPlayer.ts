import { PlayersResponse } from "../app/types/player";

export const rawPlayer: PlayersResponse = {
  players: [
    {
      id: "player-1",
      firstname: "Stan",
      lastname: "Wawrinka",
      shortname: "S.WAW",
      sex: "MAN",
      picture: {
        url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
      },
      country: {
        picture: {
          url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
        },
        code: "SUI",
      },
      stats: {
        rank: 21,
        points: 1784,
        weight: 81000,
        height: 183,
        age: 33,
      },
    },
    {
      id: "player-2",
      firstname: "Rafael",
      lastname: "Nadal",
      shortname: "R.NAD",
      sex: "MAN",
      picture: {
        url: "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      },
      country: {
        picture: {
          url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
        },
        code: "ESP",
      },
      stats: {
        rank: 1,
        points: 1982,
        weight: 85000,
        height: 185,
        age: 33,
      },
    },
  ],
};
