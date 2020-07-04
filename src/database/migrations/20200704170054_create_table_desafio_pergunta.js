const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('desafio_pergunta ',function(table){
      table.increments('id').primary();
      table.string('id_desafio').notNullable();
      table.string('id_livro').notNullable();
      table.string('pergunta').notNullable();
      table.string('pagina').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('desafio_pergunta ');
  }