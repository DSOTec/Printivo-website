import React from 'react'

const Customerreview = (props) => {
  return (
    <>
   <div className="card bg-white shadow-md rounded-lg p-5 w-full max-w-sm m-5">
  <div className="flex items-center gap-4 mb-3">
    <img src={props.logo} alt="logo" className="w-10 h-10 border border-[#FFDEEE] p-2 rounded-full" />
    <div>
      <h4 className="text-[16px] font-medium text-[#384A62]"> {props.name} <span className="text-[#1DA1F2] pl-1">{props.username}</span>  </h4>
    </div>
  </div>
  <p className="text-[#708095] text-[16px]">{props.text}</p>
</div>
    </>
  )
}

export default Customerreview