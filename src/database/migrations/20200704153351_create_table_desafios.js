const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('desafios',function(table){
      table.increments('id').primary();
      table.string('id_profesor').notNullable();
      table.string('id_turma').notNullable();
      table.string('date_inicio').notNullable();
      table.string('date_limite').notNullable();
      table.string('tipo').notNullable();
      table.string('pontos').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('desafios');
  }; 