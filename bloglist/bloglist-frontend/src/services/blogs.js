import axios from 'axios'

const baseUrl = '/api/blog'

let token = null

const setToken=(tok) => {
  token =`bearer ${tok}`
}
const getAll = () => {
  // uses then based promises since it is called in useEffect hooks
  // async and await callis in useeffect hooks can lead to race condition and weird behaviors.
  const config = {
    headers:{
      Authorization:token
    }
  }
  const request = axios.get(baseUrl,config)
  return request.then(result => result.data)
}

const create = async (obj) => {
  const config = {
    headers:{
      Authorization:token
    }
  }
  const result = await axios.post(baseUrl,obj,config)
  return result.data
}

const update = async (obj,id) => {
  const config = {
    headers:{
      Authorization:token
    }
  }
  const url = `${baseUrl}/${id}`
  const result = await axios.put(url,obj,config)
  return result.data
}

const remove = async (id) => {
  const config = {
    headers:{
      Authorization:token
    }
  }
  const  url = `${baseUrl}/${id}`
  const result = await axios.delete(url,config)
  return result.data
}


export default { getAll,setToken,create,update,remove }