const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('desafio_indicacao ',function(table){
      table.increments('id').primary();
      table.string('id_desafio').notNullable();
      table.string('genero').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('desafio_indicacao');
  }