exports.up = async function(knex) {
  await knex.schema.createTable('characters', (table) => {
    table.increments();
    table.string('name', 255).notNullable();
    table.string('movie', 255).notNullable();
  });
};  

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('characters')
};
