import React, { useState } from 'react'

const Hero = () => {

  const [mainVideo,setMainVideo]= useState(1)
  const [smallVideo,setSmallVideo]= useState(2)
  const [hover,setHover] = useState(false)

const onClickSmallVideo =()=>{
setMainVideo((prev)=> prev >3 ? 1:prev+1)
setSmallVideo((prev)=> prev >3 ? 1:prev+1)

}
const handleHover =()=>{
  setHover(true);
}


const getVideoSrc = (index) =>(`videos/hero-${index}.mp4 `)

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden '>
      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75  " id='video-frame'>
        <video src={getVideoSrc(smallVideo)}  width={200} height={200} className={`absolute top-[45%] right-[44%] z-20 rounded-xl cursor-pointer ${hover ?'opacity-1':'opacity-0'} `} onClick={onClickSmallVideo} onMouseEnter={()=>setHover(true)}  onMouseLeave={()=>setHover(false)}></video>
<video src={getVideoSrc(mainVideo)} autoPlay muted  loop  type='video/mp4' className=' w-screen'  > </video>
      </div>
    </div>
  )
}

export default Hero
