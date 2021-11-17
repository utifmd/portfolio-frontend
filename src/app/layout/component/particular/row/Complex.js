import Info from '../detail/Info'
import { BtnNext } from '../button'
const App = ({ data, setDetailImage,  xRef}) =>
    <div ref={xRef} className="py-6">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-gray-900 dark:bg-gray-100" /></div>
            <div className="flex flex-wrap justify-center">
                <img src={data?.icon} alt="cretive" className="object-cover shadow-lg rounded-full w-48 h-48 align-middle border-none" />
            </div> {/* <box-icon key={i} className="rounded-full inline-block w-10 h-10 pb-1" name={v} type="logo"/> */}
            <Info data={data} setDetailImage={setDetailImage} />
        </div>
        <BtnNext />
    </div>
export default App