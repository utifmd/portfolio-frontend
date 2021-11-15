import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { signIn, signOut } from '../data/repos/remote/persistence/auth'
import { createPost, getPosts } from '../data/repos/remote/persistence/scholars'
import { createProject, readProjects } from '../data/repos/remote/persistence/projects'

import MainView from './view/MainView'
import Preloader from './layout/component/Preloader'

const App = ({ introItem, neckItems, profileItem }) => {
    const dispatch = useDispatch(),
        [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile'))),
        { scholars, projects } = useSelector((state) => state),

    handleSignOut = (e) => {
        dispatch(signOut())
        setUser(null)
    }
    
    useEffect(() => {
        dispatch(getPosts())
        dispatch(readProjects())
    }, [ dispatch ])

    return projects || scholars ? (
        <MainView 
            introItem={introItem}
            neckItems={neckItems}
            profileItem={profileItem}
            signIn={signIn} user={user} handleSignOut={handleSignOut}
            scholars={scholars} setScholars={createPost}
            projects={projects} setProjects={createProject} />
    ) : ( 
        <Preloader /> 
    )
}

export default App