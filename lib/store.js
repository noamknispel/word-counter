const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis)

module.exports = class {
  constructor() {
    this.client = redis.createClient() // Assumption: config is missing
  }

  async insert(toInsert) {
    const commands = toInsert.map((word) => ['incr', word])
    const batch = this.client.batch(commands)
    await batch.execAsync()
  }

  async getCount(key) {
    return this.client.getAsync(key)
  }
}
