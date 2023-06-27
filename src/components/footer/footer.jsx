import React from 'react'
import './footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsFacebook, BsLinkedin, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="footer-left">
            <div className="footer-top">
                <h2>TheScoop</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam saepe veritatis dolorem ut! Voluptate, aperiam?</p>
                <div className="socials">
                    <AiOutlineInstagram size={'30px'}/>
                    <BsFacebook size={'30px'}/>
                    <BsLinkedin size={'30px'}/>
                    <BsYoutube size={'30px'}/>
                </div>
            </div>
            <small>&copy; 2023 TheScoop.</small>
        </div>
        <div className="footer-right">
            <div className="side">
                <h3>Links</h3>
                <ul>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Review</li>
                    <li>News</li>
                    <li>Membership</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="side">
                <h3>Categories</h3>
                    <ul>
                        <li>Fitness</li>
                        <li>Food</li>
                        <li>Health</li>
                        <li>Nature</li>
                        <li>Tech</li>
                        <li>Travel</li>
                    </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer