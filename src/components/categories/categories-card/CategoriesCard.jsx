import React from 'react'

const CategoriesCard = (props) => {
    const {pic} = props
  return (
    <div className='categories-card' >
        <div className="category-overlay">{pic[1]}</div>
        <div className="category-child" style={{backgroundImage: `url(${pic[0]})`, cursor: 'pointer'}}></div>
    </div>
  )
}

export default CategoriesCard