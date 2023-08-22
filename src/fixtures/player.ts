import { Player } from "../app/types/player";

const playersData = [
  {
    id: "player-1",
    stats: {
      rank: 21,
      points: 1784,
      height: "1.83 m",
      weight: "81 Kg",
      age: 33,
    },
    firstName: "Stan",
    lastName: "Wawrinka",
    shortName: "S.WAW",
    gender: "MAN",
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
    country: {
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
      code: "SUI",
    },
  },
  {
    id: "player-2",
    stats: {
      rank: 1,
      points: 1982,
      height: "1.85 m",
      weight: "85 Kg",
      age: 33,
    },
    firstName: "Rafael",
    lastName: "Nadal",
    shortName: "R.NAD",
    gender: "MAN",
    picture:
      "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
    country: {
      picture: "https://i.eurosport.com/_iss_/geo/country/flag/large/2203.png",
      code: "ESP",
    },
  },
] satisfies Player[];

export default playersData;
