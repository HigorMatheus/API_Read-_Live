const knex = require('knex')

exports.up = function(knex) {
   
    return knex.schema.createTable('alunos',function(table){
      table.increments('id').primary();
      table.string('idade').notNullable();
      table.string('nome').notNullable();
      table.string('sexo').notNullable();
      table.string('id_turma').notNullable();
      table.string('pontuacao').notNullable();
      table.string('id_user').notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('alunos');
  }; 