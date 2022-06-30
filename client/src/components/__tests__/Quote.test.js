import { render, cleanup } from '@testing-library/react';
import Quote from '../Quote';

afterEach(cleanup);

test('renders without crashing', () => {
  render(<Quote />);
});

test('renders its `children` prop as text', () => {
  const { getByText } = render(<Quote>Proud of you.</Quote>);
  expect(getByText('Proud of you.')).toBeInTheDocument();
})