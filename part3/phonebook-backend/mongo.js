const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Usage: \n node mongo.js <password>\n node mongo.js <password> <name> <number>')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]


const url = `mongodb+srv://fullstack:${password}@cluster0.0wpiu.mongodb.net/phonebook-app-db?retryWrites=true&w=majority`
mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number
})

if (process.argv.length === 3) {
  console.log('phonebook:')
  Person.find({}).then(result => {
    result.forEach(person => {
      console.log(person.name, person.number)
    })
    mongoose.connection.close()
  })
} else {
  person.save().then(_ => {
    console.log('entry saved!')
    mongoose.connection.close()
  })

}
