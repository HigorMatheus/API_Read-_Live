const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('livros',function(table){
      table.increments('id').primary();
      table.string(' titulo ').notNullable();
      table.string(' data_publicacao ').notNullable();
      table.string(' autor ').notNullable();
      table.string(' genero ').notNullable();
      table.string(' editora ').notNullable();
      table.string(' numero_paginas ').notNullable();
      table.string(' capa ').notNullable();
    
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('livros');
  };