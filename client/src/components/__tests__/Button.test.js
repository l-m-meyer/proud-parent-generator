import { render, cleanup } from '@testing-library/react';

import Button from '../Button';

afterEach(cleanup);

test('Button renders without crashing', () => {
  render(<Button />);
});

test('Button renders its `children` prop as text', () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText('Default')).toBeInTheDocument();
});

test('Button renders a default button style', () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText('Default')).toHaveClass('btn');
});