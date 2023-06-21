let Persons = ({filteredPersons, handleDeletion}) => {
  return (
    <div>
        {filteredPersons.map(person => <p key={person.id}> 
          {person.name} {person.number} <button onClick={() => handleDeletion(person.id)}>Delete</button>
          </p>)}
    </div>
  )
}

export default Persons
