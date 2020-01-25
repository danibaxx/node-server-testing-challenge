const db = require('../data/db-config');

function find() {
  return db('characters')
};

function findById(id) {
  return db('characters')
    .where({ id })
    .first()
};

async function insert(character) {
  const [id] = await db('characters').insert(character)
  return findById(id)
};

async function update(id, changes) {
  await db('characters')
  .where({ id })
  .update(changes)

  return findById(id)
};

function remove(id) {
  return db('characters')
    .where({ id })
    .del()
};

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
}