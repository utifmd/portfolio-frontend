
const App = ({ items, dark }) => 
    <div className="grid grid-cols-2 mx-0">
    { items.length && items.map((item, index) => 
        <div key={index} className="flex flex-col py-6 items-center justify-center text-center">
        { item.type 
            ? <box-icon color={dark? '#F3F4F6': '#111827'} size="3.5em" type={item.type} name={item?.icon}/>
            : <box-icon color={dark? '#F3F4F6': '#111827'} size="3.5em" name={item?.icon}/> }
            <p className={`text-base truncate text-gray-900 dark:text-gray-100 uppercase font-bold tracking-widest mt-3.5`}>{item?.label}</p> 
        </div>
    )}
    </div>

export default App