import GridCube from '../grid/ColCube'
import { BtnNext } from '../button'
const App = ({ data, xRef }) =>
    <div ref={xRef} className="py-6">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <div className="p-6 text-center space-y-6 py-28">
            <p className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-gray-900 dark:bg-gray-100"/></div>
            <p className="font-base text-gray-900 dark:text-gray-100">{data?.description}</p>
            <div className="h-6" />
            <GridCube items={data?.gridItems} />
        </div>
        <BtnNext />
    </div>
export default App