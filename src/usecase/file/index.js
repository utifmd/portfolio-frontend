import { FILE_CREATE, FILE_CREATE_ALL, FILE_READ_ALL, FILE_DELETE } from '../../data/repos/local/constants'

const App = (file = [], action) => {
    switch (action.type) {
        case FILE_CREATE:
            return [...file, {...action?.payload, message: action?.message}]
        case FILE_CREATE_ALL:
            return [...file, {...action?.payload, message: action?.message}]
        case FILE_READ_ALL:
            return action.payload
        case FILE_DELETE: 
            return file.filter((file) => 
                file._id !== action.payload )
        default:
            return file
    }
}

export default App