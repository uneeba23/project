const X2JS = require('x2js')

describe('sitemap', () => {
  it('fileread', () => {
  
    cy.request('https://www.hbomaxcanada.com/post-sitemap1.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })
        
  it('fileread2', () => {
  
    cy.request('https://www.hbomaxcanada.com/post-sitemap2.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })
  it('fileread3', () => {
  
    cy.request('https://www.hbomaxcanada.com/post-sitemap3.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })

  it('fileread4', () => {
  
    cy.request('https://www.hbomaxcanada.com/page-sitemap.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })
  it('fileread5', () => {
  
    cy.request('https://www.hbomaxcanada.com/category-sitemap.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })

  it('fileread6', () => {
  
    cy.request('https://www.hbomaxcanada.com/post_tag-sitemap.xml')
      .its('body')
      .then((body) => {
        const x2js = new X2JS()
        const json = x2js.xml2js(body)
        // get all URLs from the sitemap
        expect(json.urlset.url).to.be.an('array').and.have.length.gt(0)

        json.urlset.url.forEach((url) => {
          const parsed = new URL(url.loc)
          cy.log(parsed.pathname)
        
          // check if the resource exists
          cy.request('HEAD', url.loc).its('status').should('eq', 200)
          // check if the resource exists AND download it
          cy.request(url.loc).its('status').should('eq', 200)

              
          cy.visit(url.loc).wait(1000, { log: false })
        })    
    
    })


  })

  it.only('fileread7', () => {
    cy.visit('https://www.hbomaxcanada.com/author/editor/')
    cy.get("a").each(a => {
        const message = a.text();
          expect(a, message)
           .to.have.attr('href')
           .not.contain('undefined')
             .not.contain('javascript:void(0)')
});
     
  })
})