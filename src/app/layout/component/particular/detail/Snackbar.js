const App = ({ showSnackbar, setShowSnackbar }) => showSnackbar
    ?  <div className="fixed top-0 p-6 m-6 animate-fade-in-up"> 
            <div className="p-2 bg-green-800 items-center text-green-100 leading-none rounded-full flex inline-flex" role="alert">
                <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">{showSnackbar.title ? showSnackbar.title : 'alert'}</span>
                <span className="font-semibold mr-2 text-left flex-auto">{showSnackbar.body ? showSnackbar.body : 'Get the coolest t-shirts from our brand new store'}</span>
                <button className="focus:outline-none" onClick={() => setShowSnackbar(null)}>
                    <svg className="w-6 h-6 fill-current mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fillRule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>
                </button>
            </div>
        </div>
    : null

export default App