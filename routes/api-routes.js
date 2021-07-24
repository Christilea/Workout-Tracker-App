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

app.post("/api/workouts/", function (req, res) {
    db.Workout.create({ exercise: req.body }).then(function (dbWorkout) {
        res.json(dbWorkout);
    }).catch(err => {
        res.json(err);
    })
})

app.put("/api/workouts/:id", function (req, res) {
    var query = { _id: req.params.id };
    db.Workout.findOneAndUpdate(query, {
        $push: { exercises: [req.body] }
    }, function (err, dbWorkout) {
        if (err) {
            res.json(err);
        } else {
            res.json(dbWorkout);
        }
    })
})


module.exports = router;