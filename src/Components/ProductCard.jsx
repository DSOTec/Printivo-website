import React from 'react'

const ProductCard = (props) => {
  return (
     <>
         <div className="card w-full max-w-sm sm:max-w-[270px] border border-[#EEDDEE] rounded-md m-2 flex flex-col">
            <img className="w-full h-[30vh] object-cover rounded-md mb-4 transition-all duration-300 hover:scale-105" src={props.img} />
            <h5 className="text-l font-medium text-[#384A62] px-4 mb-2" >{props.title}</h5>
            <p className="px-4 text-[#73869E] text-[10px] font-semibold mb-4" >{props.text}</p>
            <button className="bg-[#D77F81] text-white text-base font-semibold px-4 py-2 mx-4 mb-4 rounded-lg transition-all duration-300 hover:w-[80%]">{props.button} </button>
        </div>
     </>
  )
}

export default ProductCard