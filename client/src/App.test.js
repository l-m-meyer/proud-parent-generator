import { render, cleanup, screen } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders proud parent logo text', () => {
  render(<App />);
  const logoText = screen.getByText(/proud parent/i);
  expect(logoText).toBeInTheDocument();
});
