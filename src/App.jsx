import React from 'react'
//import ReactDOM from "react-dom/client"
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header.jsx'
import Banner from './Components/Banner.jsx'
import News from './Components/News.jsx'
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
import Categoriesinfo  from './Components/Categoriesinfo.jsx';
import Categories from './Components/Categories.jsx'
import categories1 from './assets/categories1.png'
import categories2 from './assets/categories2.png'
import Brandinfo from './Components/Brandinfo.jsx';
import Customerreview from './Components/Customerreview.jsx';
import logo from './assets/download.svg'
import Counton from './Components/Counton.jsx'
import fast from './assets/Fast.svg'
import TOP from './assets/TOP.svg'
import AFS from './assets/AFSsvg.svg'
import Brands from './Components/Brands.jsx'
import techcrunch from './assets/Techcrunch.svg'
import forbes from './assets/forbes.svg'
import techpoint from './assets/Techpoint_Logo_ucyvgg.png'
import techcabal from './assets/TechCabalsvg.svg'
import cnn from './assets/CNN.svg'
import Footer from './Components/Footer.jsx';
import Allproducts from './Pages/Allproducts.jsx';
import Reseller from './Pages/Reseller.jsx';
const App = () => {
  return (
   <>
   <Header />
   <Routes>
        {/* Root route */}
        <Route path="/" element={
          <>
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
   <div>
   <Categoriesinfo /> 
   </div>
   <div className='block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-4 pl-[4%] pr-[3%] sm-block '>
   <Categories img={categories1} text="Greeting Cards" secondtext="STARTING AT" price="₦29,800" per="per 50" button="Browse Greeting Car... >" />
   <Categories img={categories2} text="Stickers" secondtext="STARTING AT" price="₦5,400" per="per 75" button="Browse Stickers >" />
   </div>
  <Brandinfo />
  <div className='bg-[#EDF6FD] h-[120vh] md:h-[70vh] '>
  <h2 className='pl-[4%] pt-[3%] mb-5 font-[500] font-serif text-[1.5rem] text-[#384A62]'>What Customers Say About Us 🙌🏾</h2>
  <div className='block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-3 pl-[4%] pr-[3%] sm-block '>
  <Customerreview logo={logo} name="Amina Ebele" username="@DeliciousAmina" text="I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!" />
  <Customerreview logo={logo} name="Oluwatosin" username="@tosingirlfx" text="@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come." />
  <Customerreview logo={logo} name="Oluwatosin" username="@olgablark" text="These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you." />
  </div>
  </div>
 

  <div className='pl-[3%] pt-[4%] px-[4%] mb-10'>
  <h2 className='pl-[4%] pt-[3%] pb-6 mb-5 font-[600] font-serif text-[1.6rem] text-[#384A62] '>Our amazing work got noticed by:</h2>
  <div className='block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-5 pl-[4%] pr-[3%] sm-block gap-10'>
  <Brands img={techcrunch} link="Read the article here"  />
  <Brands img={forbes} link="Read the article here"   />
  <Brands img={techpoint} link="Read the article here"   />
  <Brands img={techcabal} link="Read the article here"   />
  <Brands img={cnn} link="Read the article here"  />
  </div>
  </div>
          </>
        } />
        {/* All Products route */}
        <Route path="/Allproducts" element={<Allproducts />} />
        <Route path="/Reseller" element={<Reseller />} />
      </Routes>
  <div className='pl-[4%] pt-[4%] px-[4%] mb-10'>
  <h2 className='pl-[4%] pt-[3%] mb-5 font-[600] font-serif text-[1.6rem] text-[#384A62]'>You can count on us for:</h2>
  <div className="block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-3 pl-[4%] pr-[3%] sm-block">
  <Counton img={fast} title="Fast Turnaround Within Days" content="Your order gets to you within 3-7 working days via DHL or our very own Printivo Direct." />
  <Counton img={TOP} title="100% Top Quality" content="Only the finest materials, machines and people will be involved in fulfilling your order." />
  <Counton img={AFS} title="Affordable Services" content="All products are adequately priced to ensure you get value for your money at all times." />
  </div>
  </div>   
  <Footer />
  {/*
  <Routes>
    <Route path="/" element="" />
    <Route path="/Allproduct" element={<Allproducts />} />
  </Routes>*/}

   </>
  )
}

export default App