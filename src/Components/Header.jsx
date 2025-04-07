import React from 'react'
import whatsapp from '../assets/whatsapp.svg'
import nigeriaflag from '../assets/nigeriaflag.svg'

const Header = () => {
  return (
    <>
   <div className="bg-[#F7F6F4] px-[4%] py-2">
  <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#506683] font-semibold gap-4">
    <ul className="flex flex-wrap justify-center md:justify-start gap-6">
      <li>Cost Calculator</li>
      <li>Discover Stores</li>
      <li>Track Orders</li>
    </ul>

    <ul className="flex flex-wrap justify-center items-center gap-6">
      <li className="text-center">
        Need help? Call: <br />
        <span className="text-[#1DA1F2]">+2347069000083</span> or
        <span className="text-[#1DA1F2] ml-1">+2349035000505</span>
      </li>

      <li>
        <img src={whatsapp} alt="WhatsApp logo" className="w-6 h-6" />
      </li>

      <li className="flex items-center gap-2">
        <img src={nigeriaflag} alt="Nigeria Flag" className="w-5 h-5" />
        <p>Nigeria</p>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Header