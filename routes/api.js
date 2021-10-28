const router = require("express").Router();
const Workout = require("../models/Workout.js");

// create a workout plan
router.post("/api/workouts", (req, res) => {
  Workout.create({})
  .then(data => {
      res.json(data);
  })
  .catch(err => {
      res.status(400).json(err);
  });
});
module.exports = router;
