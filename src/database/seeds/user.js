
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          // id: 1,
          email: 'professor@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'professor'
        },
        {
          // id: 2,
          email: 'danilo@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'aluno'
        },
        {
          // id: 3,
          email: 'anna@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'aluno'
        },
        {
          // id: 4,
          email: 'willian@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'aluno'
        },
        {
          // id: 5,
          email: 'higor@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'aluno'
        },
        {
          // id: 6,
          email: 'rafael@megahack.com',
          senha: '123',
          token: 'token',
          papel: 'aluno'
        }
      ]);
    });
};
