import {PROJECT_CREATE, PROJECT_READ_ALL, PROJECT_UPDATE, PROJECT_DELETE} from "../../local/constants"
import * as api from "../../../../app/features/api"

export const readProjects = () => async (dispatch) => {
    try {
        const { data } = await api.readProjects()
        
        dispatch({ type: PROJECT_READ_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createProject = (newProject) => async (dispatch) => {
    try {
        const { data } = await api.createProject(newProject)

        dispatch({ type: PROJECT_CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updateProject = (id, newProject) => async (dispatch) => {
    try {
        const { data } = await api.updateProject(id, newProject)

        dispatch({ type: PROJECT_UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteProject = (id) => async (dispatch) => {
    try {
        await api.deleteProject(id)

        dispatch({ type: PROJECT_DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}