import React from 'react'
import './newsletter.css'
import { BsSendPlus } from 'react-icons/bs'

const Newsletter = () => {
  return (
    <section id='newsletter'>
        <h2 id='section-title'>Newsletter</h2>
        <div className="newsletter-main">
            <div className="newsletter-container">
                <h2>Subscribe to TheScoop</h2>
                <p>Wanna recieve exciting new content to your inbox every week? It's just a click away..</p>
                <div className="form">
                    <input type="email" placeholder='Enter mail...' id="" />
                    <button type="submit"><BsSendPlus size={'25px'}/> </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter