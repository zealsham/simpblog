import axios from 'axios'
const BASEURI = 'api/users'

const create = async (obj) => {
  let result = await axios.post(BASEURI,obj)
  return result.data

}

export default { create }