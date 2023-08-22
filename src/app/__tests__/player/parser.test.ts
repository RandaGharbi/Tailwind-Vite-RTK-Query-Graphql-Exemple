import { parsePlayers } from "../../api/player/parser"; 
import { rawPlayer as mockPlayerResponse } from "../../../fixtures/rawPlayer"; 
import playersData from "../../../fixtures/player";

describe("parsePlayers", () => {
  it("correctly parses and transforms player data", () => {
    const parsedPlayer = parsePlayers(mockPlayerResponse);
    expect(parsedPlayer).toEqual(playersData);
  });
});
