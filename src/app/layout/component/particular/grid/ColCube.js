
const App = ({ items }) => 
    <div className="grid grid-cols-2 gap-px mx-6 bg-gray-200">
    { items.length && items.map((item, index) => 
        <div key={index} className="flex flex-col p-6 bg-gray-100 items-center justify-center text-center">
        { item.type ? <box-icon size="3.5em" type={item.type} name={item?.icon}/>
            : <box-icon size="3.5em" name={item?.icon}/> } {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 fill-current" viewBox="0 0 24 24"> <path d={item.icon}></path> </svg> */}
            <p className="text-base uppercase font-bold tracking-widest mt-3.5">{item?.label}</p>
        </div>
    )}
    </div>

export default App