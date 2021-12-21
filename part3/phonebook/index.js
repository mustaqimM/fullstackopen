const express = require('express')
const app = express()

app.use(express.json())

let persons = [
  {
    "id": 1,
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": 2,
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": 3,
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": 4,
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>TEST</h1>')
})

// GET persons
app.get('/api/persons', (request, response) => {
  response.json(persons)
})

// GET db info
app.get('/info', (request, response) => {
  const time = new Date()
  response.send(`
    <div>
      <h1>Phonebook has info for ${persons.length} people</h1>
      <h2>${time}</h2>
    <div>`)
})

// GET person
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }
})

// DELETE person
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(202).end()
})

// POST person
app.post('/api/persons', (request, response) => {
  const body = request.body
  const id = Math.floor(Math.random() * 100)

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'POST name/number cannot be blank!'
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({
      error: 'Person already exists'
    })
  }

  const person = {
    id: id,
    name: body.name,
    number: body.number
  }

  persons = persons.concat(person)
  response.json(person)
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Running server on port: ${PORT}`);
})
