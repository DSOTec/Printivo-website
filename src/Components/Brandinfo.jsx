import React from 'react'
import microsoft from "../assets/microsoft.png"

const Brandinfo = () => {
  return (
    <>
        <div className='p-4 sm:p-[4%]'>
            <h5 className='p-2 font-serif font-[550] text-[2rem] text-[#384A62]'>Nigeria's No. 1 online print shop 👑</h5>
            <p className='w-full p-2 pt-1 mb-2 font-[500] text-[26px] text-[#384A62]'>Our print services and solution are trusted by these brands and <br/> over 15,000 other businesses in Nigeria</p>

            <div>
                <img className='p-2 w-[100%]' src={microsoft} alt='microsoft logo' />
              
            </div>
        </div>
    </>
  )
}

export default Brandinfo