import { render, screen } from "../../utils/test-utils";
import { Route, Routes } from "react-router-dom";

import PlayerDetail from ".";

describe("PlayerDetail component", () => {
  it("renders player details and handles 'Show More' button", () => {
    render(
      <Routes location={"/players/player-1"}>
        <Route path="/players/:id" element={<PlayerDetail />} />
      </Routes>
    );

    expect(screen.getByText("Stan")).toBeInTheDocument();
    expect(screen.getByText("Wawrinka")).toBeInTheDocument();
    expect(screen.getByText("33")).toBeInTheDocument();
    expect(screen.getByText("1.83 m")).toBeInTheDocument();
  });
});
