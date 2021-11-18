import Header from "./Header"

const App = () => 
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container max-w-xl mx-auto">
            <Header animate="animate-pulse" />
            <div className="py-11 space-y-4  bg-gradient-to-tl from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse">
                <div className="flex justify-center">
                    <div className="py-3 h-12 px-24 bg-gray-200 dark:bg-gray-800"></div>
                </div>
            </div>
        </div>
    </div>

export default App