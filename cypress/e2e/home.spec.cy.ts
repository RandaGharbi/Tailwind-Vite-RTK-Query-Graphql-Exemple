describe('template spec', () => {
  it('passes', () => {
    cy.viewport(899, 842);
    cy.visit("http://localhost:5173/");
    cy.get("[data-test-id='read-more-S\\.WAW']").click();
    cy.get("h2").click();
    cy.get("div.py-4 > button").click();
    cy.visit("http://localhost:5173/");
  });
});
