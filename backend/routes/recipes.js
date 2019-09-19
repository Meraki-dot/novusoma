const express   = require('express');
const router    = express.Router();
// import rides controller
const { seedData, getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipes-controller');
router.post('/seed', seedData);
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);
router.post('/', createRecipe);
router.put('/:id', updateRecipe);
router.delete('/:id', deleteRecipe);
module.exports = router