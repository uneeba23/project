///<reference types="cypress"/>



describe('error',()=>{

    it('visit page',()=>{
        cy.visit('http://hbomaxcanada.com')
        cy.get('a',
            { timeout: 15000 }
) .should('be.visible');

        let skipHrefs = [
            'javascript:void(0);',
            '/',
            '/#',
            '#',
        ];
        cy
        .get('a')
        .each ("a:contains(.click)").each($a => {
    
            expect($a, message).to.not.have.attr("href", "404");
          });
            
             //      const href = element[0].href;

            /** If href exists,
             * does not use hash locations and
             * skip hrefs if they are in the array to skipHrefs
             * */
           // if (
            //    href
             //   && !href.includes('#')
             //   && !skipHrefs.includes(href)
           // ) {
                /** Send a request to the uri and check if the response status is 200 */
              //  cy
              //      .request(href)
                //    .should(response => {
                  //      expect(response.status).to.eq(200);
                  //  });
           // }
            
    });

  
});