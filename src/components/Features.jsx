import React from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow, TiLocationArrowOutline } from 'react-icons/ti'

const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className="container mx-auto px-10 md:px-6">

        <div className="px-5 pt-32 pb-4">
<p className='font-circular-web text-lg text-blue-50'>Into The Metgame Layer</p>
        <p className='max-w-md text-blue-50 text-lg opacity-50 font-circular-web  py-4'>Immerse yourself in an IP-rich product universe where AI-driven gamification and hyper-personalization lead humans & AI into a global play economy.
</p>
      </div>

      

<div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[60vh] ">

<BentoCard src='videos/feature-1.mp4' title={<>radia<b>n</b>t</>} description='
The game of games transforming your in-game actions across Web2 & Web3 titles into a rewarding adventure.
' isComignSoon/>
</div>

<div className=" grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 
" >

    <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
        <BentoCard src='videos/feature-2.mp4' title={<>zig<b>m</b>a</>}
        description='
The NFT collection merging Zentry’s IP, AI, and gaming—pushing the boundaries of NFT innovation.
'/>


    </div>
    <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0 ">
    <BentoCard src='videos/feature-3.mp4' title={<>n<b>e</b>xus</>} description='
The player portal uniting humans & AI to play, compete, earn and showcase—gamifying social & Web3 experiences.

'/>
    </div>
    <div className="bento-tilt_1  me-14 md:col-span-1 md:me-0">
    <BentoCard src='videos/feature-4.mp4' title={<>az<b>u</b>l</>} description='
The agent of agents elevating agentic AI experience to be more fun and productive.

'/>
    </div>
    <div className="bento-tilt_2">
      <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
        <h1 className='bento-title special-font'>M<b>o</b>re co<b>m</b>ing s<b>o</b>on</h1>

        <TiLocationArrow className='scale-[5] self-end m-4'/>

      </div>
    </div>
    <div className="bento-tilt_2">
<video src="videos/feature-5.mp4" loop muted autoPlay className='size-full object-cover object-center '></video>
    </div>

<div className="">
  
</div>

</div>


</div>
    </section>
  )
}

export default Features
