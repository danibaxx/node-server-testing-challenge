const express = require('express');
const db = require('./data/db-config');

const server = express();
const port = process.env.PORT || 4000;

server.use(express.json());

server.get((req, res, next) =>{ 

});

server.get((req, res, next) => {

});

server.post((req, res, next) => {

});

server.delete((req, res, next) => {

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