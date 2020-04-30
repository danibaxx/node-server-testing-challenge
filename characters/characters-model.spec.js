const db = require('../data/db-config');
const charactersModel = require('./characters-model');

beforeEach(async () => {
  await db.seed.run()
});

describe("characters find", () => {
  test('find', async () => {
    const res = await charactersModel.find()
    expect(res).toHaveLength(5)
  });

  test('findById', async () => {
    const res = await charactersModel.findById(1)
    expect(res.name).toBe("elsa")
  });

  test('insert character', async () => {
    await charactersModel.insert({ name: 'beast', movie: 'beauty and the beast'})
    const characters = await db('characters').select()
    expect(characters).toHaveLength(6)
  });

  test('update character', async () => {
    await charactersModel.update(1, { name: 'elsa', movie: 'frozen' })
    const character = await charactersModel.findById(1)
    expect(character.name).toBe('elsa')
    expect(character.movie).toBe('frozen')
  });

  test('remove', async () => {
    await charactersModel.remove(1)
    const characters = await charactersModel.find()
    expect(characters).toHaveLength(4)
  })
});

