import { render, screen } from "../../utils/test-utils";

import PlayerInfo from './PlayerInfo'; 
import { playersDetails } from '../../fixtures/playersDetails';

describe('PlayerInfo', () => {
  const playerDetails = playersDetails[0];


  it('renders player details correctly', () => {
    render(<PlayerInfo {...playerDetails} />);
    expect(screen.getByText('Age')).toBeInTheDocument();
    expect(screen.getByText('33')).toBeInTheDocument();

    expect(screen.getByText('Weight')).toBeInTheDocument();
    expect(screen.getByText('81 Kg')).toBeInTheDocument();

    expect(screen.getByText('Height')).toBeInTheDocument();
    expect(screen.getByText('1.83 m')).toBeInTheDocument();

    expect(screen.getByText('Total Wins')).toBeInTheDocument();
    expect(screen.getByTestId('total_wins')).toHaveTextContent("3");

    expect(screen.getByText('Total Losses')).toBeInTheDocument();
    expect(screen.getByTestId('total_losses')).toHaveTextContent("0");

    expect(screen.getByText('Total Matches Played')).toBeInTheDocument();
    expect(screen.getByTestId('total_matches_played')).toHaveTextContent("3");
  });
});
