module.exports = class Type {
  constructor(input) {
    this.input = input
  }

  getContent() {
    throw new Error('getContent is not implemented')
  }
}
