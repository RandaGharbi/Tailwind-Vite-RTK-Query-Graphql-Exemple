import { render } from "../../utils/test-utils";

import { PlayerCard } from "./PlayerCard";

import { playersDetails } from "../../fixtures/playersDetails";

describe("PlayerCard", () => {
  const playerDetails = playersDetails[0];

  it("renders player details correctly", () => {
    const { getByText } = render(<PlayerCard {...playerDetails} />);
    expect(getByText("Stan Wawrinka")).toBeInTheDocument();
    // country
    expect(getByText("SUI")).toBeInTheDocument();
    // height / weight
    expect(getByText("Height 1.83 m / Weight 81 Kg")).toBeInTheDocument();
    // Total Matches Played
    expect(getByText("Total Matches Played: 3")).toBeInTheDocument();
    // Total Wins / Total Losses
    expect(getByText("Total Wins: 3 / Total Losses: 0")).toBeInTheDocument();
  });

  it('renders the "Read More" link correctly', () => {
    const { getByText } = render(<PlayerCard {...playerDetails} />);

    expect(getByText("Read More")).toBeInTheDocument();
  });
});
