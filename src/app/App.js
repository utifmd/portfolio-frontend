import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { createPost, getPosts } from '../data/repos/remote/persistence/scholars'
import { createProject, readProjects } from '../data/repos/remote/persistence/projects'
import MainView from './view/MainView'

const App = ({ introItem, neckItems }) => {
    const dispatch = useDispatch(),
        { scholars, projects } = useSelector((state) => state)
    
    useEffect(() => {
        dispatch(getPosts())
        dispatch(readProjects())
    }, [ dispatch ])

    return (
      <MainView 
        introItem={introItem} 
        neckItems={neckItems} 
        scholars={scholars} setScholars={createPost}
        projects={projects} setProjects={createProject} />
    )
}

export default App