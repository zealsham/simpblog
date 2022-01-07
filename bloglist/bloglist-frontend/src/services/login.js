import axios from 'axios'
const baseUrl = '/api/login'


const login =async (obj) => {
  const result = await axios.post(baseUrl,obj)
  return result.data
}

export default { login }