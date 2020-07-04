const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('livros',function(table){
      table.increments('id').primary();
      table.string('title').notNullable();
      table.string('data_puplicacao').notNullable();
      table.string('autor').notNullable();
      table.string('genero').notNullable();
      table.string('editora').notNullable();
      table.string('capa').notNullable();
      table.string('conteudo').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('livros');
  };