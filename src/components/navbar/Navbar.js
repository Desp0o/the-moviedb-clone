import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import mainLogo from "../../utils/images/mainLogo.webp"
import findIcon from "../../utils/images/findIcon.webp"
import userIcon from "../../utils/images/userIcon.webp"
import logoResp from "../../utils/images/logoResponsive.webp"
import menuBars from "../../utils/images/menuBars.webp"
import NavLinks from './navLinks'
import ResponsivePannel from './responsivePannel'

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [activePannel, setActivePannel] = useState('responsivePannelClosed')

    const pannelTrigger = ()=> {
        if(isOpen){
            setIsOpen(false)
            setActivePannel('responsivePannelClosed')
        }else{
            setIsOpen(true)
            setActivePannel('responsivePannel')
        }
    }

  return (
   <>
    <div className='navbar'>
        <div className='navbarInner'>
            
            <div className='navLeft'>
                <Link to='/'>
                    <img className='logo' src={window.innerWidth > 768 ? mainLogo : logoResp} alt='moviedb' />
                </Link>

                <div className='nav-links'>
                    <NavLinks linkName='Movies'/>
                    <NavLinks linkName='TV Shows'/>
                    <NavLinks linkName='People'/>
                </div>

                <img src={menuBars} className='menuTrigger' alt='menu trigger' onClick={pannelTrigger}/>
               
            </div>

            <div className='navRigth'>
                
                {
                    window.innerWidth > 768 
                        ? 
                        <Link to='/'>Login</Link> 
                        : 
                        <Link to='/'> <img src={userIcon} alt='user' className='userResIcon'/> </Link>      
                }

                <img src={findIcon} alt='find' className='finIcon'/>
            </div>

        </div>
    </div>

    <ResponsivePannel pannelClass={activePannel}/>
   </>
  )
}
