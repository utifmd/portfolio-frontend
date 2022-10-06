import { PROJECT_CREATE, PROJECT_READ_ALL, PROJECT_UPDATE, PROJECT_DELETE } from '../../data/repos/local/constants'
import { scholars } from '../../domain'
const initialState = {
    data: [],
    status: 'idle',
    error: null
}
const App = (projects = initialState, action) => {
    switch (action.type) {
        case PROJECT_CREATE:
            return {...initialState,
                data: [ ...projects.data, {...action?.payload} ], 
                status: action?.message? 'failed': 'succeeded'
            }
        case PROJECT_READ_ALL:
            return {...initialState, 
                data: action?.payload, 
                status: action?.message? 'failed': 'succeeded'
            }
        case PROJECT_UPDATE:
            return {...initialState,
                data: projects.data.map((post) => post._id === action.payload._id ? action.payload : post ), 
                status: action?.message? 'failed': 'succeeded'
            }
        case PROJECT_DELETE: 
            return {...initialState,
                data: projects.data.filter((post) => post._id !== action.payload ),
                status: action?.message? 'failed': 'succeeded'
            }
        default:
            return projects
    }
}

export default App