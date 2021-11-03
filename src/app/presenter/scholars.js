import { getPosts } from '../../data/repos/remote/persistence/scholars'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const Presenter = () => {
    const dispatch = useDispatch(),
        data = useSelector((state) => state.scholars)
    
    useEffect(() => {
        dispatch(getPosts())

    }, [ dispatch ])

    return data
}