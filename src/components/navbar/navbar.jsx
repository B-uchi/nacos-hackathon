import React from 'react'
import './navbar.css'
import {FaSearch} from 'react-icons/fa'
import {MdOutlineLightMode} from 'react-icons/md'

const Navbar = () => {
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
            <MdOutlineLightMode size={'25px'} id='nav-icons'/>
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