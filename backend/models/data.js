const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: String,
  link: String,
  description: String,
  openingHours: String,
  location: Array,
  address: String,
  mapLink: String,
  type: String, 
  region: String,
})

dataSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Data', dataSchema)