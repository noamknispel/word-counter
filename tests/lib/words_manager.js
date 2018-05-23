const WordsManager = require('./../../lib/words_manager')

describe('Words Manager', function() {
  describe('getArrayOfWords', function() {
    [
      { title: 'clear extra spaces', input: '    this is the best word counter    ever' },
      { title: 'make everything lower case', input: 'This is the BEST Word Counter ever' },
      { title: 'remove punctuation', input: 'this is the best word-counter ever!!!' }
    ].map((testCase) => {
      it(testCase.title, function() {
        const wordsManager = new WordsManager(testCase.input)
        expect(wordsManager.getArrayOfWords())
          .to.eql(['this', 'is', 'the', 'best', 'word', 'counter', 'ever'])
      })
    })
  })
})
