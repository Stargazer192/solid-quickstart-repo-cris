describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('display header text', () => {
    cy.get('h1')
    .contains('Cris Andrei Resto', { matchCase: false })
  })

  it('displays Click ', () => {
    cy.get('button')
    .contains('Clicks');
  })
})
