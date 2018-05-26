const URL = '/api/words'

describe('Words Controller', function() {
  beforeEach(async () => storeTest.flushdbAsync())

  describe('create', function() {
    it('works for string', async function() {
      await httpTest.post(URL).send({ text: 'Donald Trump' })
      const result = await storeTest.getAsync('donald')
      expect(result).to.eql('1')
    })

    it('return 400 if no input', async function() {
      const response = await httpTest.post(URL).send({ text: '' })
      expect(response.status).to.eql(400)
    })
  })

  describe('find', function() {
    beforeEach(async () => storeTest.incr('trump'))

    const testCases = [
      { title: 'return correct count', word: 'trump', expected: '1' },
      { title: 'return zero for not existing word', word: 'hillary', expected: '0' }
    ]

    testCases.map((testCase) => {
      it(testCase.title, async function() {
        const response = await httpTest.get(`${URL}/${testCase.word}`)
        expect(response.text).to.eql(testCase.expected)
      })
    })

    it('return 404 if no word', async function() {
      const response = await httpTest.get(`${URL}/`)
      expect(response.status).to.eql(404)
    })
  })
})
