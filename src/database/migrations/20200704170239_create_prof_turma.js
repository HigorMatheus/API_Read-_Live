const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('prof_turma ',function(table){
      table.increments('id').primary();
      table.string('id_professor').notNullable();
      table.string('id_turma').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('prof_turma');
  }
