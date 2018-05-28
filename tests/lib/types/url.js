const UrlType = require('./../../../lib/types/url')
const sinon = require('sinon')

describe('URL', function() {
  describe('getContent', function() {
    it('call next with content from URL', async function() {
      const next = sinon.spy()
      const url = new UrlType(config.testUrl)
      await url.getContent(next)

      expect(next.getCall(0).args[0]).to.be.a('string')
    })
  })
})
