import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the circular dependency
jest.mock('./components/Home/Home2', () => ({
  ...jest.requireActual('./components/Home/Home2'), // Keep the actual module functionality
  // Add any necessary mock implementations for Home2 here
}));

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
