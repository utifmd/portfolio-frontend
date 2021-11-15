import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

const App = ({ data, xRef, signIn, user, handleSignOut }) => {
    const initialState = {
        name: data.name,
        email: data.email,
        password: null
    }

    const elPassRefs = useRef(),
        dispatch = useDispatch(),
        [ form, setForm ] = useState(false),
        [ stateData, setStateData ] = useState(initialState),

        handleSignIn = (e) => {
            if(e.keyCode === 13 && e.target.value.length > 6) {
                setStateData({ ...stateData, password: e.target.value})
                dispatch(signIn(stateData))
                setStateData(initialState)
                elPassRefs.current.value = null
            }
        }

    return(
        <figure ref={xRef} className="flex overflow-hidden mt-24 mx-6">
            <img className="w-36 h-36 rounded-full" src={data?.pic} alt={data?.pic} />
            <div className="md:p-6 p-3 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-semibold"> { data? data.quotes :
                        `“Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”`}
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div onClick={() => setForm((prev) => !prev)} className="cursor-pointer text-cyan-600"> { data? data.name : 
                        `Sarah Dayan` }
                    </div>
                { form 
                ? user 
                    ? <div onClick={handleSignOut} className="animate-fade-in-up text-gray-500 cursor-pointer">Sign out</div>
                    : <input type="password" className="animate-fade-in-up appearance-none text-center md:text-left focus:outline-none" placeholder="Enter password" 
                        ref={elPassRefs} 
                        onChange={(e) => setStateData({...stateData, password: e.target.value.trim()})} 
                        onKeyDown={handleSignIn} />
                : <div className="animate-fade-in-up text-gray-500"> { data? data.institution :  `Algolia`} </div>
                }
                </figcaption>
            </div>
        </figure>
    )
}

export default App