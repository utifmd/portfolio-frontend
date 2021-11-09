const App = ({data, setDetailImage}) => {

  let attachmentKeys = data?.kind === 'android' || data?.kind === 'ios'
    ? ['Released apk', 'Download']
    : ['Link address', 'Visit'],
  
  handleScreenshot = () => setDetailImage({ 
    src: data?.screenshot[0], 
    queue: data?.screenshot, 
    pos: 0 
  })

return (
    <div className="appearance-none bg-gray-200 text-gray-700 overflow-hidden sm:rounded-lg text-left">{/* <img className="object-cover h-48 w-full" src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-3-800x800.jpg" alt="cover" /> */}
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Application Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{data?.description}</p>
      </div>
      <div className="border-t border-gray-300">
        <dl>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.title}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-300">
            <dt className="text-sm font-medium text-gray-500">Kind</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{data?.kind}</dd>
          </div>
          <div className="w-full h-auto px-4 py-4 flex flex-wrap border-t border-gray-300"> 
          { data?.stack?.map((v, i) => 
            <span key={i} className="py-1 px-4 mr-4 mt-2 text-xs rounded-full text-gray-600 bg-gray-300">#{v}</span>
          )} 
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-300">
            <dt className="text-sm font-medium text-gray-500">Attachments</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ul role="listitem" className="border border-gray-300 rounded-md divide-y divide-gray-300">
              { data?.screenshot?.length ?
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <box-icon className="flex-shrink-0 h-5 w-5 text-gray-300" name="image"/>
                    <span className="ml-2 flex-1 w-0 truncate">Screenshot</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div onClick={handleScreenshot} className="font-medium text-green-600 hover:text-green-500 cursor-pointer">View</div>
                  </div>
                </li> : null }
                <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                  <div className="w-0 flex-1 flex items-center">
                    <box-icon className="flex-shrink-0 h-5 w-5 text-gray-300" name="link-external"/>
                    <span className="ml-2 flex-1 w-0 truncate">{ attachmentKeys[0] }</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div onClick={() => {}} className="font-medium text-green-600 hover:text-green-500 cursor-pointer">{ attachmentKeys[1] }</div>
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