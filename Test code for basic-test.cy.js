// test case
describe('Basic Cypress Test', () => {
    it('Visits the Cypress example site and navigates to a page', () => {
        cy.visit ('https://jsonplaceholder.typicode.com/');

        // Click the "Guide" link
        cy.get(':nth-child(1) > .mr-4').click();
        cy.url().should('include', '/guide');
        
        // Assert the page contains specific text - it finds Guide as a link to click rather than h2
        cy.contains('Guide').should('be.visible');
    });
});
