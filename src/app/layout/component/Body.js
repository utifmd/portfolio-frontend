import QuickAction from './particular/row/QuickAction'
import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
import RowSimple from './particular/row/Simple'
import RowComplex from './particular/row/Complex'
import FormScholars from './form/row/scholars'
import FormProjects from './form/row/project'

import { BtnPrimary } from './particular/button'
import { useRef, useState } from 'react'

const initialFormState = {
    scholars: {
        currentPid: null
    },
    projects: {
        currentPid: null
    }
}

const Body = ({ introItem, neckItems, user, file, createFiles,
    scholars, setScholars, updateScholar, deleteScholar, 
    projects, setProjects, updateProject, deleteProject,
    setDetailImage, setDemoView, xRef, setShowSnackbar, handleMainScrolling, 
    dark, setDark }) => {
    const elRefs = useRef({}),
        [ formState, setFormState ] = useState(initialFormState),

        handleXref = (key, e) => { 
            elRefs.current[key] = e 
        },

        handleScrolling = (key) => {
            elRefs.current[key]?.scrollIntoView({ behavior: "smooth", top: 0 })
        },

        handleFormFocus = (type, pid) => {
            type === 'FormProjects'
            ? setFormState({ ...formState, projects: {currentPid: pid}})
            : setFormState({ ...formState, scholars: {currentPid: pid}})

            handleScrolling(type)
        }
    return (
        <div ref={xRef} className="py-11 px-5 space-y-4 animate-fade-in-down bg-gradient-to-tl from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <BtnPrimary label="Begin"
                xRef={(e) => handleXref('BtnPrimary', e)} 
                onClick={() => handleScrolling('RowSimple')} />
            <RowSimple 
                xRef={(e) => handleXref('RowSimple', e)}
                onClickNext={() => handleScrolling('RowGreeting')}
                data={introItem} />
            <RowGreeting 
                xRef={(e) => handleXref('RowGreeting', e)} 
                onClick={() => handleScrolling(projects.length? 'RowComplex0': 'RowGeneral0')}
                dark={dark} data={neckItems} />
        { projects.data.length 
            ? projects.data.map((project, key) => <RowComplex
                key={project._id}
                xKey={key+1} maxKey={projects.length}
                xRef={(e) => handleXref(`RowComplex${key}`, e)}
                data={project} dark={dark} user={user}
                deleteProject={deleteProject}
                onEditClick={() => handleFormFocus('FormProjects', project._id)}
                handleScrolling={handleScrolling}
                setDemoView={setDemoView}
                setDetailImage={setDetailImage} /> ) 
            : projects.status !== 'succeeded'
            ? <div className={`h-60 py-4 px-20 bg-gray-300 dark:bg-gray-600 animate-pulse`}/>
            : <div className="p-6 text-center space-y-6 py-28"><p className="font-base text-gray-900 dark:text-gray-100">there is no project yet.</p></div>
        }
        { user ?
            <FormProjects 
                xRef={(e) => handleXref('FormProjects', e)}
                formState={formState}
                projects={projects}
                updateProject={updateProject}
                setProjects={setProjects}
                file={file}
                createFiles={createFiles}
                setShowSnackbar={setShowSnackbar}
                handleScrolling={handleScrolling} /> :null }
        { scholars.data.length 
            ? scholars.data.map((scholar, key) =>  <RowGeneral 
                key={scholar._id}
                xKey={key+1} maxKey={scholars.length}
                xRef={(e) => handleXref(`RowGeneral${key}`, e)}
                data={scholar} user={user}
                deleteScholar={deleteScholar}
                onEditClick={() => handleFormFocus('FormScholars', scholar._id)}
                handleScrolling={handleScrolling}
                handleMainScrolling={handleMainScrolling}
                setDetailImage={setDetailImage} /> ) 
            : projects.status !== 'succeeded'
            ? <div className={`h-60 py-4 px-20 bg-gray-300 dark:bg-gray-600 animate-pulse`}/>
            : <div className="p-6 text-center space-y-6 py-28"><p className="font-base text-gray-900 dark:text-gray-100">there is no scholar yet.</p></div>
        }
        { user ?
            <FormScholars 
                xRef={(e) => handleXref('FormScholars', e)} 
                scholars={scholars}
                formState={formState}
                setScholars={setScholars}
                updateScholar={updateScholar}
                file={file}
                createFiles={createFiles}
                setShowSnackbar={setShowSnackbar}
                handleScrolling={handleScrolling} /> :null }
            <QuickAction
                xRef={(e) => handleXref('QuickAction', e)}
                user={user}
                dark={dark}
                setDark={setDark}
                handleScrolling={handleScrolling}
                handleMainScrolling={handleMainScrolling} />
        </div>
    )}

export default Body