import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// Actualiza el test para usar `React.act` en lugar de `react-dom/test-utils.act`
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
