const Model = require('./../../models/words')

describe('Words Model', function() {
  describe('getArrayOfWords', function() {
    [
      { title: 'clear extra spaces', input: '    this is the best word counter    ever' },
      { title: 'make everything lower case', input: 'This is the BEST Word Counter ever' },
      { title: 'remove punctuation', input: 'this is the best word-counter ever!!!' }
    ].map(({ title, input }) => {
      it(title, function() {
        const model = new Model()
        expect(model.getArrayOfWords(input))
          .to.eql(['this', 'is', 'the', 'best', 'word', 'counter', 'ever'])
      })
    })
  })
})
