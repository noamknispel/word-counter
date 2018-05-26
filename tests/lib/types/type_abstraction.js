const TypeAbstraction = require('./../../../lib/types/type_abstraction')

describe('Type Abstraction', function() {
  describe('constructor', function() {
    it('save the input', function() {
      const input = 'I\'m an input'
      const type = new TypeAbstraction(input)
      expect(type.input).to.eql(input)
    })
  })

  describe('getContent', function() {
    it('throw an error', function() {
      const type = new TypeAbstraction(null)
      expect(type.getContent).to.throw('getContent is not implemented')
    })
  })
})
