import { SCHOLAR_CREATE, SCHOLAR_READ_ALL, SCHOLAR_UPDATE, SCHOLAR_DELETE } from '../../data/repos/local/constants'

const App = (scholars = [], action) => {
    switch (action.type) {
        case SCHOLAR_CREATE:
            return [ ...scholars, action.payload ]
        case SCHOLAR_READ_ALL:
            return action.payload
        case SCHOLAR_UPDATE:
            return scholars.map((post) => 
                post._id === action.payload._id 
                ? action.payload 
                : post )
        case SCHOLAR_DELETE: 
            return scholars.filter((post) => 
                post._id !== action.payload )
        
        default:
            return scholars
    }
}

export default App