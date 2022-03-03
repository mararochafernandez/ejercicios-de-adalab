import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders "Happy coding!"', () => {
  // Arrange
  render(<App />);
  // Act
  const divElement = screen.getByText('Happy coding!');
  // Assert
  expect(divElement).toBeInTheDocument();
});
