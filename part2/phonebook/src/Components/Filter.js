const Filter = ({searchText, handleSearch }) => {
 return (
      <div>
        Search <input value={searchText} onChange={handleSearch} />
      </div>
 ) 
}

export default Filter
