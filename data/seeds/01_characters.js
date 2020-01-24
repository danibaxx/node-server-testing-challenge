exports.seed = async (knex) => {
  await knex('characters').truncate()

  await knex('characters').insert([
    { name: "elsa", movie: "frozen" },
    { name: "vanellope von schweetz", movie: "wreck-it ralph" },
    { name: "maleficent", movie: "sleeping beauty" },
    { name: "cheshire cat", movie: "alice in wonderland" }, 
    { name: "zero", movie: "the nightmare before christmas" },     
  ])
};