import axios from 'axios'
import { scholars, projects } from '../../../domain'

const url = // "https://pages-backend.herokuapp.com" //"https://portfolio-utifmd.herokuapp.com/"
    "http://127.0.0.1:5000/" 

const client = axios.create({baseURL: url, timeout: 20000})

export const fetchScholars = () => 
    client.get(`/${scholars}`)

export const createScholars = (newPost) => 
    client.post(`/${scholars}`, newPost)
    
export const updateScholars = (id, newPost) => 
    client.patch(`/${scholars}/${id}`, newPost)

export const deleteScholars = (id) => 
    client.delete(`/${scholars}/${id}`)

    /*SEPARATOR*/

export const readProjects = () => 
    client.get(`/${projects}`)

export const createProject = (newPost) => 
    client.post(`/${projects}`, newPost, { onUploadProgress: progressEvent => {
        const current = progressEvent.loaded //currentTarget.progress
        const total = progressEvent.total // currentTarget.responseHeaders['Content-Length']

        let percentComplete = Math.floor(current / total * 100)

        console.log(`percentComplete ${percentComplete}`) 
        console.log(`progress ${progressEvent.progress}`) 
    }}).then((resp) => {
        console.log(`Completed ${resp.headers}`)

        return resp.data
    })
    
export const updateProject = (id, newPost) => 
    client.patch(`/${projects}/${id}`, newPost)

export const deleteProject = (id) => 
    client.delete(`/${projects}/${id}`)