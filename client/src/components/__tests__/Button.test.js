import { render, cleanup } from '@testing-library/react';

import Button from '../Button';

afterEach(cleanup);

test('Button renders without crashing', () => {
  render(<Button />);
});