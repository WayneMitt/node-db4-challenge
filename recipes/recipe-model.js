const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    add,
    update,
    remove
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(recipe_id) {
    return db('ingredients')
        .where({ recipe_id })
        .first()
}

function getInstructions(recipe_id) {
    return db('instructions')
        .where({ recipe_id })
        .orderBy('step_number')
}

function add(recipe) {
    return db('recipeBook')
        .insert(recipe)
}

function update(recipe, id) {
    return db('recipeBook')
        .where({ id })
        .update(recipe)
}

function remove(id) {
    return db('recipeBook')
        .where({ id })
        .del()
}