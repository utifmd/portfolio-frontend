// import RowGreeting from './particular/row/Greeting'
import RowGeneral from './particular/row/General'
// import RowSimple from './particular/row/Simple'
import FormScholars from './form/row/scholars'
import { BtnPrimary } from './particular/button'

const App = ({ introItem, setDetailImage }) => { return (
    <div className="bg-gray-100 py-11 space-y-4">
        <BtnPrimary label="Begin" />
        {/* <RowSimple data={introItem} />
        <RowGreeting data={neckItems} />
        <RowComplex data={introItem} /> */}
        <RowGeneral data={introItem} setDetailImage={setDetailImage} />
        <FormScholars />
    {/* <figure className="md:flex bg-gray-100 rounded-xl p-8 m-8 md:p-0">
            <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={logo} alt={logo} width="384" height="512" />
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                    <p className="text-lg font-semibold">
                        “Tailwind CSS is the only framework that I've seen scale
                        on large teams. It’s easy to customize, adapts to any design,
                        and the build size is tiny.”
                    </p>
                </blockquote>
                <figcaption className="font-medium">
                    <div className="text-cyan-600">
                        Sarah Dayan
                    </div>
                    <div className="text-gray-500">
                        Staff Engineer, Algolia
                    </div>
                </figcaption>
            </div>
        </figure>
        <div className="p-6 m-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src={logo} alt="ChitChat Logo" />
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-gray-500">You have a new message!</p>
            </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-4">
            <div>1</div>
            <div className="col-start-3">2</div>
            <div>3</div>
            <div>4</div>
            <div className="row-start-1 col-start-2 col-span-2">5</div>
        </div> 
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                <img className="h-48 w-full object-cover md:w-48" src={logo} alt="Man looking at item at a store" />
                </div>
                <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
                <span className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</span>
                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                </div>
            </div>
        </div> */}
    </div>
)}

export default App