// antes de executar esta migration crie o banco de dados (schema) definido por DB_NAME manualmente no MySQL
//
// pode fazer isso executando o comando 
// CREATE DATABASE <DB_NAME> IF NOT EXISTS;
exports.up = function(knex) {
  return knex.schema.createTable('filmes', function (table) {
    table.increments('idfilmes').primary();        // ID auto-incrementado
    table.string('titulo', 255).notNullable();     // Título do filme
    table.string('genero', 100).notNullable();     // Gênero do filme
    table.integer('duracao').notNullable();        // Duração em minutos
    table.string('diretor', 255).notNullable();    // Nome do diretor
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('filmes');
};