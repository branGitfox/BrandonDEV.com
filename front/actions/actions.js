import axios from 'axios' 

 const login = async (link, data) => {
  return  await axios.post(link, data)
}

const createAdmin = async (link, data) => {
    return await axios.post(link, data)
}

export {
    login,
    createAdmin
}