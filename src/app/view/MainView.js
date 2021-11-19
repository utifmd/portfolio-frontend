import Header from '../layout/component/Header'
import Body from '../layout/component/Body'
import Footer from '../layout/component/Footer'
import Modal from '../layout/component/Modal'
import Profile from '../layout/component/form/row/auth'
import ModalImage from '../layout/component/particular/detail/Picture'
import Snackbar from '../layout/component/particular/detail/Snackbar'
import { useState, useRef, useEffect } from 'react'

function App({
  introItem, neckItems, profileItem, 
  auth, scholars, setScholars, updateScholar, deleteScholar,
  projects, setProjects, updateProject, deleteProject, 
  user, signIn, handleSignOut, 
  dark, setDark }) {
  
  const elRefs = useRef({}),
    [ showModal, setShowModal ] = useState(false),
    [ detailImage, setDetailImage ] = useState(null),
    [ showSnackbar, setShowSnackbar ] = useState(null),
  
    handleRef = (key, e) => {
      elRefs.current[key] = e
    },
    
    handleScroll = (key) => {
      elRefs.current[key]?.scrollIntoView({ behavior: "smooth", top: 0 })
    },

    handleToast = (domain) => {
      if(domain?.message) 
        setShowSnackbar({body: domain.message})
    }

    useEffect(() => {
      handleToast(auth)
      handleToast(scholars)
      handleToast(projects)

    }, [ auth, scholars, projects ])

    useEffect(() => {
      setTimeout(() => {
        setShowSnackbar(null)
      }, 5000)
    }, [ showSnackbar ])

  return (
    <div className="">
      <div className="relative min-h-screen flex items-center justify-center ease-linear transition-all duration-500
        bg-gradient-to-br from-gray-200 to-gray-100 dark:from-gray-900 dark:to-gray-800"> {/*container max-w-xl mx-auto*/}
        <section className="container max-w-xl mx-auto">
          <Header xRef={(e) => handleRef(0, e)} onClick={() => handleScroll(2)} />
          <Body xRef={(e) => handleRef(1, e)} 
            introItem={introItem} neckItems={neckItems} user={user}
            scholars={scholars} setScholars={setScholars} updateScholar={updateScholar} deleteScholar={deleteScholar}
            projects={projects} setProjects={setProjects} updateProject={updateProject} deleteProject={deleteProject}
            setDetailImage={setDetailImage} setShowSnackbar={setShowSnackbar}
            dark={dark} setDark={setDark}
            handleMainScrolling={handleScroll}/>
          <Profile xRef={(e) => handleRef(2, e)} 
            data={profileItem} 
            signIn={signIn} 
            user={user} 
            setShowSnackbar={setShowSnackbar} 
            handleSignOut={handleSignOut} />
          <Footer xRef={(e) => handleRef(3, e)} />
        </section>
        <ModalImage detailImage={detailImage} setDetailImage={setDetailImage} />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Snackbar showSnackbar={showSnackbar} setShowSnackbar={setShowSnackbar} />
      </div>
    </div>
  )
}

export default App;
