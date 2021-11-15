import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
import RowSimple from './particular/row/Simple'
import RowComplex from './particular/row/Complex'
import FormScholars from './form/row/scholars'
import FormProjects from './form/row/project'

import { BtnPrimary } from './particular/button'
import { useRef } from 'react'

const App = ({ introItem, neckItems, scholars, setScholars, projects, setProjects, user, setDetailImage, xRef }) => {
    const elRefs = useRef({}),

        handleXref = (key, e) => { 
            elRefs.current[key] = e 
        },

        handleScrolling = (key) => { 
            elRefs.current[key]?.scrollIntoView({ behavior: "smooth", top: 0 })
        }
        
    return (
        <div ref={xRef} className="bg-gray-100 py-11 space-y-4 animate-fade-in-up">
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
            { projects ? projects.length ? projects.map((project, key) => 
                <RowComplex 
                    xRef={(e) => handleXref(`RowComplex${key}`, e)}
                    key={key} 
                    data={project} 
                    setDetailImage={setDetailImage} /> ) : null : null }
            { user ?
                <FormProjects 
                    xRef={(e) => handleXref('FormProjects', e)}
                    setProjects={setProjects} 
                    handleScrolling={handleScrolling} /> : null }
            { scholars ? scholars.length ? scholars.map((scholar, key) => 
                <RowGeneral 
                    xRef={(e) => handleXref(`RowGeneral${key}`, e)}
                    key={key}
                    data={scholar} 
                    setDetailImage={setDetailImage} /> ) : null : null }
            { user ?
                <FormScholars 
                    xRef={(e) => handleXref('FormScholars', e)} 
                    setScholars={setScholars}
                    handleScrolling={handleScrolling} /> : null }
        </div>
    )}

export default App