import Home from ".";
import { render, screen } from "../../utils/test-utils";

describe("Home", () => {
  it("renders home cards correctly", async () => {
    render(<Home />);
    const StanCard = await screen.findByTestId("card_S.WAW");
    expect(StanCard).toBeInTheDocument();

    const RafaelCard = await screen.findByTestId("card_R.NAD");
    expect(RafaelCard).toBeInTheDocument();
  });
});
