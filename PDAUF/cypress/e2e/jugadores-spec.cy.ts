describe('Página de Jugadores', () => {

  // PRUEBA 1 - Caso exitoso: se muestra la lista de jugadores
  it('debería mostrar la lista de jugadores', () => {
    cy.visit('http://localhost:4200/jugadores');
    cy.contains('Jugadores por competición').should('be.visible');
    cy.contains('Pablo Jiménez').should('be.visible');
  });

  // PRUEBA 2 - Caso exitoso: el filtro de búsqueda funciona
  it('debería filtrar jugadores por nombre', () => {
    cy.visit('http://localhost:4200/jugadores');
    cy.get('#buscarJugadores').type('Pablo');
    cy.contains('Pablo Jiménez').should('be.visible');
  });

  // PRUEBA 3 - Caso de error controlado: jugador que no existe
  it('debería no mostrar jugadores si el nombre no existe', () => {
    cy.visit('http://localhost:4200/jugadores');
    cy.get('#buscarJugadores').type('NombreQueNoExiste');
    cy.get('.card').should('not.exist');
  });

});