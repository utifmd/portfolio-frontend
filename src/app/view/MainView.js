import Header from '../layout/component/Header'
import Body from '../layout/component/Body'
import Footer from '../layout/component/Footer'
import Modal from '../layout/component/Modal'
import ModalImage from '../layout/component/particular/detail/Picture'
import { useState } from 'react'

function App({ introItem, neckItems, scholars, setScholars, projects, setProjects }) {
  
  const [ showModal, setShowModal ] = useState(false),
    [ detailImage, setDetailImage ] = useState(null)

  return ( /*container mx-auto px-4 md:container md:mx-auto*/
    <div className="container max-w-xl mx-auto">
      <Header />
      <Body introItem={introItem} 
        neckItems={neckItems} 
        scholars={scholars}
        setScholars={setScholars}
        projects={projects}
        setProjects={setProjects}
        setDetailImage={setDetailImage} />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ModalImage detailImage={detailImage} setDetailImage={setDetailImage} />
    </div>
  );
}

export default App;
