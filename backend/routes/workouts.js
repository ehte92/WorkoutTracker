const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const Workout = require("../models/workoutModel");
const express = require("express");

const router = express.Router();

//to get all workouts
router.get("/", getWorkouts);

//to get a single workout
router.get("/:id", getWorkout);

//post a workout
router.post("/", createWorkout);

//delete a workout
router.delete("/:id", deleteWorkout);

//update a workout
router.patch("/:id", updateWorkout);

module.exports = router;
