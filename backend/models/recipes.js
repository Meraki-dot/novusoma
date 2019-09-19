const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
/*
    When creating a schema see the data specs in data/users
*/
const recipeSchema = new Schema({
    dishTitle: {
        type: String,
    },
    ingredients: {
        type: Array,
    },
    calories: {
        type: Number,
    }
});
const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;