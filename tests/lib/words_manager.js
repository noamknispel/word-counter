const WordsManager = require('./../../lib/words_manager')

describe('Words Manager', function() {
  describe('getArrayOfWords', function() {
    [
      { title: 'clear extra spaces', input: '    this is the best word counter    ever' },
      { title: 'make everything lower case', input: 'This is the BEST Word Counter ever' },
      { title: 'remove punctuation', input: 'this is the best word-counter ever!!!' }
    ].map(({ title, input }) => {
      it(title, function() {
        const wordsManager = new WordsManager()
        expect(wordsManager.getArrayOfWords(input))
          .to.eql(['this', 'is', 'the', 'best', 'word', 'counter', 'ever'])
      })
    })
  })
})
