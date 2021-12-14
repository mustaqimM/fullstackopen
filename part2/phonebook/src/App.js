import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('add a person')
  const [newNumber, setNewNumber] = useState('add a number')
  const [findPerson, setFindPerson] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => setPersons(response.data))
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
      return
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFindPerson = (event) => {
    setFindPerson(event.target.value)
  }

  const personsToShow =
    findPerson === ''
      ? persons
      : persons.filter((person) =>
        person.name.toLowerCase().includes(findPerson),
      )

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter findPerson={findPerson} handleFindPerson={handleFindPerson} />

      <h3>Add a new</h3>

      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handlePersonChange={handlePersonChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
