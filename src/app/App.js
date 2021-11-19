import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { signIn, signOut } from '../data/repos/remote/persistence/auth'
import { createScholar, readScholars, updateScholar, deleteScholar } from '../data/repos/remote/persistence/scholars'
import { createProject, readProjects, updateProject, deleteProject } from '../data/repos/remote/persistence/projects'

import MainView from './view/MainView'
import Preloader from './layout/component/Preloader'

const App = ({ introItem, neckItems, profileItem }) => {
    const dispatch = useDispatch(),
    { scholars, projects, auth } = useSelector((state) => state),

    [ currentUser, setCurrentUser ] = useState(localStorage.getItem('profile')),
    [ dark, setDark ] = useState(localStorage.getItem('theme') === 'dark'),
    
    handleDarkMode = () => {
        let { classList } = document.getElementById('root')
        
        if(dark){
            classList.add('dark')
            localStorage.setItem('theme', 'dark')
        }else{ 
            classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    },

    handleSignOut = () => {
        dispatch(signOut())
        setCurrentUser(null)
    }
    
    useEffect(() => {
        dispatch(readScholars())
        dispatch(readProjects())
    }, [ dispatch ])
  
    useEffect(handleDarkMode, [ dark ])

    return projects.length || scholars.length? (
    
    <MainView 
        scholars={scholars} setScholars={createScholar} 
        projects={projects} setProjects={createProject} 
        updateScholar={updateScholar} deleteScholar={deleteScholar}
        updateProject={updateProject} deleteProject={deleteProject}
        
        auth={auth} signIn={signIn} 
        user={currentUser|| auth?.result} 
        handleSignOut={handleSignOut}
        
        dark={dark} setDark={setDark}
        introItem={introItem}
        neckItems={neckItems}
        profileItem={profileItem}/> ): ( 
    <Preloader /> )
}

export default App