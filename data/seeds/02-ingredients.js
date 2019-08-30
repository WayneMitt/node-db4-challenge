
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: '1 cup of flour'},
        {ingredient_name: 'Large egg'},
        {ingredient_name: '2tbsp butter'},
        {ingredient_name: '1tsp of cinnamon'},
        {ingredient_name: '1 cup chocolate chips'},
        {ingredient_name: '1/4 cup cream cheese'}
      ]);
    });
};
