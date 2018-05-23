const env = process.env.NODE_ENV || 'dev'
require(`./config/${env}`)

const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const apiRouter = require('./routers/apis')

app.use(bodyParser())
app.use(apiRouter())

app.listen(config.port)
console.log(`server ready and running on port ${config.port}`)
