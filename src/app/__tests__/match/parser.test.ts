import { parseMatches } from "../../api/match/parser"; 
import { rawMatch as mockMatchResponse } from "../../../fixtures/rawMatch"; 

const mockMatch = {
  endTime: "2022-01-31T16:33:00.000Z",
  id: "match-1",
  players: [
    {
      firstName: "Stan",
      firstname: "Stan",
      id: "player-1",
      lastName: "Wawrinka",
      lastname: "Wawrinka",
      picture:
        "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
      shortName: "S.WAW",
      shortname: "S.WAW",
    },
    {
      firstName: "Rafael",
      firstname: "Rafael",
      id: "player-2",
      lastName: "Nadal",
      lastname: "Nadal",
      picture:
        "https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg",
      shortName: "R.NAD",
      shortname: "R.NAD",
    },
  ],
  startTime: "2022-01-31T07:12:00.000Z",
  winner: {
    id: "player-1",
  },
};

describe("parseMatches", () => {
  it("correctly parses and transforms match data", () => {
    const parsedMatches = parseMatches(mockMatchResponse);
    expect(parsedMatches[0]).toEqual(mockMatch);
  });
});
