/// <reference types ="cypress-each" />
it("has anchor tags using cy.get and .each", () => {
    cy.visit("http://hbomaxcanada.com");
      cy.wait(9000)
         cy.get("a").each(a => {
            const message = a.text();
              expect(a, message)
               .to.have.attr('href')
               .not.contain('undefined')
                 .not.contain('javascript:void(0)')
 });

})