import { SCHOLAR_CREATE, SCHOLAR_READ_ALL, SCHOLAR_UPDATE, SCHOLAR_DELETE } from "../../local/constants"
import * as api from "../../../../app/features/api"

export const readScholars = () => async (dispatch) => {
    try {
        const { data } = await api.fetchScholars()

        dispatch({ type: SCHOLAR_READ_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createScholar = (newScholar) => async (dispatch) => {
    try {
        const { data } = await api.createScholars(newScholar)

        dispatch({ type: SCHOLAR_CREATE, payload: data })
    } catch (error) { console.log(error)
        dispatch({ type: SCHOLAR_CREATE, message: 'Something went wrong.' })
    }
}

export const updateScholar = (id, newScholar) => async (dispatch) => {
    try {
        const { data } = await api.updateScholars(id, newScholar)

        dispatch({ type: SCHOLAR_UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deleteScholar = (id) => async (dispatch) => {
    try {
        await api.deleteScholars(id)

        dispatch({ type: SCHOLAR_DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}