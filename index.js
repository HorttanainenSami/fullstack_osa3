require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

const app = express()
app.use(cors())
app.use(express.static('build'))
app.use(express.json())

morgan.token('host', (req) => {
  return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :host',{
  skip: (req) => {return req.method!=='POST'}
}))
app.use(morgan('tiny',{
  skip: (req) => { return req.method==='POST'}
}))
const errorHandler = (error, req, res, next) => {
  console.log(error.name)
  console.log(error.message)

  if (error.name === 'CastError'){
    return res.status(400).send({ error:'malformatted id' })
  } else if(error.name ==='ValidationError'){
    return res.status(400).send({ error:error.message })
  }

  next(error)
}
app.get('/info', (req, res) => {
  Person.find({}).then(response => {
    res.send(`<p> Phonebook has info for ${response.length} people</p><p>${new Date()}</p>`)
  })
})

app.get('/api/persons', (req, res) => {
  Person.find({}).then(response => {
    res.json(response)
  })
})

app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
    .then(response => {
      if(response) {
        res.json(response)
      }else{
        res.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndDelete(req.params.id)
    .then(response => {
      console.log(response)
      res.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
  const body = req.body

  const person = new Person({
    name:body.name,
    number:body.number,
  })

  person.save()
    .then(response => {
      res.json(response)
      console.log(response)
    })
    .catch(error => next(error))
})
app.put('/api/persons/:id/', (req, res, next) => {
  const body = req.body
  console.log(body)

  if(!body.number){
    return res.status(400).send({ error: 'number is missing' }).end()
  }
  const person = {
    name: body.name,
    number: body.number
  }
  Person.findByIdAndUpdate(req.params.id, person, { new:true })
    .then(result => {
      console.log(result)
      res.json(result)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)
app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT,() => {
  console.log(`Server is running on ${PORT}}`)
})
