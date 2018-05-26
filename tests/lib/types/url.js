const UrlType = require('./../../../lib/types/url')

describe('URL', function() {
  describe('getContent', function() {
    it('return content from URL', async function() {
      const url = new UrlType(config.testUrl)
      const content = await url.getContent()
      expect(content).to.be.a('string')
    })
  })
})
