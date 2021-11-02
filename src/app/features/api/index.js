import axios from 'axios'
import { scholars } from '../../../domain'

const url = "http://127.0.0.1:5000" //"https://portfolio-utifmd.herokuapp.com/posts"

export const fetchScholars = () => 
    axios.get(`${url}/${scholars}`)

export const createScholars = (newPost) => 
    axios.post(`${url}/${scholars}`, newPost)

export const updateScholars = (id, newPost) => 
    axios.patch(`${url}/${scholars}/${id}`, newPost)

export const deleteScholars = (id) => 
    axios.delete(`${url}/${scholars}/${id}`)