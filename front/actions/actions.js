import axios from 'axios' 
import {toast} from 'react-toastify'
 const login = async (link, data) => {
  return  await axios.post(link, data)
}

export {
    login
}