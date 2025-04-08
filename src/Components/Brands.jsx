import React from 'react'

const Brands = (props) => {
  return (
    <>
     <div>
        <img className='mb-4' src={props.img} alt="brands" />
        <a className='underline font-[500] font-sans text-[#384A62] ' href='#'>{props.link}</a>
     </div>
    </>
  )
}

export default Brands