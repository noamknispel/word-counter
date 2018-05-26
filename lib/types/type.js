module.exports = class Type {
  constructor(input) {
    this.input = input
  }

  getWords() {
    throw new Error('getWords is not implemented for this type')
  }
}
