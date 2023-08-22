import { render } from "../../utils/test-utils";
import PlayerRank from './PlayerRank';
import { playersDetails } from '../../fixtures/playersDetails';

describe('PlayerRank', () => {

  it('renders player details correctly', () => {
    const playerDetails = playersDetails[0];
    const { getByText } = render(<PlayerRank {...playerDetails}/>);

    const firstNameElement = getByText('Stan');
    const lastNameElement = getByText('Wawrinka');
    const rankElement = getByText('Rank');
    const rankValueElement = getByText('21');
    const countryElement = getByText('SUI');

    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
    expect(rankElement).toBeInTheDocument();
    expect(rankValueElement).toBeInTheDocument();
    expect(countryElement).toBeInTheDocument();
  });
});
