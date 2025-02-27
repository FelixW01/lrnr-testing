/* global describe, test, expect */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe('Home Component', () => {
  
  test('renders the logo', () => {
    render(<Home />); 

    // Check if the logo is rendered
    const logo = screen.getByAltText('lrnr website logo'); 
    expect(logo).toBeInTheDocument();
  });

  test('renders the Begin Journey button', () => {
    render(<Home />); 

    // Check if the button is rendered
    const button = screen.getByRole('button', { name: /Begin Journey/i });
    expect(button).toBeInTheDocument();
  });
});