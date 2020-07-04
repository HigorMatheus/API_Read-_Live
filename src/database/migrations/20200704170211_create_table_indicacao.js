const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('indicacao ',function(table){
      table.increments('id').primary();
      table.string('id_aluno_responsavel').notNullable();
      table.string('id_aluno_indicado').notNullable();
      table.string('data_indicaçao').notNullable();
      table.string('id_livro').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('indicacao');
  }