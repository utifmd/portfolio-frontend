
const App = ({ items }) => 
    <div className="grid grid-cols-2 gap-px mx-6">
    { items.length && items.map((item, index) => 
        <div key={index} className="flex flex-col p-6 items-center justify-center text-center">
        { item.type ? <div><box-icon color="#059669" size="3.5em" type={item.type} name={item?.icon}/></div>
            : <box-icon color="#059669" size="3.5em" name={item?.icon}/> }
            <p className="text-base text-green-600 uppercase font-bold tracking-widest mt-3.5">{item?.label}</p>
        </div>
    )}
    </div>

export default App