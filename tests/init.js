require('./../server')
const chai = require('chai')
chai.use(require('chai-http'))

global.httpTest = chai.request(`http://localhost:${config.port}`)
global.expect = chai.expect

const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis)
global.storeTest = redis.createClient()
