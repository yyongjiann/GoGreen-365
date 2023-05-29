require('dotenv').config()
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')

const apiRouter = require("./controller/route")
const Data = require("./models/data")
//const RecyclePoint = require("./models/recyclePoints")
const app = express() 
const {data} = require("./data/mockdata")

MONGODB_URI = process.env.MONGODB_URI
PORT = process.env.PORT

mongoose.set('strictQuery', false)

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
      Data.deleteMany({}).then(function(){
        console.log("Database reset")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    })  
      Data.insertMany(data).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    })  

  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use("/api/data", apiRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
