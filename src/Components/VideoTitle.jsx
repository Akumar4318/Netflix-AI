/* eslint-disable react/prop-types */
import { IoMdInformationCircleOutline } from "react-icons/io";

import { FaPlay } from "react-icons/fa";
const VideoTitle = ({title,overview}) => {

  return (
    <div className="pt-[10%] z-10 px-[9%] w-[90%]  mt-[5%]  flex flex-col gap-y-3 absolute text-white bg-gradient-to-r from-black/20 aspect-video" >
                <h1 className="font-TitleFont text-[3xl] md:text-6xl pt-[18%]">{title}</h1>
                <p className="font-SegoeUI w-1/4 hidden md:block">{overview.length>120 ? (overview.slice(0,120)+'...'):(overview)}</p>
                <div className='flex gap-x-3 font-semibold text-[1.3rem] h-[3rem] gap-y-4'>
                    <button className="flex items-center justify-center  bg-gray-300/80 gap-x-2 bg-opacity-80 md:px-12 rounded-md hover:bg-slate-300 hover:bg-opacity-70 text-black"><FaPlay/>Play</button>
                    <button className="flex items-center   justify-center text-white bg-gray-500 bg-opacity-50 gap-x-2 md:px-10 rounded-md hover:bg-opacity-80"> <IoMdInformationCircleOutline/> More Info</button>
                </div>
    </div>
  )
}


export default VideoTitle