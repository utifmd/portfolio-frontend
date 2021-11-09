import { BtnNext } from '../button'
const App = ({ data, onClickNext, xRef }) =>
    <div ref={xRef} className="py-6">
        <div className="h-px bg-gray-200" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-black"/></div>
            <p className="font-base">{data?.description}</p>
        </div>
        <BtnNext onClick={onClickNext} />
    </div>
export default App