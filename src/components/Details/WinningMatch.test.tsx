import { playersDetails } from "../../fixtures/playersDetails.ts";
import { render, screen } from "../../utils/test-utils.tsx";
import WinningMatchList from "./WinnigMatchList.tsx";


// Mock the dayjs library
jest.mock("dayjs", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    format: jest.fn(() => "01 Jan 2023")
  })),
}));

describe("WinningMatchList component", () => {
  const winningMatches = playersDetails[0].winningMatches;


  it("renders the component with initial matches", () => {
    render(<WinningMatchList winningMatches={winningMatches} />);
    
    const displayedMatches = winningMatches.slice(0, 10);

    displayedMatches.forEach((match) => {
      const player1Name = `${match.players[0].firstName} ${match.players[0].lastName}`;
      const player2Name = `${match.players[1].firstName} ${match.players[1].lastName}`;
      const formattedDate = "01 Jan 2023"; // Mocked date format

      const matchROW = screen.getByTestId(`match_${match.matchId}`);
      expect(matchROW).toBeInTheDocument();

      const player1 = screen.getByTestId(`player1_${match.matchId}`);
      expect(player1).toHaveTextContent(player1Name);

      const player2 = screen.getByTestId(`player2_${match.matchId}`);
      expect(player2).toHaveTextContent(player2Name);

      const date = screen.getByTestId(`date_${match.matchId}`);
      expect(date).toHaveTextContent(formattedDate);
    });

  });
});
