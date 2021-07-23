const router = require("express").Router();
const { aggregate } = require("../models/workout.js");
const Workout = require("../models/workout.js");





router.post("/workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/workout/range", ({ body }, res) => {
  Workout.insertMany(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.put()





router.get("/workout/range", (req, res) => {
    
    aggregate

  
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workout", (req, res) => {
    aggregate
}

module.exports = router;