import { BtnNext } from '../button'
const App = ({ user, data, setDetailImage, onEditClick, xRef, xKey, handleScrolling }) => { return (
    <div key={xKey} className="py-6">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <div ref={xRef} className="p-6 text-center space-y-7 py-28">
            <p className="font-bold text-3xl uppercase text-gray-900 dark:text-gray-100">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-gray-900 dark:bg-gray-100"/></div>
            <div className="cursor-pointer" onClick={() => setDetailImage({src: data?.file})}>
                <img className="object-cover h-48 w-full rounded-md shadow-md" src={data?.file} alt="general row" />
            </div>
            <p className="font-base text-gray-900 dark:text-gray-100">{data?.body}</p>
        { user ? 
            <div className="flex justify-center space-x-4">
                <i onClick={() => null} className="p-3 cursor-pointer"><box-icon color="#059669" name='trash'></box-icon></i>
                <i onClick={onEditClick} className="p-3 cursor-pointer"><box-icon color="#059669" name='edit'></box-icon></i>
            </div> : null}
        </div>
        <BtnNext onClick={() => (xKey+1) === data.length
            ? handleScrolling(`BtnPrimary`)
            : handleScrolling(`RowGeneral${xKey+1}`)} />
    </div> )}
export default App