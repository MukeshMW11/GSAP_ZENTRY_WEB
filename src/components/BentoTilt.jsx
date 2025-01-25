import React, { useRef, useState } from 'react'

const BentoTilt = ({children,className=''}) => {
  const [transformStyle,setTransformStyle] = useState('')
  const itemRef = useRef()




  const HandleMouseMove=(e)=>{
    if(!itemRef.current) return;

    const {left,top,width,height} = 
    itemRef.current.getBoundingClientRect();
    

const relativeX = (e.clientX -left)/width;
const relativeY = (e.clientY -top)/height;

const tiltX = (relativeY-0.5) * 20;
const tiltY = (relativeX-0.5) * 20;
const newTransfrom = `perspective(700px)  rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)`
// console.log(relativeX,relativeY)

    setTransformStyle(newTransfrom)
  }

  const HandleMouseLeave=(e)=>{
setTransformStyle('')
  }

  return (


    <div className={`${className} `} ref={itemRef} onMouseMove={HandleMouseMove} onMouseLeave={HandleMouseLeave} style={{transform:transformStyle}}>
      {children}
    </div>
  )
}

export default BentoTilt
