const App = ({data, dark, setDetailImage, setDemoView}) => {

  let attachmentKeys = data?.kind === 'android' || data?.kind === 'ios'
    ? ['Released apps', 'Download']
    : ['Link address', 'Visit'],
  
  handleScreenshot = () => setDetailImage({ 
    src: data?.fileUrl[0], 
    queue: data?.fileUrl, 
    pos: 0 
  }),

  handleDemo = () => setDemoView({
    demoUrl: data?.demoUrl //'https://avatars.githubusercontent.com/u/16291551?s=400&u=c0b02c25fef325be78f7a1faca541f44120fb591&v=4'
  })

return (
    <div className="appearance-none bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 overflow-hidden sm:rounded-lg text-left">{/* <img className="object-cover h-48 w-full" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="cover" /> */}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Application Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">{data?.description}</p>
      </div>
      <div className="border-t dark:border-gray-600 border-gray-300">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Name</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">{data?.title}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t dark:border-gray-600 border-gray-300">
            <dt className="text-sm font-medium text-gray-500">Platform</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2 uppercase">{data?.kind}</dd>
          </div>
          <div className="w-full h-auto px-4 py-4 flex flex-wrap border-t dark:border-gray-600 border-gray-300"> 
          { data?.stack?.map((v, i) => 
            <span key={i} className="py-1 px-4 mr-4 mt-2 text-xs rounded-full text-gray-600 bg-gray-300 dark:text-gray-300 dark:bg-green-600">#{v}</span>
          )} 
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t dark:border-gray-600 border-gray-300">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
              <ul role="listitem" className="border border-gray-300 dark:border-gray-600 rounded-md divide-y divide-gray-300 dark:divide-gray-600">
              { data?.fileUrl?.length ?
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div key="key1" className="w-0 flex-1 flex items-center">
                    <box-icon color={dark? '#F3F4F6': '#111827'} name="image"/>
                    <span className="ml-2 flex-1 w-0 truncate">Screenshot</span>
                  </div>
                  <div key="key2" className="ml-4 flex-shrink-0">
                    <div onClick={handleScreenshot} className="font-medium text-green-600 hover:text-green-500 cursor-pointer">View</div>
                  </div>
                </li> : null }
              { data?.demoUrl?.length ?
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div key="key1" className="w-0 flex-1 flex items-center">
                    <box-icon color={dark? '#F3F4F6': '#111827'} name="video"/>
                    <span className="ml-2 flex-1 w-0 truncate">Demonstration</span>
                  </div>
                  <div key="key2" className="ml-4 flex-shrink-0">
                    <div onClick={handleDemo} className="font-medium text-green-600 hover:text-green-500 cursor-pointer">View</div>
                  </div>
                </li> : null }
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <box-icon color={dark? '#F3F4F6': '#111827'} name="link-external"/>
                    <span className="ml-2 flex-1 w-0 truncate">{ attachmentKeys[0] }</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href={data?.source} rel="noreferrer" target="_blank" className="font-medium text-green-600 hover:text-green-500">{ attachmentKeys[1] }</a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}


export default App