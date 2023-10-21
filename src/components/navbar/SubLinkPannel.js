import React from 'react'
import { Link } from 'react-router-dom'

export default function SubLinkPannel({link1, link2, link3, link4}) {
  return (
    <div className='subLinkPannel'>
      {link1 ? <Link to='/' className='subLinkItem'>{link1}</Link> : <></>}
      {link2 ? <Link to='/' className='subLinkItem'>{link2}</Link> : <></>}
      {link3 ? <Link to='/' className='subLinkItem'>{link3}</Link> : <></>}
      {link4 ? <Link to='/' className='subLinkItem'>{link4}</Link> : <></>}
    </div>
  )
}
