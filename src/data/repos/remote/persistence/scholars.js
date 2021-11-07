import { SCHOLAR_CREATE, SCHOLAR_READ_ALL, SCHOLAR_UPDATE, SCHOLAR_DELETE } from "../../local/constants"
import * as api from "../../../../app/features/api"

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchScholars()

        dispatch({ type: SCHOLAR_READ_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (newPost) => async (dispatch) => {
    try {
        const { data } = await api.createScholars(newPost)

        dispatch({ type: SCHOLAR_CREATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, newPost) => async (dispatch) => {
    try {
        const { data } = await api.updateScholars(id, newPost)

        dispatch({ type: SCHOLAR_UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deleteScholars(id)

        dispatch({ type: SCHOLAR_DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}