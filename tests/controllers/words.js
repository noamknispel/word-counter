const URL = '/api/words'

describe('Words Controller', function() {
  beforeEach(async () => storeTest.flushdbAsync())

  describe('create', function() {
    describe('string', function() {
      it('save words count', async function() {
        await httpTest.post(URL).send({ text: 'Donald Trump' })
        const count = await storeTest.getAsync('donald')
        expect(count).to.eql('1')
      })

      it('return 400 if string is empty', async function() {
        const response = await httpTest.post(URL).send({ text: '' })
        expect(response.status).to.eql(400)
      })
    })

    describe('url', function() {
      it('save words count', async function() {
        // Currently the request go to third-party API (due time limit) -
        // TODO: run local server and send the request in close environment
        await httpTest.post(URL).send({ url: config.testUrl })
        const count = await storeTest.getAsync('ipsum')
        expect(count).to.be.a('string') // if key is not exisits null will be returened
      })

      it('return 400 if url is empty', async function() {
        const response = await httpTest.post(URL).send({ url: '' })
        expect(response.status).to.eql(400)
      })
    })

    describe('file', function() {
      it('save words count', async function() {
        // The test file is placed not inside the tests dirctory because bug in mocha excluding parameter
        await httpTest.post(URL).attach('file', `${__dirname}/../../testfile.txt`, 'testfile.txt')

        const count = await storeTest.getAsync('hey')
        expect(count).to.eql('1')
      })

      it('return 400 if filePath is empty', async function() {
        const response = await httpTest.post(URL).attach('file', '', 'nothing.txt')
        expect(response.status).to.eql(400)
      })
    })
  })

  describe('find', function() {
    beforeEach(async () => storeTest.incr('trump'))

    const testCases = [
      { title: 'return correct count', word: 'trump', expected: '1' },
      { title: 'return zero for not existing word', word: 'hillary', expected: '0' }
    ]

    testCases.map(({ title, word, expected }) => {
      it(title, async function() {
        const response = await httpTest.get(`${URL}/${word}`)
        expect(response.text).to.eql(expected)
      })
    })

    it('return 404 if no word', async function() {
      const response = await httpTest.get(`${URL}/`)
      expect(response.status).to.eql(404)
    })
  })
})
