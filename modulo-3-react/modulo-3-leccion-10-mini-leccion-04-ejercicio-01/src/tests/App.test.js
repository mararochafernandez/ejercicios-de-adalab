import { render, screen } from '@testing-library/react';
import App from '../components/App';
import MenuItem from '../components/MenuItem';

test('check if target is _blank when openInNewTab is true', () => {
  // Arrange
  render(<MenuItem text="Blog" href="https://adalab.es/blog" openInNewTab />);

  // Act
  const htmlElement = screen.getByText('Blog');
  console.log(htmlElement);

  // Assert
  console.log(htmlElement.target);
  expect(htmlElement.target).toBe('_blank');
});

test('check if target is empty when openInNewTab is false', () => {
  // Arrange
  render(<MenuItem text="Contacto" href="https://adalab.es/contacto" />);

  // Act
  const htmlElement = screen.getByText('Contacto');
  console.log(htmlElement);

  // Assert
  console.log(htmlElement.target);
  expect(htmlElement.target).toBeFalsy();
});
