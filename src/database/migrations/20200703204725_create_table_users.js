const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('users',function(table){
      table.increments('id').primary();
      table.string('papel').notNullable();
      table.string('email').notNullable().unique();
      table.string('senha').notNullable();
      table.string('token').notNullable();

    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };