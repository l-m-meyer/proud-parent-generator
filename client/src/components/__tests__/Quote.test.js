import { render, cleanup } from '@testing-library/react';

import Quote from '../Quote';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Quote />);
});