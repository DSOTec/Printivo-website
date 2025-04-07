import React from 'react'

function Products(props) {

  return (
    <>
    
    
   {/* <section className='w-[23%]    '> */}
   <div className="card w-full max-w-sm sm:max-w-[270px] border border-[#EEDDEE] rounded-md m-2 flex flex-col">
  <img
    className="w-full h-[30vh] object-cover rounded-md mb-4 transition-all duration-300 hover:scale-105"
    src={props.img}
    alt="Card visual"
  />
  <h4 className="text-xl font-medium text-[#384A62] px-4 mb-2">
    {props.text}
  </h4>
  <p className="px-4 font-semibold font-[Arial] text-[#708095] text-sm mb-2">
    {props.secondtext}
  </p>
  <p className="px-4 text-[#384A62] text-lg font-semibold mb-4">
    {props.price} <span className="text-[#708095] text-sm">{props.per}</span>
  </p>
  <button className="bg-[#D77F81] text-white text-base font-semibold px-4 py-2 mx-4 mb-4 rounded-lg transition-all duration-300 hover:w-[80%]">
    {props.button}
  </button>
</div>
    
    </>
  )
}

export default Products