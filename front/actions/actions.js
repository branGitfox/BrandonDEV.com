import axios from 'axios' 

 const login = async (data) => {
  return  await axios.post('http://localhost:3000/api/admin/logAdmin' ,data)
}

const createAdmin = async (data) => {
    return await axios.post('http://localhost:3000/api/admin', data)
}

const newProject = async (data) => {
    return await axios.post('http://localhost:3000/api/project', data)
}

const getProject = async () => {
    return await axios.get('http://localhost:3000/api/project')
}

const uploadImage = async (data) => {
    return await axios.post('http://localhost:3000/api/project/image', data)
}

const uploadGaranty = async (data) => {
    return await axios.post('http://localhost:3000/api/project/garanty', data)
}


const uploadTutoImage = async (data) => {
    return await axios.post('http://localhost:3000/api/tutoriel/image', data)

}

const uploadTutoVideo = async (data) => {
    return await axios.post('http://localhost:3000/api/tutoriel/video', data)

}


const newTutorial = async (data) => {
    return await axios.post('http://localhost:3000/api/tutoriel', data)

}

const getTutorial = async () => {
    return await axios.get('http://localhost:3000/api/tutoriel')
}

const getOneTutorial = async (id) => {
    return await axios.get(`http://localhost:3000/api/tutoriel/${id}`)
}

const incrementView = async (id) => {
    return await axios.get(`http://localhost:3000/api/tutoriel/incrementView/${id}`)
}

const incrementLike = async (id) => {
    return await axios.get(`http://localhost:3000/api/tutoriel/incrementLike/${id}`)
}

const incrementDownload = async (id) => {
    return await axios.get(`http://localhost:3000/api/tutoriel/incrementDownload/${id}`)
}

const protect = () => {
    if(localStorage.getItem('admin') !==''){
        return true
    }

    return false
}


export {
    login,
    createAdmin,
    newProject,
    uploadImage,
    uploadGaranty,
    getProject,
    uploadTutoImage,
    uploadTutoVideo,
    newTutorial,
    getTutorial,
    getOneTutorial,
    incrementView,
    incrementLike,
    incrementDownload,
    protect
}