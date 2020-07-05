
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('prof_turma').del()
    .then(function () {
      // Inserts seed entries
      return knex('prof_turma').insert([
        {
          id_professor: 1,
          id_turma: 1
        },
        {
          id_professor: 1,
          id_turma: 2
        }
      ]);
    });
};
