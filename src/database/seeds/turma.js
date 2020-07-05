
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('turma').del()
    .then(function () {
      // Inserts seed entries
      return knex('turma').insert([
        {
          // id: 1,
          id_escola: 1,
          name: '4B',
          nivel: 'Fundamental I',
          serie: 4
        },
        {
          // id: 2,
          id_escola: 1,
          name: '4C',
          nivel: 'Fundamental I',
          serie: 4
        }
      ]);
    });
};
