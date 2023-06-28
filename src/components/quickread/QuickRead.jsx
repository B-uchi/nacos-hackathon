import React, { useEffect, useState } from 'react'

import './QuickRead.css'
import HeroArticle from '../hero/articlecomponent/HeroArticle'
import pic1 from '../../assets/quick/quick1.jpg'
import pic2 from '../../assets/quick/quick2.jpg'
import pic3 from '../../assets/quick/quick3.jpg'

const QuickRead = () => {
  const [matches, setMatches] = useState(window.matchMedia("(max-width: 820px)").matches)
    
  useEffect(() => {window.matchMedia("(max-width: 820px)").addEventListener('change', e => setMatches( e.matches ));}, []);
  return (
    <section id='quickread'>
        <h2 id='section-title'>Quick Read</h2>
        <div className="quick-container">
            <HeroArticle tag={'SPACE'} title={"Apple's Vision Pro"} duration={'6 min read'} date={'11th June 2023'} pic={pic1} id={matches && true}/>
            <HeroArticle tag={'SPACE'} title={'Dinner locations in LA'} duration={'3 min read'} date={'14th June 2023'} pic={pic2} id={matches && true}/>
            <HeroArticle tag={'SPACE'} title={'Side effects of vape'} duration={'8 min read'} date={'19th June 2023'} pic={pic3} id={matches && true}/>
        </div>
    </section>
  )
}

export default QuickRead