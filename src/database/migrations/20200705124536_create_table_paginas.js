const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('paginas',function(table){
      table.increments('id').primary();
      table.string('id_capitulo').notNullable();
      table.string('numero_pagina').notNullable();
      table.string('conteudo',99999).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('paginas');
  };