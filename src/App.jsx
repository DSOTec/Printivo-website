import React from 'react'
//import ReactDOM from "react-dom/client"
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx'
import News from './Components/news.jsx'
import Productinfo from './Components/Productinfo.jsx'
import Products from './Components/Products.jsx'
import one from './assets/onecard.png'
import two from './assets/twocard.png'
import three from './assets/threecard.png'
import four from './assets/fourcard.png'
import five from './assets/fivecard.jpg'
import six from './assets/sixcard.png'
import seven from './assets/sevencard.png'
import eight from './assets/eightcard.png'
import nine from './assets/ninecard.png'
import ten from './assets/tencard.png'
import tenone from './assets/tenone.png'
import tentwo from './assets/tentwo.jpeg'

import List from './Components/List.jsx'
import Categoriesinfo from './Components/Categories.jsx'
import Categories from './Components/Categories.jsx'
import categories1 from './assets/categories1.png'
import categories2 from './assets/categories2.png'
const App = () => {
  return (
   <>
   <Header />
   <Banner />
   <News />
   <Productinfo />
   <div className='block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-4 pl-[4%] pr-[3%] sm-block '>
   <Products  img={one} text="Two-sided Business Card" secondtext="STARTING AT" price="₦15, 000" per="per 100" button="Browse Two-sided Bu... >" />
   <Products img={two} text="A5 flyers (Single Sided)" secondtext="STARTING AT" price="₦25, 800" per="per 100" button="Browse A5 flyers (... >" />
   <Products img={three} text="Round Stickers (3.5'' Diameter) " secondtext="STARTING AT" price="₦17, 000" per="per 100" button="Browse Round Stic... >" />
   <Products img={four} text="Simple Mugs" secondtext="STARTING AT" price="₦4,800" per="per 1" button="Browse Simple Mugs >" />
   <Products img={five} text="Postcards (A6)" secondtext="STARTING AT" price="₦22,300" per="per 50" button="Browse Postcard A(... >" />
   <Products img={six} text="Roll Up Banners (Big Base)" secondtext="STARTING AT" price="₦60,500" per="per 1" button="Browse Roll Up Bann... >" />
   <Products img={seven} text="A2 Poster" secondtext="STARTING AT" price="₦71,000" per="per 100" button="Browse A2 Poster >" />
   <Products img={eight} text="Trifold Brochures" secondtext="STARTING AT" price="₦47,500" per="per 100" button="Browse Trifold Broc... >" />
   <Products img={nine} text="Landscape ID Cards" secondtext="STARTING AT" price="₦4,500" per="per 1" button="Browse Landscape ID... >" />
   <Products img={ten} text="Off White T-shirts" secondtext="STARTING AT" price="₦6,000" per="per 1" button="Browse Off White T... >" />
   <Products img={tenone} text="A4 Branded Paper Bag" secondtext="STARTING AT" price="₦115,280" per="per 100" button="Browse A4 Branded P... >" />
   <Products img={tentwo} text="A4 Courier Bags" secondtext="STARTING AT" price="₦27,500" per="per 100" button="Browse A4 Courier B... >" />
   </div>
   <Categoriesinfo /> 
   <div className=" grid grid-cols-4">
   <Categories img={categories1} text="Greeting Cards" secondtext="STARTING AT" price="₦29,800" per="per 50" button="Browse Greeting Car... >" />
   <Categories img={categories2} text="Stickers" secondtext="STARTING AT" price="₦5,400" per="per 75" button="Browse Stickers >" />
   </div>
    
  
  <List />

  <Routes>
    <Route path="/" element={<Header />} />
    <Route path="/products" element={<Products />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/news" element={<News />} />
    <Route path="/productinfo" element={<Productinfo />} />
    <Route path="/list" element={<List />} />
    <Route path="/categoriesinfo" element={<Categoriesinfo />} />
  </Routes>

   </>
  )
}

export default App