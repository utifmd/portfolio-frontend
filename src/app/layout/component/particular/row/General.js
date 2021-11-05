import { BtnNext } from '../button'
const App = ({ data, setDetailImage }) => { return (
    <div className="py-6">
        <div className="h-px bg-gray-200" />
        <div className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-black"/></div>
            <div className="bg-green-600 cursor-pointer" onClick={() => setDetailImage({src: data?.file})}>
                <img className="object-cover h-48 w-full rounded-md shadow-md" src={data?.file} alt="general row" />
            </div>
            <p className="font-base">{data?.body}</p>
        </div>
        <BtnNext />
    </div> )}
export default App