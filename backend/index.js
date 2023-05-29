require('dotenv').config()
const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')

const apiRouter = require("./controller/route")
const Data = require("./models/data")

const app = express() 
const {data} = require("./data/mockdata")

MONGODB_URI = process.env.MONGODB_URI
PORT = process.env.PORT

mongoose.set('strictQuery', false)

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
    Data.deleteMany({})
    .then(()=> console.log("Database reset"))
    .then(()=> Data.insertMany(data))
    .then(()=> console.log("Data inserted")) 
    .catch(error => console.log(error))      
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
