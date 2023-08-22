import matchesData from "../../fixtures/match";
import playersData from "../../fixtures/player";
import { playersDetails } from "../../fixtures/playersDetails";
import { playersSelector, playerByIdSelector } from "../slices/selectors";

describe("selectors", () => {
  it("playersSelector", () => {
    expect(playersSelector.resultFunc(playersData, matchesData)).toEqual(
      playersDetails
    );
  });
  it("playerByIdSelector: find player-1", () => {
    expect(playerByIdSelector("player-1").resultFunc(playersDetails)).toEqual(
      playersDetails[0]
    );
  });
  it("playerByIdSelector: find player-2", () => {
    expect(playerByIdSelector("player-2").resultFunc(playersDetails)).toEqual(
      playersDetails[1]
    );
  });
});
