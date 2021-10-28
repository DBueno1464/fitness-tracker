const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        trim: true,
      },
      duration: {
        type: Number,
        min: 0
      },
      // Only for resistance type workouts
      weight: {
        type: Number,
        min: 0
      },
      reps: {
        type: Number,
        min: 0
      },
      sets: {
        type: Number,
        min: 0
      },
      // Only for cardio type workouts
      distance: {
        type: Number,
        min: 0
      }
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
