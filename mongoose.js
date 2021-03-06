const mongoose = require('mongoose')

if (process.argv.length<3){
  console.log('give password as argument!')
  process.exit(1)
}

const password = process.argv[2]


const url = `mongodb+srv://fullstack:${password}@cluster0.atjpy.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)


if(process.argv.length === 5){

  const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
  })
  person.save().then(response => {
    console.log(`saved ${response}`)
    mongoose.connection.close()
  })
}else{
  Person.find({}).then(result => {
    result.forEach(person => console.log(person) )
    mongoose.connection.close()
  })
}

