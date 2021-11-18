import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { signIn, signOut } from '../data/repos/remote/persistence/auth'
import { createScholar, readScholars, updateScholar } from '../data/repos/remote/persistence/scholars'
import { createProject, readProjects, updateProject } from '../data/repos/remote/persistence/projects'

import MainView from './view/MainView'
import Preloader from './layout/component/Preloader'

const App = ({ introItem, neckItems, profileItem }) => {
    const dispatch = useDispatch(),
    { scholars, projects, auth } = useSelector((state) => state),
    [ currentUser, setCurrentUser ] = useState(localStorage.getItem('profile')),
    
    handleSignOut = () => {
        dispatch(signOut())
        setCurrentUser(null)
    }
    
    useEffect(() => {
        dispatch(readScholars())
        dispatch(readProjects())
    }, [ dispatch ])
  
    return projects.length || scholars.length? (
    
    <MainView 
        auth={auth}
        scholars={scholars} setScholars={createScholar} updateScholar={updateScholar}
        projects={projects} setProjects={createProject} updateProject={updateProject}
        
        signIn={signIn} 
        user={currentUser|| auth?.result} 
        handleSignOut={handleSignOut}
        
        introItem={introItem}
        neckItems={neckItems}
        profileItem={profileItem}/> ): ( 
    <Preloader /> )
}

export default App