import { toBase64 } from '../../../../features/module'
import { BtnPrimary } from '../../particular/button'
import { PlaceholderImg, PlaceholderQueue } from '../../../../assets'
import { baseUrl } from '../../../../features/api'

import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

const initialState = { title: '', description: '', kind: 'website', stack: [], iconUrl: '', fileUrl: [], demoUrl: '', source: ''}
const initialFileState = { name: `file-${new Date().getTime()}`, type: 'image/png', data: '' }
const App = ({ formState, projects, setProjects, updateProject, file, createFiles, xRef, handleScrolling, setShowSnackbar }) => { 
    const dispatch = useDispatch(),
        elRefs = useRef({}),
        refIcon = useRef(null),
        refScreenshot = useRef(null),
        [ stateData, setStateData ] = useState(initialState),
        [ stateFiles, setStateFiles ] = useState([]),
        [ stateHeadSource, setStateHeadSource ] = useState('https://www.'),
        { title, description, kind, stack, /*iconUrl, fileUrl,*/ source } = stateData,
        { currentPid } = formState?.projects,
        selectedProject = currentPid? projects.find((item) => item._id === currentPid): null,
    
    onFileSelected = (e, isIcon) => {
        Promise.all([...e.target.files].map(files => files))
        .then(files => {
            if (!files.length) return
            let basses = files.map(async(file) => await toBase64(file))
            
                Promise.all(basses)
                    .then(basses64 => {
                        const { name, type } = initialFileState
                        let multiple = basses64.map(base64 => 
                            Object.getPrototypeOf(Object.create({ name, type, data: base64 })))
                        
                        isIcon ? setStateFiles([{ name, type: 'image/ico', data: basses64[0] }])  : setStateFiles([ ...stateFiles, ...multiple ])
                    })
                    .catch(err => setShowSnackbar({body: err.message}))
            })
            .catch(err => setShowSnackbar({body: err.message}))
    },

    handleSubmit = (e) => {
        e.preventDefault()
        
        if(!title.length || !description.length || !kind.length || !source.length){
            setShowSnackbar({body: 'fill the fields.'})
            return  
        }

        if (stateFiles.length) {
            dispatch(createFiles(stateFiles))
                .then((resp) => onCreateProjects(resp))
                .catch(err => setShowSnackbar({body: err.message}))
        } else {
            currentPid 
            ? onCreateProjects(null)
            : setShowSnackbar({body: 'select some image.'})
        }
        
        console.log(stateFiles)
    },

    onCreateProjects = (resp) => { 
        if (resp){
            let files = resp.payload.data
            let iconUrl = files
                .filter((v) => v.type === 'image/ico')
                .map((file) => `${baseUrl}file/${file._id}`)[0] ?? ''
                
                let fileUrls = files
                    .filter((v) => v.type === 'image/png')
                    .map((file) => `${baseUrl}file/${file._id}`)
            
            currentPid
            ? dispatch(updateProject(currentPid, { ...stateData, 
                iconUrl: iconUrl, fileUrl: fileUrls, source: `${stateHeadSource}${stateData.source}`
            }))
            : dispatch(setProjects({ ...stateData, 
                iconUrl: iconUrl, fileUrl: fileUrls, source: `${stateHeadSource}${stateData.source}`
            }))
        } else {
            dispatch(updateProject(currentPid, { ...stateData }))
        }

        handleSubmitted()
    },
    
    handleSubmitted = () => {
        let scroller = `RowComplex${projects.length-1}`

        setStateData({...initialState})
        setStateFiles([])
        Object.values(elRefs.current).map((elem) => elem.value = null)
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

useEffect(() => {
    if(selectedProject)
        setStateData(selectedProject)

}, [ selectedProject ])

return( 
    <div className="py-6 animate-fade-in-up">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <div ref={xRef} className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">Project Entry</p>
            <div className="flex justify-center"><div className="h-0.5 w-24 bg-gray-900 dark:bg-gray-100"/></div>
                <div className="grid gap-4 md:grid-cols-2 mb-4">
                    <div className="md:col-span-2">
                        <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            type="text" placeholder="Enter projct name" 
                            ref={(e) => elRefs.current['title'] = e} 
                            value={stateData.title}
                            onChange={(e) => setStateData({...stateData, title: e.target.value})}/>
                    </div>
                    <div className="md:col-span-2 flex flex-inline">
                        <select className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 pl-3 pr-2 focus:outline-none" 
                            value={stateHeadSource} 
                            onChange={(e) => setStateHeadSource(e.target.value)}>
                            <option value="https://www.">https://</option>
                            <option value="http://www.">http://</option> {/* <option value="mysql://">mysql</option> <option value="mongodb://">mongodb</option> */}
                        </select>
                        <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            type="text" placeholder="Enter source link" 
                            ref={(e) => elRefs.current['source'] = e} 
                            value={stateData.source}
                            onChange={(e) => setStateData({ ...stateData, source: e.target.value })} />
                    </div>
                    <div className="md:col-span-2">
                        <input className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            type="text" placeholder="Enter demo link" 
                            ref={(e) => elRefs.current['demo'] = e} 
                            value={stateData.demoUrl}
                            onChange={(e) => setStateData({...stateData, demoUrl: e.target.value})}/>
                    </div>
                    <div className="relative bg-white overflow-hidden appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600">
                    { stateFiles.filter((v, i) => v.type === 'image/ico')[0] 
                        ? <img className="object-contain h-full w-full cursor-pointer" src={stateFiles.filter((v, i) => v.type === 'image/ico')[0].data} alt="add new stateData" onClick={() => refIcon.current.click()} />
                        : <PlaceholderImg onClick={() => refIcon.current.click()} /> 
                    } 
                        <input ref={refIcon} className="hidden" type="file" id="file" multiple={false}
                            onChange={(e) => onFileSelected(e, true)} />
                    </div>
                    <div className="h-full w-full space-y-4 text-left">
                        <select className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            value={stateData.kind} onChange={(e) => setStateData({ ...stateData, kind: e.target.value })}>
                            <option value="website">Website</option>
                            <option value="android">Android</option>
                            <option value="ios">IOS</option>
                            <option value="webapps">Web Application</option>
                        </select>
                        <input 
                            type="text" placeholder="Enter some stacks" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            ref={(e) => elRefs.current['stacks'] = e}
                            onKeyUp={handleStackEvent} />
                            <div className="hidden">
                                <div className="absolute z-40 left-0 mt-2 w-full">
                                    <div className="py-1 text-sm bg-white rounded shadow-lg border border-gray-300">
                                        <div className="block py-1 px-5 cursor-pointer hover:bg-indigo-600 hover:text-white" />
                                    </div>
                                </div>
                            </div>
                        { stack ? stack.length ? stack.map((v, i) =>
                            <div key={i} className="bg-gray-200 dark:bg-gray-700 inline-flex items-center text-sm rounded mt-2 mr-1 overflow-hidden">
                                <span className="ml-2 mr-1 leading-relaxed text-gray-900 dark:text-gray-100 truncate max-w-xs px-1">{v}</span>
                                <button className="w-6 h-8 inline-block align-middle bg-green-600 dark:text-gray-900 text-gray-100 focus:outline-none" onClick={() => deleteStacksItem(i)}>
                                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                                </button>
                            </div>
                        ) : null : null}
                        <textarea type="text" placeholder="Enter app description" className="appearance-none block w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 py-4 px-4 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600"
                            ref={(e) => elRefs.current['description'] = e} 
                            value={stateData.description}
                            onChange={(e) => setStateData({...stateData, description: e.target.value})} />
                    </div>
                    <div className="md:col-span-2"> 
                        <div className="flex justify-start space-x-1"> { stateFiles.length ? stateFiles.filter((v, i) => v.type !== 'image/ico').map((v, i) => 
                            <img key={i} className="object-contain h-16 w-16 bg-gray-200 cursor-pointer" src={v.data} alt="ss"/> 
                        ) :null }
                            <PlaceholderQueue clazz={'h-16 w-16 bg-gray-200 dark:bg-gray-700 p-2'} onClick={() => refScreenshot.current.click()} />
                            <input ref={refScreenshot} className="hidden" type="file" id="file" multiple={true} onChange={(e) => onFileSelected(e, false)} />
                        </div>
                    </div>
                </div>
                { projects.status === 'idle' || projects.status === 'succeeded'
                    ? <BtnPrimary label={currentPid? 'Edit': 'Post'} onClick={handleSubmit} />
                    : <BtnPrimary label="loading" />
                }
        </div>
    </div>)}
    
export default App