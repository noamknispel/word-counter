const router = require('koa-router')({ prefix: '/api' })

const wordsController = require('../controllers/words')

module.exports = function routes() {
  router.post('/words', wordsController.create)
  router.get('/words/:word', wordsController.find)

  return router.routes()
}
