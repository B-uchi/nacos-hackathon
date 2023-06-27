import React from 'react'
import './older.css'
import pic1 from '../../assets/older/older1.jpg'
import pic2 from '../../assets/older/older2.jpg'
import pic3 from '../../assets/older/older3.jpg'
import pic4 from '../../assets/older/older4.jpg'
import pic5 from '../../assets/older/older5.jpg'
import pic6 from '../../assets/older/older6.jpg'
import OlderArticle from './OlderArticle/OlderArticle'
import {BsChevronRight} from 'react-icons/bs'
const imgs = [pic1, pic2, pic3, pic4, pic5, pic6]


const OlderPosts = () => {
  return (
    <section id='older'>
        <h2 id='section-title'>Older Posts</h2>
        <div className="older-posts-container">
            {imgs.map((pic) => (
                <OlderArticle pic={pic} />
            ))}
            <div className="older-link">
                <a href="#">See All <BsChevronRight id='chevron'/></a>
            </div>
        </div>
    </section>
  )
}

export default OlderPosts