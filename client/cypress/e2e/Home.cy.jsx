/* global describe, it, cy */


describe('Home Page', () => {
  it('should load the home page and display the title', () => {
    cy.visit('http://localhost:5173');
    // Check for title
    cy.title().should('include', 'LRNR App: Tom');
  });
});

describe('Logo Visibility', () => {
  it('should display the logo', () => {
    cy.visit('http://localhost:5173'); 
    // Check for logo
    cy.get('.cus-logo').should('be.visible');
  });
});

describe('Begin Journey Button', () => {
  it('should be present and clickable', () => {
    cy.visit('http://localhost:5173'); 
    // Check for button, and if it's clickable
    cy.get('.cus-home-btn').should('exist').click();
  });
});

describe('Card Component Rendering', () => {
  it('should render card components with correct headings', () => {
    cy.visit('http://localhost:5173'); 
    // Check for 3 card components
    cy.get('.cus-hc-grid .cus-home-card').should('have.length', 3); 
    // Check the first card heading
    cy.get('.cus-hc-grid .cus-home-card').first().find('h3').should('contain', 'Personalized Quizzes'); 
  });
});