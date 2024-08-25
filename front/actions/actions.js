import axios from 'axios' 

 const login = async (data) => {
  return  await axios.post('https://brandon-com-api.vercel.app/api/admin/logAdmin' ,data)
}

const createAdmin = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/admin', data)
}

const newProject = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/project', data)
}

const getProject = async () => {
    return await axios.get('https://brandon-com-api.vercel.app/api/project')
}

const uploadImage = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/project/image', data)
}

const uploadGaranty = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/project/garanty', data)
}


const uploadTutoImage = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/tutoriel/image', data)

}

const uploadTutoVideo = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/tutoriel/video', data)

}


const newTutorial = async (data) => {
    return await axios.post('https://brandon-com-api.vercel.app/api/tutoriel', data)

}

const getTutorial = async () => {
    return await axios.get('https://brandon-com-api.vercel.app/api/tutoriel')
}

const getOneTutorial = async (id) => {
    return await axios.get(`https://brandon-com-api.vercel.app/api/tutoriel/${id}`)
}

const incrementView = async (id) => {
    return await axios.get(`https://brandon-com-api.vercel.app/api/tutoriel/incrementView/${id}`)
}

const incrementLike = async (id) => {
    return await axios.get(`https://brandon-com-api.vercel.app/api/tutoriel/incrementLike/${id}`)
}

const incrementDownload = async (id) => {
    return await axios.get(`https://brandon-com-api.vercel.app/api/tutoriel/incrementDownload/${id}`)
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