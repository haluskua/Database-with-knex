
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('puppies').del()
    .then(function () {
      // Inserts seed entries
      return knex('puppies').insert([
        {id: 1, name: 'Aiko', owner: 'Hamish', breed: ''},
        {id: 2, name: 'Rex', owner: 'Tess', breed: 'Lab'},
        {id: 3, name: 'Sandy', owner: 'Rex', breed: 'Poodle'}
      ]);
    });
};
