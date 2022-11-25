import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../App';
import { renderWithProviders } from '../utils/utils-for-tests';

describe('App ', () => {
  test('renders Home page', () => {
    renderWithProviders(<App />);

    const home = screen.getByText(/Home/i);
    fireEvent.click(home);

    const result = screen.getByPlaceholderText(/type a dish name/i);
    expect(result).toBeInTheDocument();
  });

  test('renders About page', () => {
    renderWithProviders(<App />);

    const about = screen.getByText(/About/i);
    fireEvent.click(about);

    const result = screen.getAllByText(/About/i);
    expect(result).toHaveLength(2);
  });
});
