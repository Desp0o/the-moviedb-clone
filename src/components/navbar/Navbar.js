import React from 'react'
import "./navbar.css"
import Navlink from '../navLink/Navlink'
import { Link } from 'react-router-dom'
import mainLogo from "../../utils/images/mainLogo.webp"

export default function Navbar() {
  return (
   <>
    <div className='navbar'>
        <div className='navbarInner'>
            
            <div className='navLeft'>
                <Link to='/'>
                    <img className='logo' src={mainLogo} alt='moviedb' />
                </Link>

                <div className='nav-links'>
                    <Navlink linkName='Movies' />
                    <Navlink linkName='TvShows' />
                    <Navlink linkName='People' />
                    <Navlink linkName='More' />
                </div>
            </div>

            <div className='navRigth'>

            </div>

        </div>

    </div>
   </>
  )
}
