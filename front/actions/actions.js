import axios from 'axios' 

 const login = async (data) => {
  return  await axios.post('http://localhost:3000/api/admin/logAdmin', data)
}

const createAdmin = async (data) => {
    return await axios.post('http://localhost:3000/api/admin', data)
}

const newProject = async (data) => {
    return await axios.post('http://localhost:3000/api/project', data)
}

export {
    login,
    createAdmin,
    newProject
}