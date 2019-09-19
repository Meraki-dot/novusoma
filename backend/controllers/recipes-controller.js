const Recipe = require('./../models/recipes');
const {recipesData} = require('./../data/recipes');
const seedData = (req, res) => {
    Recipe.create(recipesData)
        .then(recipes => {
            res.status(200).send({ success: true, data: recipes });
        })
        .catch(error => {
            res.status(500).send({ success: false, error: error.message });
        });
}
const getAllRecipes = (req, res) => {
    Recipe.find()
        .exec((err, recipes) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (recipes.length === 0) { res.status(404).send({ success: false, message: 'There were no recipes found.' }); }
            else { res.status(200).send({ success: true, data: recipes }); }
        });
    
}
const getRecipeById = (req, res) => {
    const { id } = req.params;
    Recipe.findById(id)
        .exec((err, recipe) => {
            if (err) { res.status(500).send({ success: false, error: err.message }); }
            else if (!recipe) { res.status(404).send({ success: false, message: 'There were no recipes found.' }); }
            else { res.status(200).send({ success: true, data: recipe }); }
        });
}
const createRecipe = (req, res) => {
    const recipe = { ...req.body };
    Recipe.create(recipe)
        .then((recipe) => {
            getAllRecipes(req, res); // returns all users after creating a new one
        })
        .catch(err => res.status(500).send({ success: false, error: err.message }));
}
const updateRecipe = (req, res) => {
    const { id } = req.params;
    const newRecipe = { ...req.body };
    Recipe.findByIdAndUpdate(id, { $set: newUser }, { new: true }, (err, user) => {
        if (err) { res.status(500).send({ success: false, error: err.message }); }
        else if (!recipe) { res.status(404).send({ success: false, message: 'There were no recipes found.' }); }
        else { getAllUsers(req, res); }  // returns all users after update
    });
}
const deleteRecipe = (req, res) => {
    const { id } = req.params;
    console.log(`Item to delete ${ id } - from node`);
    Recipe.findByIdAndDelete(id, (err, recipe) => {
        if (err) { res.status(404).send({ success: false, message: 'There were no recipes found.' }); }
        else { getAllRecipes(req, res);  } // returns all users after delete
    });
}
module.exports = {
    seedData,
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}