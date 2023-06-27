import React from 'react'
import {BsDiamondFill} from 'react-icons/bs'

const OlderArticle = (props) => {
    const {pic} = props
  return (
    <div className="older-post">
        <div className="older-left">
            <img src={pic} alt="" />
        </div>
        <div className="older-right">
            <div className="older-top">
                <small>27th June 2023</small>
                <BsDiamondFill size={'8px'} id='t'/>
                <small>A minute read</small>
            </div>
            <h2>Sample Article</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nihil velit ipsa. Maxime perspiciatis, tenetur nesciunt consequatur eveniet eaque labore iste autem aperiam voluptate. Voluptas ut harum debitis.</p>
        </div>
    </div>
  )
}

export default OlderArticle