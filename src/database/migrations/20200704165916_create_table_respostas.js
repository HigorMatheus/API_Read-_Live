const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('respostas ',function(table){
      table.increments('id').primary();
      table.string('id_aluno').notNullable();
      table.string('id_pergunta').notNullable();
      table.string('resposta').notNullable();
      table.string('nota').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('respostas ');
  }; 