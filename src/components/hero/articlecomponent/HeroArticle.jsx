import React from 'react'


const HeroArticle = ( props ) => {
    const {tag, title, duration, date, pic, id, hero} = props
    const p = id == true? "100%": "50%"
  return (
    <div className='heroarticle-main' style={{backgroundImage: `url(${pic})`, width: p, cursor: 'pointer'}}>
        {hero? <div className="category"><p>{tag}</p></div> : ''}

        
        <div className="overlay-bottom">
            <h2>{title}</h2>
            <div className="hero-article-bottom">
                <p>{date}</p>
                <p>{duration}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroArticle