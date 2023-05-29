const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  itemsToDonate: String,
  location: String,
  timing: String,
  comments: String

})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)