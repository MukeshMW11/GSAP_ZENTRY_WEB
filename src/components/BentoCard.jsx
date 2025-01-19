import React from 'react'

const BentoCard = ({src,title,description}) => {
  return (
    <div className='relative size-full'>
   <video src={src} autoPlay loop muted className='absolute left-0 top-0 size-full object-cover object-center '/>
   <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">

<div className="">
    <h1 className='bento-title special-font'>{title}</h1>
{description && (
    <p className='mt-3 max-w-64 text-xs'>{description}</p>
)}
</div>

   </div>
    </div>
  )
}

export default BentoCard
