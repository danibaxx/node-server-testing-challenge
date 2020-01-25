const supertest = require('supertest');
const server = require('./index');
const db = require('./data/db-config');

beforeEach(async () => {
  await db.seed.run()
});

test('welcome route', async () => {
  const res = await supertest(server).get('/')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.message).toBe('Welcome to Disney Characters API')
});

test('get find characters', async () => {
  const res = await supertest(server).get('/characters')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
  expect(res.body.length).toBeGreaterThan(0)
  expect(res.body[0].id).toBe(1)
  expect(res.body[0].name).toBe('elsa')
});

test('get characters by id', async () => {
  const res = await supertest(server).get('/characters/1')
  expect(res.status).toBe(200)
  expect(res.type).toBe('application/json')
});

test('create character', async () => {
  const res = await (supertest(server)
    .post('/characters'))
    .send({ name: 'beast', movie: 'beauty and the beast' })
    expect(res.status).toBe(201)
    expect(res.type).toBe('application/json')
    expect(res.body).toEqual({ id: 6, name: 'beast', movie: 'beauty and the beast' })
});