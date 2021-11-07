import Info from '../detail/Info'
import { BtnNext } from '../button'
const App = ({ data, setDetailImage }) =>
    <div className="py-6">
        <div className="h-px bg-gray-200" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-black" /></div>
            <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <img src={data?.icon} alt="cretive" className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                </div>
            </div> {/* <box-icon key={i} className="rounded-full inline-block w-10 h-10 pb-1" name={v} type="logo"/> */}
            <Info data={data} setDetailImage={setDetailImage} />
        </div>
        <BtnNext />
    </div>
export default App