import axios from 'axios'
import { scholars, projects, auth, file } from '../../../domain'

const url = "http://127.0.0.1:5000/"//"https://portfolio-utifmd.herokuapp.com/" || 

const client = axios.create({baseURL: url, timeout: 20000})

export const baseUrl = url

/* SEPARATOR */

export const signIn = (user) => 
    client.post(`/${auth}/signin`, user)

/* SEPARATOR */

export const fetchScholars = () => 
    client.get(`/${scholars}`)

export const createScholars = (newPost) => 
    client.post(`/${scholars}`, newPost)
    
export const updateScholars = (id, newPost) => 
    client.patch(`/${scholars}/${id}`, newPost)

export const deleteScholars = (id) => 
    client.delete(`/${scholars}/${id}`)

    /* SEPARATOR */

export const readProjects = () => 
    client.get(`/${projects}`)

export const createProject = (newPost) => 
    client.post(`/${projects}`, newPost)
    
export const updateProject = (id, newPost) => 
    client.patch(`/${projects}/${id}`, newPost)

export const deleteProject = (id) => 
    client.delete(`/${projects}/${id}`)

    /* SEPARATOR */

export const readFile = () => 
    client.get(`/${file}`)

export const createFile = (newFile) => 
    client.post(`/${file}`, newFile)
    
export const createFiles = (newFiles) => 
    client.post(`/${file}/multiple_files`, newFiles)
    
export const deleteFile = (id) => 
    client.delete(`/${file}/${id}`)