import React from 'react'
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
import QuickRead from './components/quickread/QuickRead'
import OlderPosts from './components/older/older'
import Categories from './components/categories/categories'
import Newsletter from './components/newsletter/newsletter'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <QuickRead/>
        <OlderPosts/>
        <Categories/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default App