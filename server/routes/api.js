const express = require("express");
const urllib = require("urllib");
const router = express.Router();
const API_EXTERNAL = "https://recipes-goodness.herokuapp.com/recipes/";
let recipes;

router.get("/sanity", (req, res) => {
  res.send("Ok");
});

router.get("/recipes/:ingredient", (req, res) => {
  let ingredient = req.params.ingredient;
  urllib.request(`${API_EXTERNAL}${ingredient}`, (err, data, _res) => {
    if (err) throw err;
    loadRecipes(JSON.parse(data).results);
    res.send(recipes);
  });
});

const loadRecipes = function (recipesData) {
  recipes = recipesData.map((recipe) => {
    return {
      title: recipe.title,
      thumbnail: recipe.thumbnail,
      ingredients: recipe.ingredients,
      href: recipe.href,
    };
  });
};

module.exports = router;
