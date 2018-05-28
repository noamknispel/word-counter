module.exports = class Type {
  constructor(input) {
    this.input = input
  }

  getContent(next) {
    throw new Error('getContent is not implemented')
  }
}
