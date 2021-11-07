import { toBase64, toLowerImage } from '../../../../features/module'
import { BtnPrimary } from '../../particular/button'
import { PlaceholderImg } from '../../../../assets'

import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

const App = ({ setScholars }) => { 
    const inputRef = useRef(null),
        dispatch = useDispatch(),
        initialState = { title: null, desc: 'Scholarship entry', body: null, author: 'utifmd@gmail.com', file: null, tags: ['scholarship']},
        [ stateData, setStateData ] = useState(initialState),
        
    handleSubmit = (e) => {
        e.preventDefault()

        if(stateData.title && stateData.body && stateData.file){
            dispatch(setScholars(stateData))
            setStateData(initialState)
        }
    },
    
    handleOpenedFile = async (e) => {
        let file = e.target.files[0]
        
        await toLowerImage(file).then( async (lower) => { // console.log(`out size ${lower.size / 1024 / 1024} MB`)
            await toBase64(lower).then(base64 => 
                setStateData({ ...stateData, file: base64})
            ).catch((err) => console.log(err.message))
        }).catch(err => console.log(err.message))
    },

    handleTagsEvent = (e) => { if(e.keyCode === 13 && e.target.value.length !== 0) {
        setStateData({ ...stateData,  tags: [
            ...stateData.tags, e.target.value.replace(/\s+/g, '')
        ]})
        e.target.value = ''
    }},

    deleteTagsItem = (key) => setStateData({ ...stateData, tags: 
        stateData.tags.filter((v, i) => i !== key)
    })

return( 
    <div className="py-6">
        <div className="h-px bg-gray-200" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase">Scholarsip Entry</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-black"/></div>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div className="md:col-span-2">
                        <input type="text" placeholder="Enter title" className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            onChange={(e) => setStateData({...stateData, title: e.target.value.trim()})}/></div>
                    <div className="relative bg-white overflow-hidden appearance-none block w-full bg-gray-200 text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                    { stateData.file ?
                        <img className="object-contain h-full w-full cursor-pointer" src={stateData.file} alt="add new stateData" onClick={() => inputRef.current.click()} /> : <PlaceholderImg onClick={() => inputRef.current.click()} /> }
                        <input ref={inputRef} className="hidden" type="file" id="file"
                            multiple={false} 
                            onChange={handleOpenedFile} />
                    </div>
                    <div className="h-full w-full space-y-4 text-left">
                        <textarea type="text" placeholder="Enter message" onChange={(e) => setStateData({...stateData, body: e.target.value.trim()})} className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"/>
                        <input type="text" placeholder="Enter some tags" className="appearance-none block w-full bg-gray-200 text-gray-700 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            onKeyUp={handleTagsEvent} />
                            <div className="hidden">
                                <div className="absolute z-40 left-0 mt-2 w-full">
                                    <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
                                        <div className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        { stateData.tags && stateData.tags.length && stateData.tags.map((tag, i) =>
                            <div key={i} className="bg-green-100 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
                                <span className="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1" x-text="tag">{tag}</span>
                                <button className="w-6 h-8 inline-block align-middle text-gray-500 bg-green-200 focus:outline-none" onClick={() => deleteTagsItem(i)}>
                                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <BtnPrimary label="Post" onClick={handleSubmit} />
        </div>
    </div>)}
    
export default App