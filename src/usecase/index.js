import { combineReducers } from 'redux'
import scholars from './scholars'
import projects from './projects'
import auth from './auth'

export default combineReducers({ scholars, projects, auth })