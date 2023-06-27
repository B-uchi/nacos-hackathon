import React from 'react'
import './categories.css'
import pic1 from '../../assets/categories/categories1.jpg'
import pic2 from '../../assets/categories/categories2.jpg'
import pic3 from '../../assets/categories/categories3.jpg'
import pic4 from '../../assets/categories/categories4.jpg'
import pic5 from '../../assets/categories/categories5.jpg'
import pic6 from '../../assets/categories/categories6.jpg'
import CategoriesCard from './categories-card/CategoriesCard'
const imgs = [[pic1, 'Fitness'], [pic2, 'Food'], [pic3, 'Health'], [pic4, 'Nature'], [pic5, 'Tech'], [pic6, 'Travel']]

const Categories = () => {
  return (
    <section id='categories'>
        <h2 id='categories-title'> Categories </h2>
        <div className="categories-container">
            {imgs.map((pic)=>(
                <CategoriesCard pic={pic}/>
            ))}
        </div>
    </section>
  )
}

export default Categories