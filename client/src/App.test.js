import { render, screen } from '@testing-library/react';
import App from './App';

test('renders proud parent logo text', () => {
  render(<App />);
  const logoText = screen.getByText(/proud parent/i);
  expect(logoText).toBeInTheDocument();
});
