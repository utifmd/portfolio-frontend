import { BtnCollapse } from '../button'
import { placeholderPic } from '../../../../assets/index'

const App = ({ demoView, setDemoView }) => {
    return demoView ? (
    <div className="flex fixed mx-auto top-0 right-0 left-0 bottom-0 backdrop-filter backdrop-blur-lg animate-fade-in-up"> 
      <div className="flex mx-auto items-center justify-center h-auto w-full md:h-full md:w-auto">
        <iframe 
          // className="object-contain h-auto w-full md:h-full md:w-auto"
          width="560" 
          height="315" 
          src={demoView?.demoUrl} 
          title="Demo" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen />

        {/* <img className="object-contain h-auto w-full md:h-full md:w-auto" 
          src={demoView.demoUrl ? demoView.demoUrl : placeholderPic} alt="demo cover" /> */}
      </div>
      <div className="absolute right-0 top-0">
        <BtnCollapse onClick={() => setDemoView(null)}/>
      </div>
    </div>) : null 
}

export default App