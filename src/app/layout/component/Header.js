const App = ({animate, onClick, xRef}) => 
    <header ref={xRef} className={`text-center py-44 px-12 xl:py-52 ${animate}`}>
        <p className="xl:text-5xl md:text-5xl text-4xl uppercase font-bold tracking-widest text-gray-900 dark:text-gray-100">Portfolio</p>
        <div className="flex justify-center">
            <div className="h-0.5 w-24 bg-gray-900 dark:bg-gray-100 my-7"></div>
        </div>
        <p className="text-base cursor-pointer uppercase tracking-widest px-6 text-gray-900 dark:text-gray-100 active:none" onClick={onClick}>A Little single page by Utif Milkedori</p>
    </header>

export default App