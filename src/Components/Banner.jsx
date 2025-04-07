import React from 'react'
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import banner from '../assets/banner.png'
import { Outlet, Link } from 'react-router-dom'
import  '../App.css'

const Banner = () => {
  return (
   <>
   <div className="bannerstyle">
  <div className="px-[4%] pt-2 pb-6">
    {/* Top Nav */}
    <div className="flex flex-col lg:flex-row justify-between items-center">
      <img src={logo} alt="logo" className="w-32 h-auto mb-4 lg:mb-0" />

      <ul className="flex flex-wrap justify-center lg:justify-end items-center gap-4 text-sm font-bold">
        <li className="text-[#4B6382] hover:text-[#D98E8D] transition">
          <Link to="/products">All Products</Link>
        </li>
        <li className="text-[#4B6382]">Become a Reseller</li>
        <li className="text-[#4B6382]">Merch Store</li>
        <li className="text-[#4B6382]">Marketplace</li>
        <li className="text-[#D98E8D]">Sign In</li>
        <li className="text-[#4B6382]">Create Account</li>
        <li>
          <img src={cart} alt="cart" className="w-6 h-6" />
        </li>
      </ul>
    </div>

    {/* Banner Body */}
    <div className="flex flex-col lg:flex-row justify-between items-start pt-10 gap-10">
      <div className="w-full lg:w-1/2">
        <h2 className="text-[#384A62] text-4xl md:text-5xl font-bold font-sans leading-tight mb-4">
          Quality Prints
        </h2>
        <h5 className="text-[#708095] text-xl font-medium mb-6">
          Shipped to your doorstep
        </h5>

        <label className="text-[#384A62] font-bold text-sm">
          What would you like to print today?
        </label>
        <input
          type="search"
          className="w-full p-4 mt-2 rounded-lg border border-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#D98E8D]"
          placeholder="Search for Business Cards, T-Shirts, Mugs, etc"
        />
      </div>

      {/* Optional Banner Image (Uncomment to use) */}
      {/* 
      <div className="w-full lg:w-1/2 pt-6">
        <img src={banner} alt="banner" className="w-full h-auto" />
      </div> 
      */}
    </div>
  </div>
</div>
   </>
  )
}

export default Banner