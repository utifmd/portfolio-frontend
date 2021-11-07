import { BtnCollapse, BtnRight, BtnLeft } from '../button'
import { placeholderPic } from '../../../../assets/index'

const App = ({ detailImage, setDetailImage }) => {
  let min = 0, max = detailImage?.queue?.length -1 || 0

  const onChangeQueue = (pos) => {
    setDetailImage({
      src: detailImage.queue[pos],
      queue: detailImage.queue, 
      pos: pos
    })
  }

  const handleQueue = (increase) => increase 
    ? onChangeQueue(detailImage.pos < max ? detailImage.pos+1 : max)
    : onChangeQueue(detailImage.pos > min ? detailImage.pos-1 : min)

return detailImage ? ( <>
  <div className="fixed flex z-50 inset-0">
    <BtnCollapse onClick={() => setDetailImage(null)}/>
  { detailImage.queue? detailImage.queue.length?
    <div className="flex justify-end w-full">
      <BtnLeft onClick={() => handleQueue(false)}/>
      <BtnRight onClick={() => handleQueue(true)}/>
    </div>
  : null : null }
  </div>
  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-40 outline-none focus:outline-none">
    <div className="relative w-screen h-screen my-6 mx-auto max-w-6xl">
      <img className="object-contain h-full w-full" src={detailImage.src ? detailImage.src : placeholderPic} alt="detail cover" />
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-30 bg-black"></div></>
) : null }

export default App