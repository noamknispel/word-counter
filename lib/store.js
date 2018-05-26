const bluebird = require('bluebird')
const redis = require('redis')
bluebird.promisifyAll(redis)

module.exports = class {
  // Using Redis, This class provides flexibility to easily replace redis with something else.
  constructor() {
    this.client = redis.createClient(config.redis) // Assumption: using default local config
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
