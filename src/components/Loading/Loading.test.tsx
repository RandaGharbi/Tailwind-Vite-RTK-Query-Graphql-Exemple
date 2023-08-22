import { render } from "../../utils/test-utils";
import Loading from './Loading';

test('Loading component matches snapshot', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});