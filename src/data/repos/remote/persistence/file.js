import { FILE_CREATE, FILE_CREATE_ALL, FILE_READ_ALL, FILE_DELETE } from "../../local/constants"
import * as api from "../../../../app/features/api"

export const readFile = () => async (dispatch) => {
    try {
        const { data } = await api.readFile()

        dispatch({ type: FILE_READ_ALL, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const createFile = (newFile) => async (dispatch) => {
    try {
        const { data } = await api.createFile(newFile)

        dispatch({ type: FILE_CREATE, payload: data })
    } catch (error) { console.log(error)
        dispatch({ type: FILE_CREATE, message: 'Something went wrong.' })
    }
}

export const createFiles = (newFiles) => (dispatch) => {
    return api.createFiles(newFiles).then(
        files => dispatch({ type: FILE_CREATE_ALL, payload: files }),
        error => dispatch({ type: FILE_CREATE_ALL, message: `Something went wrong. ${error.message}` })
    )
}

// export const createFiles = (newFiles) => async (dispatch) => {
//     try {
//         const { data } = await api.createFiles(newFiles)

//         dispatch({ type: FILE_CREATE_ALL, payload: data })
//     } catch (error) { console.log(error)
//         dispatch({ type: FILE_CREATE_ALL, message: 'Something went wrong.' })
//     }
// }

export const deleteFile = (id) => async (dispatch) => {
    try {
        await api.deleteFile(id)

        dispatch({ type: FILE_DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}