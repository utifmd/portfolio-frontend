import { CREATE, READ_ALL, UPDATE, DELETE } from '../../data/repos/local/constants'

const App = (scholars = [], action) => {
    switch (action.type) {
        case UPDATE:
            return scholars.map((post) => 
                post._id === action.payload._id 
                ? action.payload 
                : post )
        case DELETE: 
            return scholars.filter((post) => 
                post._id !== action.payload )
        case READ_ALL:
            return action.payload
        case CREATE:
            return [ ...scholars, action.payload ]
        default:
            return scholars
    }
}

export default App