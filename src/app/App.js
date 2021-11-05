import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { getPosts, createPost } from '../data/repos/remote/persistence/scholars'
import MainView from './view/MainView'

const App = ({ introItem, neckItems }) => {
    const dispatch = useDispatch(),
        scholars = useSelector((state) => state.scholars)
    
    useEffect(() => {
        dispatch(getPosts())

    }, [ dispatch ])

    return (
      <MainView 
        introItem={introItem} 
        neckItems={neckItems} 
        scholars={scholars} setScholars={createPost}/>
    )
}

export default App