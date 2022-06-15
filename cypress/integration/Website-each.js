/// <reference types ="cypress-each" />

import map from 'map'

describe('Sitemap', () => {

  it('has urls', () => {
   expect(Cypress.env('sitemapUrls')).to.be.an('array').and.not.be.empty

    
      const urls = Cypress.env('sitemapUrls').map((fullUrl) => {
      const parsed = new URL(fullUrl)
      return parsed.pathname
    })

    it.each(urls)('url %s', (url) => {
      cy.request(url).its('status').should('eq', 200)
      // visit the page to check if it loads in the browser
      cy.visit(url).wait(1000, { log: false })
    })
  })                           
})