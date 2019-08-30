
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, step_details: 'Mix egg, flower and milk', recipe_id: 1},
        {step_number: 1, step_details: 'Melt chocolate chips', recipe_id: 2},
        {step_number: 1, step_details: 'Slice fruit into 1 cm thick slices', recipe_id: 3}
      ]);
    });
};
