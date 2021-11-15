import Header from "./Header"

const App = () => 
    <div className="container max-w-xl mx-auto">
        <Header animate="animate-pulse" />
        <div className="bg-gray-100 py-11 space-y-4 animate-pulse">
            <div className="flex justify-center">
                <div className="py-3 h-12 px-24 bg-gray-200"></div>
            </div>
        </div>
    </div>

export default App