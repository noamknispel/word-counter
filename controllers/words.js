const WordsManager = require('./../lib/words_manager')

module.exports = {
  async create(ctx, next) {
    const { input } = ctx.request.body
    if (!input) {
      ctx.status = 400
      return
    }

    const wordsManager = new WordsManager(input)
    await wordsManager.insert()
    ctx.status = 204
  },

  async find(ctx, next) {
    const { word } = ctx.params
    // Assumption: no need validation here, the router will catch it

    const wordsManager = new WordsManager(word)
    const count = await wordsManager.getCount()

    ctx.body = count || '0'
    ctx.status = 200
  }
}
