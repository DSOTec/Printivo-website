import React from 'react'
 

const Counton= (props) => {
  return (
    <>
    <div className='flex justify-center content-center  w-[90%] pt-2 '>
      <img className='m-4' src={props.img} alt='image' />
      <div>
      <h5 className='text-[#384A62] font-[500] mb-2'>{props.title}</h5>
      <p className='text-[#677F9E]' >{props.content}</p>
      </div>
       
    </div>
      
    </>
  )
}

export default Counton