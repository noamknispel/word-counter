const StringType = require('./../../../lib/types/string')

describe('String', function() {
  describe('getContent', function() {
    it('return string content', async function() {
      const inputString = 'you killed my father'
      const string = new StringType(inputString)
      const content = await string.getContent()
      expect(content).to.eql(inputString)
    })
  })
})
