const FileType = require('./../../../lib/types/file')

describe('file', function() {
  describe('getContent', function() {
    it('return file content', async function() {
      const file = new FileType(`${__dirname}/../../../testfile.txt`)
      const content = await file.getContent()
      expect(content.trim()).to.eql('hey there!')
    })
  })
})
