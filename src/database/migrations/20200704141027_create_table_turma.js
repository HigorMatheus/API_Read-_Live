const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('turma',function(table){
      table.increments('id').primary();
      table.string('id_escola').notNullable();
      table.string('name').notNullable();
      table.string('nivel').notNullable();
      table.string('serie').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('turma');
  }; 