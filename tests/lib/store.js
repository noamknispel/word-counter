const Store = require('./../../lib/store')
const store = new Store()

describe('Store', function() {
  beforeEach(async () => storeTest.flushdbAsync())

  describe('insert', function() {
    it('insert one item', async function() {
      await store.insert(['rick'])
      const count = await storeTest.getAsync('rick')
      expect(count).to.eql('1')
    })

    it('insert multiple items', async function() {
      const counts = []
      await store.insert(['rick', 'morty'])

      counts.push(await storeTest.getAsync('rick'))
      counts.push(await storeTest.getAsync('morty'))

      expect(counts).to.eql(['1', '1'])
    })
  })

  describe('getCount', function() {
    [
      { title: 'return count', key: 'rick', expected: '1' },
      { title: 'return null if not exists', key: 'picklerick', expected: null }
    ].map(({ title, key, expected }) => {
      it(title, async function() {
        await storeTest.incrAsync('rick')
        const count = await store.getCount(key)
        expect(count).to.eql(expected)
      })
    })
  })
})
