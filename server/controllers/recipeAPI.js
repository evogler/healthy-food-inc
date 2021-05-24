const { getRecipes } = require('../models/stored-recipes')

const parseArray = str => {
  return str.split(',').map(s => s.trim());
}

exports.getRecipes = async (req, res) => {
  try {
    const query = req.query.query ?? '';
    const tags = req.query.tags ? JSON.parse(req.query.tags) : [];
    const restrictions = req.query.restrictions ? parseArray(req.query.restrictions) : [];
    const count = req.query.count ?? 5;
    const offset = req.query.offset ?? 0;

    console.log('params: ', query, tags, restrictions, count, offset);

    getRecipes(query, restrictions, tags, count, offset)
    .then((recipe) => {
      res.status(200).json(recipe);
    })
    .catch((err) => {
      console.error(err);
      res.status(400).send(err);
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
};

exports.getRecipe = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
};
