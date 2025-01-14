import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

  const [currentIndex,setCurrentIndex]= useState(1)
  const [loadedVideos,setLoadedVideos]= useState(0)
  const [hasClicked,setHasClicked]= useState(false)
  const [isLoading,setLoading] = useState(true)

  const totalVideos =4;


  const nextVideoRef=useRef(null)



const handleVideoLoad =()=>{
  setLoadedVideos(prev=>prev+1)
}



// 1 % 4 = 1 +1 = 2
// 2 % 4 = 2 +1 = 3
// 3 % 4 = 3 +1 = 4
// 4 % 4 = 0 +1 = 1
const upcomingVideoIndex = (currentIndex % totalVideos) +1;

const handleMiniVideoClick =()=>{
 setHasClicked(true)
 setCurrentIndex(upcomingVideoIndex)
}



useEffect(()=>{
if(loadedVideos === totalVideos -1 ){
  setLoading(false);
}
},[loadedVideos])

useGSAP(()=>{
if(hasClicked){
  
 gsap.set('#next-video',{visibility:'visible'})



 gsap.to('#next-video',{
  transformOrigin:'center center',
  sacle:1,
  width:'100%',
  height:'100%',
  ease:'power1.inOut',
  duration:1,
  onStart:()=>nextVideoRef.current.play(),
 })


 gsap.to('#currnet-video',{
  transformOrigin:'center center',
  scale:0,
  duration:1.5,
  ease:'power1.inOut'

 })


}
},{dependencies:[currentIndex],revertOnUpdate:true})



useGSAP(()=>{
gsap.set('#video-frame',{
  clipPath: 'polygon(0 0, 0% 20%, 0 46%, 0% 80%, 0 100%, 50% 100%, 100% 100%, 100% 80%, 100% 49%, 100% 20%, 100% 0, 50% 0)'
})

gsap.to('#video-frame',{
clipPath:'polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)',
ease:'power1.inOut',
scrollTrigger:{
  trigger:'#video-frame',
  start:'top -10%',
  end:'top -10%',
  markers:true,
  scrub:1.5
}
})
},)







const getVideoSrc = (index) =>(`videos/hero-${index}.mp4 `)

  return (


    <div className='relative h-dvh w-screen overflow-x-hidden '>
      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75  " id='video-frame'>


      {isLoading && (
      <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
      <div className="three-body">
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      <div className="three-body__dot"></div>
      </div>
      </div>

  )}



     <div className="">


      <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer
       overflow-hidden rounded-xl ">
<div className=" origin-center scale-50 opacity-0 transition-all duration-400 ease-in hover:scale-100 hover:opacity-100" onClick={handleMiniVideoClick}>



 <video ref={nextVideoRef} src={getVideoSrc(upcomingVideoIndex )} loop muted id='current-video' className='origin-center size-64 object-cover object-center ' onLoadedData={handleVideoLoad} />

 
</div>
      </div>
     

<video ref={nextVideoRef} src={getVideoSrc(currentIndex)} loop  muted autoPlay id='next-video' className='absolute-center absolute z-20 size-64 object-cover object-center invisible' onLoadedData={handleVideoLoad} />



<video src={getVideoSrc(currentIndex === totalVideos - 1 ? 1: currentIndex)} autoPlay loop muted className='absolute top-0 left-0 size-full object-cover object-center' onLoadedData={handleVideoLoad} />

     </div>

<h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75 '>G<b>a</b>ming</h1>

<div className=" absolute left-0 top-0 z-40 size-full">
  <div className="">
    <h1 className='special-font hero-heading text-blue-100 '>redefi<b>n</b>e</h1>


    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the Metagame Layer <br/>Unleash the Play Economy</p>
    <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow/>} containerClass='!bg-yellow-300 flex-center gap-1'  />
  </div>
</div> 


      </div>


<h1 className='special-font hero-heading absolute bottom-5 right-5  text-green-300 '>G<b>a</b>ming</h1>


    </div>
  )
}

export default Hero
