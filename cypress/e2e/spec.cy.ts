describe('Test E2E MedHead', () => {
  it('Visite de la page principale', () => {
    cy.visit('/')
    cy.get(('#specialization')).select('17');
    cy.get(('#latitudeInput')).type('-21.114302');
    cy.get(('#longitudeInput')).type('55.654626');
    cy.get('button[type=submit]').click();
    cy.get('#result').should('exist');
  })
})
