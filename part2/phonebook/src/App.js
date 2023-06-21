import { useEffect, useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import service from './Services/person'

const Notification = ({ message, errorMessage }) => {
  
  const content = message === null ? errorMessage : message 
  const classLabel = content === errorMessage ? 'error' : 'success'

  if (content === null) {
    return null
  }

  return (
    <div className={classLabel}>
      {content}
    </div>
  )
}




const App = () => {
  
  const [persons, setPersons] = useState([])  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('No Number')
  const [searchText, setSearchText] = useState('')
  const [simpleMessage, setSimpleMessage] = useState(null) 
  const [errorMessage, setErrorMessage] = useState(null) 

  const promise = () => { 
    service
      .getAll()
      .then(
        persons => setPersons(persons)
      )
  }

  useEffect(promise, [])

  const addName = (event) => {
    event.preventDefault()
      
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if (persons.find(person => person.name === newName) === undefined)
      {
        service
          .createEntry(nameObject)
          .then( person => {
          setPersons(persons.concat(person))
          })
        setSimpleMessage(`${newName} was added to Phonebook.`) 
        setTimeout(()=>{setSimpleMessage(null)}, 4000)
        setNewName('')
        setNewNumber('')
    }
    else {
        if (window.confirm(`${newName} is already added to Phonebook, replace the old number with a new one?`)) {
            const person = persons.find(person => person.name === newName)

            service.update(person.id, nameObject)
              .then(response => setPersons(persons.map(name => name.id !== person.id ? name : response)))
             setSimpleMessage(`${newName} was updated to ${newNumber}`)
             setTimeout(()=>{setSimpleMessage(null)}, 4000)
             setNewName('')
             setNewNumber('')
      }
    }
  }

  const handleDeletion = (id) => {
      
    const personObject = persons.find(n => n.id === id) 

    if (window.confirm(`Do you really want to delete ${personObject.name}?`)) {
      service.deleteEntry(id)
        .catch( error => {
                setErrorMessage( 
                `${personObject.name} was already removed from server.`
                )
                setTimeout(()=>{setErrorMessage(null)}, 5000)
                setPersons(persons.filter(n => n.id !== id))
              } )
          
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleSearch = (event) => {
    setSearchText(event.target.value)
  }

  const filteredPersons = 
    searchText === '' 
    ?
    persons 
    :
    persons.filter(person => person.name.match(new RegExp(searchText, "i")))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={simpleMessage} errorMessage={errorMessage} />
          <Filter searchText={searchText} handleSearch={handleSearch} />
      <h2>Add a New Number</h2>
          <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleName={handleName} handleNumber={handleNumber} />
      <h2>Numbers</h2>
          <Persons filteredPersons={filteredPersons} handleDeletion={handleDeletion} />
    </div>
  )
}

export default App
