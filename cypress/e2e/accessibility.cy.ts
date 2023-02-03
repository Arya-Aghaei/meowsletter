describe('template spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.injectAxe()
  })
  it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y()
  })
  
})