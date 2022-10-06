import { toBase64, toLowerImage } from '../../../../features/module'
import { BtnPrimary } from '../../particular/button'
import { PlaceholderImg } from '../../../../assets'
import { baseUrl } from '../../../../features/api'

import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const initialState = { title: '', desc: 'Scholarship entry', source: 'https://', body: '', author: 'utifmd@gmail.com', fileUrl: '', tags: ['scholarship'] }
const initialFileState = { name: `file-${new Date().getTime()}`, type: 'image/png', data: '' }
const App = ({ formState, scholars, setScholars, updateScholar, file, createFiles, xRef, setShowSnackbar, handleScrolling }) => { 
    const elRefs = useRef({}),
        inputRef = useRef(null),
        dispatch = useDispatch(),
        [ stateData, setStateData ] = useState(initialState),
        [ stateFiles, setStateFiles ] = useState([]),
        { currentPid } = formState?.scholars,
        selectedScholar = currentPid? scholars?.data?.find((item) => item._id === currentPid): null,
        
    onFileSelected = (e) => {
        const { name, type } = initialFileState
        let files = e.target.files
        
        files.forEach( async (file) => {
            await toBase64(file).then(base64 => {
                setStateFiles([ ...stateFiles, { name, type, data: base64 }])
            }).catch((err) => console.log(err.message))
        })
    },

    handleSubmit = (e) => {
        e.preventDefault()
        const {title, body} = stateData
        
        if(!title.length && !body.length){
            setShowSnackbar({body: 'fill the fields.'})
            return  
        }

        if(stateFiles.length) {
            dispatch(createFiles(stateFiles))
                .then((resp) => onCreateScholars(resp))
                .catch(err => {
                    setShowSnackbar({body: err.message})
                })
        } else {
            currentPid
            ? onCreateScholars(null)
            : setShowSnackbar({body: 'select an image.'})
        }
    },
    
    onCreateScholars = (resp) => { 
        if(resp){
            let file = resp.payload.data[0]
            let url = `${baseUrl}file/${file._id}`

            currentPid
            ? dispatch(updateScholar(currentPid, { ...stateData, fileUrl: url }))
            : dispatch(setScholars({ ...stateData, fileUrl: url }))
            
        } else {
            dispatch(updateScholar(currentPid, { ...stateData }))
        }
        handleSubmitted()
    },
    
    handleSubmitted = () => {
        let scroller = `RowGeneral${scholars.data.length -1}`
        
        handleScrolling(scroller)
        setStateData(initialState)
        setStateFiles([])
        Object.values(elRefs.current).map((elem) => elem.value = null)
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

useEffect(() => {
    if(selectedScholar) {
        //let { fileUrl } = selectedScholar
        let domain = new URL(selectedScholar.source)

        setStateData({...selectedScholar, source: domain.hostname})
    }

}, [ selectedScholar ])

return( 
    <div className="py-6 animate-fade-in-up">
        <div className="h-px bg-gray-200 dark:bg-gray-800"/>
        <div ref={xRef} className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">Scholarsip Entry</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-gray-900 dark:bg-gray-100"/></div>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div className="md:col-span-2">
                        <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            ref={(e) => elRefs.current['title'] = e} 
                            type="text" placeholder="Enter title" 
                            value={stateData.title}
                            onChange={(e) => setStateData({...stateData, title: e.target.value})}/></div>
                    <div className="md:col-span-2">
                        <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            ref={(e) => elRefs.current['source'] = e} 
                            type="text" placeholder="Enter source" 
                            value={stateData.source}
                            onChange={(e) => setStateData({...stateData, source: e.target.value})}/></div>
                    <div className="relative bg-white overflow-hidden appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                    { stateFiles.length //stateData.fileUrl ?
                        ? <img className="object-contain h-full w-full cursor-pointer" src={stateFiles[0].data} alt="add new stateData" onClick={() => inputRef.current.click()} /> 
                        : <PlaceholderImg onClick={() => inputRef.current.click()} /> }
                        <input ref={inputRef} className="hidden" type="file" id="file"
                            multiple={false}
                            onChange={onFileSelected} />
                    </div>
                    <div className="h-full w-full space-y-4 text-left">
                        <textarea ref={(e) => elRefs.current['message'] = e} type="text" placeholder="Enter message" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            value={stateData.body}
                            onChange={(e) => setStateData({...stateData, body: e.target.value})} />
                        <input ref={(e) => elRefs.current['tags'] = e} type="text" placeholder="Enter some tags" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            onKeyUp={handleTagsEvent} />
                            <div className="hidden">
                                <div className="absolute z-40 left-0 mt-2 w-full">
                                    <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
                                        <div className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        { stateData.tags && stateData.tags.length && stateData.tags.map((v, i) =>
                            <div key={i} className="bg-gray-200 dark:bg-gray-700 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
                                <span className="ml-2 mr-1 leading-relaxed text-gray-900 dark:text-gray-100 truncate max-w-xs px-1">{v}</span>
                                <button className="w-6 h-8 inline-block align-middle bg-green-600 dark:text-gray-900 text-gray-100 focus:outline-none" onClick={() => deleteTagsItem(i)}>
                                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                { scholars.status === 'idle' || scholars.status === 'succeeded'
                    ? <BtnPrimary label={currentPid? 'Edit': 'Post'} onClick={handleSubmit} />
                    : <BtnPrimary label="loading" />
                }
        </div>
    </div>)}
    
export default App