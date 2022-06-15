const got = require('got')
const X2JS = require('x2js')


module.exports = async (on, config) => {
  const sitemapUrl = `${config.baseUrl}/sitemap.xml`
  const xml = await got(sitemapUrl).text()
  const x2js = new X2JS()
  const json = x2js.xml2js(xml)
  const url = json.urlset.url.map((url) => url.loc)
  console.log(urls)

  config.env.sitemapUrls = url
  // make sure to return the changed config
  return config
}