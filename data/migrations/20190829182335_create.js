
exports.up = function(knex) {
  return knex.recipeBook.createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name').notNullable().unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name').notNullable().unique();
  })
  .createTable('instructions', tbl => {
      tbl.increments();
      tbl.string('step_number').notNullable();
      tbl.string('step_details').notNullable();
      tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
  })
  .createTable('recipe_ingredients', tbl => {
    tbl.integer('recipe_id').unsigned().notNullable().references('id').inTable('recipes');
    tbl.integer('ingredient_id').unsigned().notNullable().references('id').inTable('ingredients');
    tbl.string('quantity').notNullable();
    tbl.primary(['recipe_id', 'ingredient_id']);
  })
};

exports.down = function(knex) {
  
};
