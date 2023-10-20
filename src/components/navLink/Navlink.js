import React, { useState } from 'react'
import "./Navlink.css"

export default function Navlink({linkName}) {

  const [isHovered, setIsHovered] = useState(false)

  function mouseOn(){
    setIsHovered(true)
  }

  function mouseOut(){
    setIsHovered(false)
  }


  return (
    <div className='hoverLink' onMouseEnter={mouseOn} onMouseLeave={mouseOut}>
      <p className='navbarLink'>{linkName}</p>

      {isHovered ? <div className='sublinks'> </div>: <></>
}
    </div>
  )

 
}
