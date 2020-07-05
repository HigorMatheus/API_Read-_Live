const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('capitulos ',function(table){
      table.increments('id').primary();
      table.string('id_livro').notNullable();
      table.string('titulo').notNullable();
      table.string('numero_capitulo').notNullable();
      table.string('numero_pagina_inicial').notNullable();
      table.string('numero_pagina_final').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('capitulos');
  }
