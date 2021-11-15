import { USER_SIGN_IN, USER_SIGN_OUT } from "../../local/constants"
import * as api from "../../../../app/features/api"

export const signIn = (user) => async (dispatch) => {
    try {
        const { data } = await api.signIn(user)

        dispatch({ type: USER_SIGN_IN, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const signOut = () => async (dispatch) => {
    try {
        dispatch({ type: USER_SIGN_OUT })
    } catch (error) {
        console.log(error)
    }
}