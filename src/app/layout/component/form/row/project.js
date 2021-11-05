import { toBase64, toLowerImage } from '../../../../features/module'
import { BtnPrimary } from '../../particular/button'
import { PlaceholderImg, PlaceholderQueue } from '../../../../assets'

import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

const App = ({ setProjects }) => { 
    const dispatch = useDispatch(),
        refIcon = useRef(null),
        refScreenshot = useRef(null),
        defaultState = { 
            title: null,
            description: null,
            kind: null,
            stack: [],
            icon: null,
            screenshot: [],
            source: null},
        [ stateData, setStateData ] = useState(defaultState),
        { title, description, kind, stack, icon, screenshot, source } = stateData,
        
    handleSubmit = (e) => {
        e.preventDefault()

        console.log(JSON.stringify(stateData, null, 2));

        // if(title && description && kind && icon && source){
        //     dispatch(setProjects(stateData))
        //     setStateData(defaultState)
        // }
    },
    
    handleOpenedFile = async (e, type) => {
        let icon = e.target.files[0]

        await toLowerImage(icon).then( async (lower) => {
            await toBase64(lower).then(base64 => type === 1
                ? setStateData({ ...stateData, icon: base64 })
                : setStateData({ ...stateData, screenshot: [ ...screenshot, base64 ] })
            ).catch((err) => console.log(err.message))
        }).catch(err => console.log(err.message))
    },

    handleStackEvent = (e) => { if(e.keyCode === 13 && e.target.value.length !== 0) {
        setStateData({ ...stateData, stack: [
            ...stack, e.target.value.replace(/\s+/g, '')
        ]})
        e.target.value = ''
    }},

    deleteStacksItem = (key) => setStateData({ ...stateData, stack: 
        stack.filter((v, i) => i !== key)
    })

return( 
    <div className="py-6">
        <div className="h-px bg-gray-200" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase">Project Entry</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-black"/></div>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div className="md:col-span-2">
                        <input type="text" placeholder="Enter projct name" className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            onChange={(e) => setStateData({...stateData, title: e.target.value.trim()})}/></div>
                    <div className="relative bg-white overflow-hidden appearance-none block w-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                    { icon ?
                        <img className="object-contain h-full w-full cursor-pointer" src={icon} alt="add new stateData" onClick={() => refIcon.current.click()} /> : <PlaceholderImg onClick={() => refIcon.current.click()} /> }
                        <input ref={refIcon} className="hidden" type="file" id="file"
                            multiple={false} 
                            onChange={(e) => handleOpenedFile(e, 1)} />
                    </div>
                    <div className="h-full w-full space-y-4 text-left">
                        <textarea type="text" placeholder="Enter app description" onChange={(e) => setStateData({...stateData, description: e.target.value.trim()})} className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"/>
                        <input type="text" placeholder="Enter some stacks" className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            onKeyUp={handleStackEvent} />
                            <div className="hidden">
                                <div className="absolute z-40 left-0 mt-2 w-full">
                                    <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
                                        <div className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        { stack ? stack.length ? stack.map((v, i) =>
                            <div key={i} className="bg-green-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
                                <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">{v}</span>
                                <button className="w-6 h-8 inline-block align-middle text-gray-500 bg-green-200 focus:outline-none" onClick={() => deleteStacksItem(i)}>
                                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                                </button>
                            </div>
                        ) : null : null}
                    </div>
                    <div className="md:col-span-2"> 
                        <div className="flex justify-start space-x-1"> { screenshot.length ? screenshot.map((v, i) => 
                            <img key={i} className="object-contain h-16 w-16 bg-gray-200 cursor-pointer" src={v} alt="ss"/> 
                        ) : null}
                            <PlaceholderQueue clazz={'h-16 w-16 bg-gray-200 p-2'} onClick={() => refScreenshot.current.click()} />
                            <input ref={refScreenshot} className="hidden" type="file" id="file" multiple={false} onChange={(e) => handleOpenedFile(e, 2)} />
                        </div>
                    </div>
                </div>
                <BtnPrimary label="Post" onClick={handleSubmit} />
        </div>
    </div>)}
    
export default App