const { getMeals } = require('../models/stored-meals.js');

exports.getMealPlan = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.getMealPlans = async (req, res) => {
  try {
    const key = req.query;
    getMeals(key).then(meals => {
      res.status(200).json(meals);
    });
  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.putMealPlan = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}

exports.putSubscription = async (req, res) => {
  try {

  } catch (err) {
    res.status(404).send(err.message);
  }
}
