import { combineReducers } from 'redux'
import scholars from './scholars'
import projects from './projects'
import file from './file'
import auth from './auth'

export default combineReducers({ scholars, projects, file, auth })