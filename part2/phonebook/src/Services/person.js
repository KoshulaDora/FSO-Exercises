import axios from 'axios'


  const baseUrl = 'http://localhost:3001/persons'


  const getAll = () => {
    return axios.get(baseUrl)
      .then(response => response.data)
  }

  const createEntry = nameObject => {
    return axios.post(baseUrl, nameObject)
      .then(response => response.data)

  }

  const deleteEntry = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
  }

  const update = (id, nameObject) => {
    const request = axios.put(`${baseUrl}/${id}`, nameObject)
    return request.then(response => response.data)
  }



export default { getAll, createEntry, deleteEntry, update }
