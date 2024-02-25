import { useRef } from 'react'
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Short from "./short";


function Shorts() {
  const scrollParentRef = useRef(null);

  const shortsData = [
    {
      id: 1,
      videoUrl: 'https://ik.imagekit.io/42vct06fb/shorts/Jana%20Gana%20Mana%20-%20Marble%20Music_RX5Xwn-PK.mp4',
      content1: "@ifzanature",
      content2: "Flag has three colors #Nation"

    },
    {
      id: 2,
      videoUrl: 'https://ik.imagekit.io/gbmopsb4m/shorts/Dahlia%20flower%20blooming,%20Time%20Lapse%20shorts.mp4',
      content1: "@sparkstelugu",
      content2: "sparks are very beautiful #sparks"
    },
    {
      id: 3,
      videoUrl: 'https://ik.imagekit.io/gbmopsb4m/shorts/beautiful%20flowers%20whatsapp%20status%20_variety%20whatsapp%20status_nature%20status%20_shorts%20reels%20_flowers.mp4',
      content1: "@floralbeauty",
      content2: "florals are very beautiful #florals"
    },
    {
      id: 4,
      videoUrl: 'https://ik.imagekit.io/gbmopsb4m/shorts/Beautiful%20Rose%20Flower%20_%20Fresh%20Morning%20WhatsApp%20Status%20VideoYtshortsvideoshorts.mp4?updatedAt=1708842752334',
      content1: "@classeshindi",
      content2: "classes gives knowledge #classes"
    }
  ];


  const scrollToTop = () => {
    // console.log(scrollParentRef.current.scrollTop);
    // console.log(scrollParentRef.current.scrollTop - 200);
    // console.log(scrollParentRef.current.clientHeight)

    scrollParentRef.current.scrollTo({
      top: scrollParentRef.current.scrollTop - scrollParentRef.current.clientHeight,
      behavior: 'smooth'
    })
  }

  const scrollToBottom = () => {
    scrollParentRef.current.scrollTo({
      top: scrollParentRef.current.scrollTop + scrollParentRef.current.clientHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className='h-screen flex justify-center'>



      <div className="h-screen overflow-auto max-w-[400px] snap-y  snap-mandatory no-scrollbar" ref={scrollParentRef}>
        {/* Rendering Shorts */}
        {shortsData.map(shortData => {
          return (
            <Short key={shortData.id} shortData={shortData} scrollToTop={scrollToTop} scrollToBottom={scrollToBottom} />
          )
        })}
      </div>

      <div className="h-full py-10 hidden sm:flex flex-col justify-between scrollbar">
        <button className="bg-slate-200 rounded-full p-4 disabled:opacity-50" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
        <button className="bg-slate-200 rounded-full p-4" onClick={scrollToBottom}>
          <FaArrowDown />
        </button>
      </div>



    </div>
  )
}

export default Shorts