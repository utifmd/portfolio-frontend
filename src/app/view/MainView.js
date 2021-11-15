import Header from '../layout/component/Header'
import Body from '../layout/component/Body'
import Footer from '../layout/component/Footer'
import Modal from '../layout/component/Modal'
import Profile from '../layout/component/form/row/auth'
import ModalImage from '../layout/component/particular/detail/Picture'
import { useState, useRef } from 'react'

function App({ 
  introItem, neckItems, profileItem, 
  scholars, setScholars, 
  projects, setProjects, 
  signIn, user, handleSignOut }) {
  
  const elRefs = useRef({}),
    [ showModal, setShowModal ] = useState(false),
    [ detailImage, setDetailImage ] = useState(null),
    
    handleRef = (key, e) => {
      elRefs.current[key] = e
    },
    
    handleScroll = (key) => {
      elRefs.current[key]?.scrollIntoView({ behavior: "smooth", top: 0 })
    }

  return (
    <div className="container max-w-xl mx-auto">
      <Header xRef={(e) => handleRef(0, e)} onClick={() => handleScroll(2)} />
      <Body xRef={(e) => handleRef(1, e)} 
        introItem={introItem} 
        neckItems={neckItems} 
        user={user}
        scholars={scholars}
        setScholars={setScholars}
        projects={projects}
        setProjects={setProjects}
        setDetailImage={setDetailImage}/>
      <Profile xRef={(e) => handleRef(2, e)} data={profileItem} signIn={signIn} user={user} handleSignOut={handleSignOut} />
      <Footer xRef={(e) => handleRef(3, e)} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ModalImage detailImage={detailImage} setDetailImage={setDetailImage} />
    </div>
  );
}

export default App;
