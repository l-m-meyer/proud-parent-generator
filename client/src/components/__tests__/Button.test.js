import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import Button from '../Button';

afterEach(cleanup);

it('renders without crashing', () => {
  render(<Button />);
});

it('renders its `children` prop as text', () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText('Default')).toBeInTheDocument();
});

it('renders a default button style', () => {
  const { getByText } = render(<Button>Default</Button>);
  expect(getByText('Default')).toHaveClass('btn');
});

// TODO: figure out why this test does not pass. It should pass, but it won't.
it('renders a clickable button', () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <Button onClick={handleClick}>
      Clickable
    </Button>
  );

  const button = getByText('Clickable');

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
})