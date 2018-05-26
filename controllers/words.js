const WordsManager = require('./../lib/words_manager')
const _ = require('lodash')

module.exports = {
  async create(ctx, next) {
    const filePath = _.get(ctx.request, 'files.file.path')
    const { text } = ctx.request.body

    if (!text && !filePath) {
      ctx.status = 400
      return
    }

    const input = { text, filePath }
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
