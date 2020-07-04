const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('escolas',function(table){
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('cidade').notNullable();
      table.string('uf').notNullable();
      table.string('endereço').notNullable();
      table.string('cep').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('escolas');
  }; 