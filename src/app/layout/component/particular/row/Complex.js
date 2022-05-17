import Info from '../detail/Info'
import { BtnNext } from '../button'
import { useDispatch } from 'react-redux'
const App = ({ user, data, dark, setDetailImage, setDemoView, xRef, xKey, maxKey, onEditClick, deleteProject, handleScrolling }) => {
    const dispatch = useDispatch()
return(
    <div key={xKey} className="py-6">
        <div className="h-px bg-gray-200 dark:bg-gray-800" />
        <div ref={xRef} className="p-6 text-center space-y-7 py-28">
            <p className="font-bold xl:text-3xl md:text-3xl text-2xl uppercase text-gray-900 dark:text-gray-100">{data?.title}</p>
            <div className="flex justify-center"><div className=" h-0.5 w-24 bg-gray-900 dark:bg-gray-100" /></div>
            <div className="flex flex-wrap justify-center">
                <img src={data?.iconUrl} alt="cretive" className="object-cover shadow-lg rounded-full w-48 h-48 align-middle border-none" />
            </div> {/* <box-icon key={i} className="rounded-full inline-block w-10 h-10 pb-1" name={v} type="logo"/> */}
            <Info data={data} dark={dark} setDetailImage={setDetailImage} setDemoView={setDemoView}/>
        { user ? 
            <div className="flex justify-center space-x-4">
                <i onClick={() => dispatch(deleteProject(data._id))} className="p-3 cursor-pointer"><box-icon color="#059669" name='trash'></box-icon></i>
                <i onClick={onEditClick} className="p-3 cursor-pointer"><box-icon color="#059669" name='edit'></box-icon></i>
            </div> : null}
        </div>
        <BtnNext onClick={() => xKey >= maxKey
            ? handleScrolling(`RowGeneral0`)
            : handleScrolling(`RowComplex${xKey}`)} />
    </div>)}
export default App