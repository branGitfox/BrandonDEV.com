import axios from 'axios' 

 const login = async (data) => {
  return  await axios.post('https://brandondev-com-3.onrender.com/api/admin/logAdmin' ,data)
}

const createAdmin = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/admin', data)
}

const newProject = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/project', data)
}

const getProject = async () => {
    return await axios.get('https://brandondev-com-3.onrender.com/api/project')
}

const uploadImage = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/project/image', data)
}

const uploadGaranty = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/project/garanty', data)
}


const uploadTutoImage = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/tutoriel/image', data)

}

const uploadTutoVideo = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/tutoriel/video', data)

}


const newTutorial = async (data) => {
    return await axios.post('https://brandondev-com-3.onrender.com/api/tutoriel', data)

}

const getTutorial = async () => {
    return await axios.get('https://brandondev-com-3.onrender.com/api/tutoriel')
}

const getOneTutorial = async (id) => {
    return await axios.get(`https://brandondev-com-3.onrender.com/api/tutoriel/${id}`)
}

const incrementView = async (id) => {
    return await axios.get(`https://brandondev-com-3.onrender.com/api/tutoriel/incrementView/${id}`)
}

const incrementLike = async (id) => {
    return await axios.get(`https://brandondev-com-3.onrender.com/api/tutoriel/incrementLike/${id}`)
}

const incrementDownload = async (id) => {
    return await axios.get(`https://brandondev-com-3.onrender.com/api/tutoriel/incrementDownload/${id}`)
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
