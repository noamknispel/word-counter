const env = process.env.NODE_ENV || 'dev'
require(`./config/${env}`)

const Koa = require('koa')
const formidable = require('koa2-formidable')
const bodyParser = require('koa-bodyparser')
const apiRouter = require('./routers/apis')

const app = new Koa()
app.use(formidable({ maxFileSize: config.maxFileSize }))
app.use(bodyParser())
app.use(apiRouter())

app.listen(config.port)
console.log(`server ready and running on port ${config.port}`)
