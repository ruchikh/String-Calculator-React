import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator text', () => {
  render(<App />);
  const linkElement = screen.getByText(/String Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
