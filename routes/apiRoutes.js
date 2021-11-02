const router = require("express").Router();
const { Workout } = require("../models");

// get last workout
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// create a workout
router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, {$push: { exercises: req.body}},
    {
      new: true,
      runValidators: true
    }
  )
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  })
});

module.exports = router;
