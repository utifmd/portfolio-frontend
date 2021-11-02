import Header from './layout/component/Header'
import Body from './layout/component/Body'
import Footer from './layout/component/Footer'
import Modal from './layout/component/Modal'
import ModalImage from './layout/component/particular/detail/Picture'
import { useState } from 'react'

function App({ introItem, neckItems }) {
  const [ showModal, setShowModal ] = useState(false)
  const [ detailImage, setDetailImage ] = useState(null)
  return ( /*container mx-auto px-4 md:container md:mx-auto*/
    <div className="container max-w-xl mx-auto">
      <Header />
      <Body introItem={introItem} neckItems={neckItems} setDetailImage={setDetailImage} />
      <Footer />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <ModalImage detailImage={detailImage} setDetailImage={setDetailImage} />
    </div>
  );
}

export default App;
