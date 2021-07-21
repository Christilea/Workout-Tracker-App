const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
      type: Date,
      default: Date.now
    },

  exercises: [{
    type: {
        type: String,
        trim: true,
        required: "exercise type is required"  
    },
    name: {
        type: String,
        trim: true,
        required: "exercise name is required"  
    },
    duration: {
        type: Number,
        required: "exercise duration is required"  
    },

     weight: {
        type: Number   
    },
    
     reps: {
        type: Number   
    },

    sets: {
        type: Number   
    },

    distance: {
        type: Number   
    }


  }]



});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
