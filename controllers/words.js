const Model = require('./../models/words')
const _ = require('lodash')

module.exports = {
  async create(ctx, next) {
    const filePath = _.get(ctx.request, 'files.file.path')
    const { text, url } = ctx.request.body

    if (!text && !filePath && !url) {
      ctx.status = 400
      return
    }

    const input = { text, filePath, url }
    const model = new Model(input)
    await model.insert()
    ctx.status = 204
  },

  async find(ctx, next) {
    const { word } = ctx.params
    // Assumption: no need validation here, the router will catch it

    const model = new Model(word)
    const count = await model.getCount()

    ctx.body = count || '0'
    ctx.status = 200
  }
}
