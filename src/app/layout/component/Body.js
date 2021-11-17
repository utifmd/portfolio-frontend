import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
import RowSimple from './particular/row/Simple'
import RowComplex from './particular/row/Complex'
import FormScholars from './form/row/scholars'
import FormProjects from './form/row/project'

import { BtnPrimary } from './particular/button'
import { useRef } from 'react'

const App = ({ introItem, neckItems, scholars, setScholars, projects, setProjects, user, setDetailImage, xRef, setShowSnackbar }) => {
    const elRefs = useRef({}),

        handleXref = (key, e) => { 
            elRefs.current[key] = e 
        },

        handleScrolling = (key) => { 
            elRefs.current[key]?.scrollIntoView({ behavior: "smooth", top: 0 })
        }
        
    return (
        <div ref={xRef} className="py-11 space-y-4 animate-fade-in-down bg-gradient-to-tl from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
            <BtnPrimary label="Begin"
                xRef={(e) => handleXref('BtnPrimary', e)} 
                onClick={() => handleScrolling('RowSimple')} />
            <RowSimple 
                xRef={(e) => handleXref('RowSimple', e)}
                onClickNext={() => handleScrolling('RowGreeting')}
                data={introItem} />
            <RowGreeting 
                xRef={(e) => handleXref('RowGreeting', e)} 
                data={neckItems} />
            { projects.length ? projects.map((project, key) => 
                <RowComplex 
                    xRef={(e) => handleXref(`RowComplex${key}`, e)}
                    key={key} 
                    data={project} 
                    setDetailImage={setDetailImage} /> ) :null }
            { user ?
                <FormProjects 
                    xRef={(e) => handleXref('FormProjects', e)}
                    setProjects={setProjects} 
                    setShowSnackbar={setShowSnackbar}
                    handleScrolling={handleScrolling} /> :null }
            { scholars.length ? scholars.map((scholar, key) => 
                <RowGeneral 
                    xRef={(e) => handleXref(`RowGeneral${key}`, e)}
                    key={key}
                    data={scholar} 
                    setDetailImage={setDetailImage} /> ) :null }
            { user ?
                <FormScholars 
                    xRef={(e) => handleXref('FormScholars', e)} 
                    setScholars={setScholars}
                    setShowSnackbar={setShowSnackbar}
                    handleScrolling={handleScrolling} /> :null }
        </div>
    )}

export default App