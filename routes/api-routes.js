const db = require("../models");
const router = require("express").Router();

app.get("/api/workouts", function (req, res) {
    db.Workout.find({}).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    });
})


app.get("/api/workouts/:id", function (req, res) {
    var id = req.params.id;
    db.Workout.findById(id, function (err, dbWorkout) {
    }).catch(err => {
        res.json(err);
    });
})

module.exports = router;