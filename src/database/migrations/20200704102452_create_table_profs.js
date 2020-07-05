const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('profs',function(table){
      table.increments('id').primary();
      table.string('idade').notNullable();
      table.string('name').notNullable();
      table.string('sexo').notNullable();
      table.string('materia').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('profs');
  };