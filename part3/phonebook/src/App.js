import React, { useEffect, useState } from 'react'
import phonebookService from './services/phonebook'

import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('add a person')
  const [newNumber, setNewNumber] = useState('add a number')
  const [findPerson, setFindPerson] = useState('')
  const [message, setMessage] = useState('')

  const hook = () => {
    phonebookService
      .getAll()
      .then((initialPersons) => setPersons(initialPersons))
  }

  useEffect(hook, [])

  const addPerson = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
    }

    if (persons.find((person) => person.name === newName && person.number !== newNumber)) {
      const foundPerson = persons.find((person) => person.name === newName)

      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        phonebookService
          .update(foundPerson.id, personObject)
          .then((returnedPerson) => {
            setPersons(persons.map((person) => person.id !== foundPerson.id ? person : returnedPerson))
            setNewName('')
            setNewNumber('')
            setMessage(`Changed ${personObject.name}`)
            console.log(message)
            setTimeout(() => { setMessage('') }, 2000)
          })
          .catch((error) => {
            console.log(error)
            setPersons(persons.filter((person) => person.id !== foundPerson.id))
            setMessage(`Error: Person ${personObject.name} has already been removed deleted`)
            setTimeout(() => { setMessage('') }, 2000)
          })
      }
      return
    }

    phonebookService.create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')

        setMessage(`Added: ${returnedPerson.name}`)
        setTimeout(() => {
          setMessage('')
        }, 2000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setMessage(`Error: ${error.response.data.error}`)
      })
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

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      phonebookService.deletePerson(id, name)
      setPersons(persons.filter((person) => person.id !== id))
    }
  }

  const personsToShow =
    findPerson === ''
      ? persons
      : persons.filter((person) =>
        person.name.toLowerCase().includes(findPerson)
      )

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={message} />

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
      <Persons personsToShow={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App
