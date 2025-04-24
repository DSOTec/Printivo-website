import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.svg'
import x from '../assets/x.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import audi from '../assets/audi.png'
import dhl from '../assets/dhl.png'



const Footer = () => {
  return (
   <>
    <div className='bg-[#384A62]'>
        <div className='block  text-[center] md:grid grid-cols-2 sm:grid grid-cols-4 pl-[4%] pr-[3%] pt-[4%] sm-block '>
            <div >
                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]' >Printivo</h2>
                <ul className='list-none'>
                <Link className='text-[#FFFFFF] text-[13px] font-[500]  '>About Us</Link><br/>
                 <Link className='text-[#FFFFFF]  font-[500] '>Contact</Link><br/>
                 <Link className='text-[#FFFFFF]  font-[500] '>Track Order</Link><br/>
                 <Link className='text-[#FFFFFF]  font-[500] '>Printivo Promise</Link><br/>
                 <Link className='text-[#FFFFFF]  font-[500] '>Printivo Blog</Link><br/>
                 <Link className='text-[#FFFFFF]  font-[500] mb-3'>Career</Link>
                </ul>
            </div>
            <div>
                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]' >Help and Information</h2>
                <ul className='list-none'>
                    <Link className='text-[#FFFFFF] font-[500] '>Paper Quality</Link><br/>
                     <Link className='text-[#FFFFFF] font-[500] '>Privacy Policy </Link><br/>
                     <Link className='text-[#FFFFFF] font-[500] '>Terms and Conditions</Link><br/>
                     <Link className='text-[#FFFFFF] font-[500] '>Font Licenses</Link><br/>     
                     <Link className='text-[#FFFFFF] font-[500] mb-3 '>Shipping and Delivery</Link>
                </ul>
            </div>
            <div>
                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]'>Make Money</h2>
                <ul className='list-none'>
                <Link className='text-[#FFFFFF] font-[500] '>Refer a friend & earn N1,000</Link><br/>
                <Link className='text-[#FFFFFF] font-[500] '>Become a Reseller</Link><br/>
                <Link className='text-[#FFFFFF] font-[500] '> Sell your Designs</Link><br/>
                <Link className='text-[#FFFFFF] font-[500] mb-3 '> Merch Store</Link>
                </ul>
            </div>
            <div>
                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]'>Follow US</h2>
                <div className='flex gap-5  pb-4 mb-5'>
                   <img className='w-[19px]' src={facebook} />
                   <img className='w-[19px]' src={x} />
                   <img className='w-[19px]' src={linkedin} />
                   <img className='w-[19px]' src={instagram} />
                </div>
                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]'>Accepted Payments</h2>
                    <img className='w-[70%] mb-5' src={audi} />

                <h2 className='text-[#ECE8D9] text-[1.2rem] mb-3 font-[500]'>Delivery</h2>
                <div className='flex'>
                    <img src={dhl} />
                  
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Footer