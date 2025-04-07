import React from 'react'

const Categories = (props) => {
  return (
    <>
     <div className='card w-[270px] h-[70vh] border-1 border-solid border-[#EEDDEE] rounded-[5px] ml-2 mt-2  mb-4   '>
      <img className='w-[270px] h-[30vh] rounded-[5px] mb-5 hover: w-[350px] ' src={props.img} />
      <h4 className='font-[25px] font-[500] text-[#384A62] pl-4 mb-4'>{props.text}</h4>
      <p className='pl-4 font-[600] font-[Arial] text-[#708095] text-[13px] mb-4'>{props.secondtext}</p>
      <p className=' pl-4 text-[#384A62] text-[20px] font-[600] mb-5 '>{props.price} <span className='text-[#708095] text-[15px] '>{props.per}</span></p>
      <button className='w-[] bg-[#D77F81] text-[#FFFBFF] text-[16px] font-[600] p-[10px] ml-[10px] rounded-[10px] hover:w-[80%]'>{props.button}</button>
    </div>
    </>
  )
}

export default Categories