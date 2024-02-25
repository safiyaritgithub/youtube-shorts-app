import { useRef, useState, useEffect } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { MdOutlineComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { VscUnmute } from "react-icons/vsc";
import { IoVolumeMute } from "react-icons/io5";
// import { FaArrowUp } from "react-icons/fa";
// import { FaArrowDown } from "react-icons/fa";


function Short({ shortData }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [likeCount, setLikeCount] = useState(0)
  const [unlikeCount, setUnlikeCount] = useState(0)

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };



  const handleUnlikeClick = () => {
    setUnlikeCount(unlikeCount + 1);
  };

  return (
    <div className="h-screen flex snap-start sm:py-10">
      {/* Video and video overlay contents parent  */}
      <div className="h-full flex-grow flex  relative sm:static">
        {/* Content & video */}
        <div className="h-full flex-grow sm:relative">
          {/* Video */}
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{ zIndex: "-1" }}
          >
            <video
              src={shortData.videoUrl}
              ref={videoRef}
              className="h-full w-full object-cover sm:rounded-lg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              muted={muted}
            /> 
          </div>
          {/* Video overlay content */}
          <div className="h-full flex flex-col justify-end sm:flex sm:flex-col sm:justify-between">
            <div className="hidden sm:flex justify-between p-4 ">
              <button
                className="bg-black px-4 py-2 text-white rounded"
                onClick={togglePlay}
              >
                {isPlaying ? <CiPause1 className="text-xl" /> : <IoPlayOutline className="text-xl" />}
              </button>

              <button className="bg-black px-4 py-2 text-white rounded" onClick={toggleMute}>
                {muted ? <IoVolumeMute className="text-xl" /> : <VscUnmute className="text-xl" />}
              </button>
            </div>

            <div className="py-4 px-6 text-lg font-semibold text-white">
              <div className="flex gap-2">
                {shortData.content1}
                <button className="border-2 border-white rounded-3xl bg-white text-black text-sm px-4">Subscribe</button>
              </div>

              <div className="text-md mt-2">
                {shortData.content2}
              </div>
            </div>

          </div>
        </div>
        {/* Vertical Buttons */}
        <div className="h-full flex items-center  sm:flex sm:items-end">
          <div className="flex flex-col gap-2 text-black px-3 sm:px-4 mb-5">

            <div className="flex flex-col justify-center items-center">
              <button className="text-2xl bg-slate-200 rounded-full p-2"
                onClick={handleLikeClick}

              > <BiLike /> </button>
              <p className="text-white text-sm sm:text-black">{likeCount}</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="text-2xl bg-slate-200 rounded-full p-2" onClick={handleUnlikeClick} > <BiDislike /> </button>
              <p className="text-white text-sm sm:text-black">{unlikeCount}</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="text-2xl bg-slate-200 rounded-full p-2"> <MdOutlineComment /> </button>
              <p className="text-white text-sm sm:text-black">50</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="text-2xl bg-slate-200 rounded-full p-2"> <IoIosShareAlt /> </button>
              <p className="text-white text-sm sm:text-black">Share</p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <button className="text-2xl bg-slate-200 rounded-full p-2"> <IoMdMore /> </button>
              <p className="text-white text-sm sm:text-black">More</p>
            </div>



          </div>

        </div>

        <div
          className="absolute top-[50%] left-[50%] sm:hidden"
          style={{ transform: "translate(-50%, -50%)" }}
          onClick={togglePlay}

        >
          <button className=" rounded-full bg-black text-white  p-5">
            {isPlaying ? <CiPause1 /> : <IoPlayOutline />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Short;
