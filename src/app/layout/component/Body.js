import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
import RowSimple from './particular/row/Simple'
import RowComplex from './particular/row/Complex'
import FormScholars from './form/row/scholars'
import FormProjects from './form/row/project'
import { BtnPrimary } from './particular/button'

const App = ({ introItem, neckItems, scholars, setScholars, setDetailImage }) => {
return (
    <div className="bg-gray-100 py-11 space-y-4">
        <BtnPrimary label="Begin" />
        <RowSimple data={introItem} />
        <RowGreeting data={neckItems} />
        <RowComplex data={{
            title: 'Judul',
            description: 'Desc',
            kind: 'App',
            stack: [{icon: 'javascript', label: 'javascript'}, {icon: 'react', label: 'reactjs'}, {icon: 'nodejs', label: 'nodejs'}, {icon: 'firebase', label: 'firebase'}, {icon: 'google', label: 'google cloud messenger'}],
            icon: 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png',
            screenshot: ['https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png', 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png', 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png', 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png', 'https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png'],
            source: 'https://github.com/utifmd/android.apk'
        }} />
        
        <FormProjects setProjects={null} />
        
        { scholars.length ? scholars.map((scholar, key) => 
            <RowGeneral key={key} data={scholar} setDetailImage={setDetailImage} />
        ) : null }

        <FormScholars setScholars={setScholars} />
    </div>
)}

export default App