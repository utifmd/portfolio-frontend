import { USER_SIGN_IN, USER_SIGN_OUT, USER_SIGN_UP } from '../../data/repos/local/constants'

const App = (user = null, action) => {
    switch (action.type) {
        case USER_SIGN_IN: 
            action?.payload && localStorage.setItem('profile', JSON.stringify({ ...action?.payload }))
            
            return {...action?.payload, message: action?.message}
        case USER_SIGN_OUT:
            localStorage.clear()
            return null
        case USER_SIGN_UP:
            return user
        default:
            return user
    }
}

export default App