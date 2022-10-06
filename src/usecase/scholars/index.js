import { SCHOLAR_CREATE, SCHOLAR_READ_ALL, SCHOLAR_UPDATE, SCHOLAR_DELETE } from '../../data/repos/local/constants'
const initialState = {
    data: [],
    status: 'idle',
    error: null
}
const App = (scholars = initialState, action) => {
    switch (action.type) {
        case SCHOLAR_CREATE:
            return {...initialState, 
                data: [...scholars.data, {...action?.payload}], 
                status: action?.message? 'failed': 'succeeded'
            }
        case SCHOLAR_READ_ALL:
            return {...initialState, 
                data: action?.payload, 
                status: action?.message? 'failed': 'succeeded'
            }
        case SCHOLAR_UPDATE:
            return {...initialState, 
                data: scholars.data.map((post) => post._id === action.payload._id ? action.payload : post),
                status: action?.message? 'failed': 'succeeded'
            }
        case SCHOLAR_DELETE: 
            return {...initialState, 
                data: scholars.data.filter((post) => post._id !== action.payload),
                status: action?.message? 'failed': 'succeeded'
            }
        default:
            return scholars
    }
}

export default App