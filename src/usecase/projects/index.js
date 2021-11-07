import { PROJECT_CREATE, PROJECT_READ_ALL, PROJECT_UPDATE, PROJECT_DELETE } from '../../data/repos/local/constants'

const App = (projects = [], action) => {
    switch (action.type) {
        case PROJECT_CREATE:
            return [ ...projects, action.payload ]
        case PROJECT_READ_ALL:
            return action.payload
        case PROJECT_UPDATE:
            return projects.map((post) => 
                post._id === action.payload._id 
                ? action.payload 
                : post )
        case PROJECT_DELETE: 
            return projects.filter((post) => 
                post._id !== action.payload )
        default:
            return projects
    }
}

export default App