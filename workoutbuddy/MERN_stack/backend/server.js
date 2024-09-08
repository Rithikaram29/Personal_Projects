require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

//express app
const app = express();

//middleware
app.use(express.json()) 
//checks if there is a body with the incoming request, if so, attaches it to the req handler.
app.use((req, res, next) => {
    console.log(req.path, req.method, req.url)
    next()
})


// routes
app.use('/api/workouts',workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    //listen for request
app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on port", process.env.PORT)
})
})
.catch((err)=>{
    console.log(err)
})



