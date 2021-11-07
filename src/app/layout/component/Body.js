import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
import RowSimple from './particular/row/Simple'
import RowComplex from './particular/row/Complex'
import FormScholars from './form/row/scholars'
import FormProjects from './form/row/project'
import { BtnPrimary } from './particular/button'

const App = ({ introItem, neckItems, scholars, setScholars, projects, setProjects, setDetailImage }) => { return (
    <div className="bg-gray-100 py-11 space-y-4">
        <BtnPrimary label="Begin" />
        <RowSimple data={introItem} />
        <RowGreeting data={neckItems} />
        
        { projects ? projects.length ? projects.map((project, key) => 
            <RowComplex key={key} data={project} setDetailImage={setDetailImage} />
        ) : null : null}
        
        <FormProjects setProjects={setProjects} />
        
        { scholars ? scholars.length ? scholars.map((scholar, key) => 
            <RowGeneral key={key} data={scholar} setDetailImage={setDetailImage} />
        ) : null : null}

        <FormScholars setScholars={setScholars} />
    </div>
)}

export default App