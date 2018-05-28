const StringType = require('./../../../lib/types/string')
const sinon = require('sinon')

describe('String', function() {
  describe('getContent', function() {
    it('call next with string content', async function() {
      const inputString = 'you killed my father'
      const next = sinon.spy()
      const string = new StringType(inputString)
      await string.getContent(next)

      expect(next.calledWith(inputString)).to.eql(true)
    })
  })
})
