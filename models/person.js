const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connection to', url)
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(console.log('connected to MongoDB'))
  .catch(console.log('error conecting to MongoDB'))

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    unique: true
  },
  number: {
    type: String,
    minLength : 8,
    required: true
  }
})
personSchema.plugin(uniqueValidator)
personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject.__v
    delete returnedObject._id
  }
})

module.exports = mongoose.model('Person', personSchema)
