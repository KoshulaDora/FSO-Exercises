const PersonForm = ({addName, newNumber, newName, handleName, handleNumber}) => {
  
  return (
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
  
}

export default PersonForm
