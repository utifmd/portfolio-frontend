export const BtnPrimary = ({ label, onClick }) => 
    <div className="flex justify-center">
        <button className="py-4 px-20 uppercase bg-green-600 font-bold text-white" onClick={onClick}>{label}</button>
    </div>

export const BtnNext = ({ onClick }) => 
    <div className="flex justify-center">
        <div onClick={onClick}>
            <div className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current text-green-600" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
        </div>
    </div>

export const BtnCollapse = ({ className, onClick }) => 
    <div className={className}>
        <div onClick={onClick}>
            <div className="rounded-full m-6 h-16 w-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer">
                <box-icon name='collapse'></box-icon>
            </div>
        </div>
    </div>