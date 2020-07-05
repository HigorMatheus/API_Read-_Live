
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('profs').del()
    .then(function () {
      // Inserts seed entries
      return knex('profs').insert([
        {
          // id: 1,
          idade: 25,
          name: 'Rafael',
          sexo: 'M',
          materia: 'Desespero'
        }
      ]);
    });
};
