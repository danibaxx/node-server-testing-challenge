const express = require('express');
const charactersModel = require('./characters/characters-model');

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.get('/', (req, res) =>{ 
  res.status(200).json({
    message: 'Welcome to Disney Characters API'
  })
});

server.get('/characters', async (req, res, next) => {
  try {
    const characters = await charactersModel.find()
    res.status(200).json(characters)
  } catch(err) {
    next(err)
  }
});

server.get('/characters/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await charactersModel.findById(id)

    if (character) {
      res.status(200).json(character)
    } else {
      res.status(404).json({
        message: 'The character with the specified ID does not exist'
      })
    }
  } catch(err) {
    next(err)
  }
});

server.post('/characters', async (req, res, next) => {
  try {
    const newChar = await charactersModel.insert(req.body)
    res.status(201).json(newChar)
  } catch(err) {
    next(err)
  }
});

server.put('/characters/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateChar = await charactersModel.update(id)

    if (updateChar) {
      res.json(updateChar)
    } else {
      res.status(404).json({
        message: 'The character with the specified ID does not exist'
      })
    }
  } catch(err) {
    next(err)
  }
});

server.delete('/characters/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteChar = await charactersModel.remove(id)

    if(deleteChar) {
      res.status(204).end()
    } else {
      res.status(401).json({
        message: 'The character with the specified ID does not exist.'
      })
    }
  } catch(err) {
    next(err)
  }
});

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong'
  })
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`\n** Server is running http://localhost:${port} \n`)
  })
};

module.exports = server;