const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('aluno_livro ',function(table){
      table.increments('id').primary();
      table.string('id_livro').notNullable();
      table.string('id_aluno').notNullable();
      table.string('pagina_atual').notNullable();
      table.string('data_inicio').notNullable();
      table.string('data_fim').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('aluno_livro');
  }