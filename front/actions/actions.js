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

const getProject = async (data) => {
    return await axios.get('http://localhost:3000/api/project')
}

const uploadImage = async (data) => {
    return await axios.post('http://localhost:3000/api/project/image', data)
}

const uploadGaranty = async (data) => {
    return await axios.post('http://localhost:3000/api/project/garanty', data)
}




export {
    login,
    createAdmin,
    newProject,
    uploadImage,
    uploadGaranty,
    getProject
}