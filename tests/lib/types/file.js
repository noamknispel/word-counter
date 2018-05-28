const FileType = require('./../../../lib/types/file')
const sinon = require('sinon')

describe('File', function() {
  describe('getContent', function() {
    it('call next with file content', async function() {
      const next = sinon.spy()
      const file = new FileType(`${__dirname}/../../../testfile.txt`)
      await file.getContent(next)

      expect(next.getCall(0).args[0]).to.be.a('string')
    })
  })
})
