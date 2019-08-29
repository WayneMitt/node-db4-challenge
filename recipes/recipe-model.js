const knex = require('knex');
const config = require('../knexfile');
const db = knex(config.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('recipeBook');
}

function findById(id) {
    return db('recipeBook')
        .where({ id })
        .first()
}

// function findSteps(id) {
//     return db('steps')
//         .where({ scheme_id: id })
//         .orderBy('step_number')
// }

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