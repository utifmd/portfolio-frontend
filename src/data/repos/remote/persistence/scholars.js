import { CREATE, READ_ALL, UPDATE, DELETE } from "../../local/constants"
import * as api from "../../../../app/features/api"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchScholars()

        dispatch({ type: READ_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createScholars(newPost)

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, newPost) => async (dispatch) => {
    try {
        const { data } = await api.updateScholars(id, newPost)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deleteScholars(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}