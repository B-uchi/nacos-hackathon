import React, { useState } from 'react'
import './navbar.css'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineLightMode,MdDarkMode} from 'react-icons/md'

const Navbar = () => {
    const [dark, setDark] = useState(true)
    const toggletheme = () =>{
        const body = document.querySelector('body')
        body.classList.toggle('light')
        setDark((prev) => (!prev))
        console.log(dark)
        
    }
  return (
    <nav>
        <div className="nav-left">
            <h2>TheScoop</h2>
        </div>
        <div className="nav-middle">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Review</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        <div className="nav-right">
            <FaSearch size={'20px'} id='nav-icons'/>
            {dark==true? <MdOutlineLightMode size={'25px'} id='nav-icons' onClick={toggletheme}/> : <MdDarkMode size={'25px'} id='nav-icons' onClick={toggletheme}/>}
            <div className="sign-in nav-btn" >
                <button id='sign-in-btn'>Sign In</button>
            </div>
            <div className="sign-up nav-btn" >
                <button id='sign-up-btn'>Sign Up</button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar