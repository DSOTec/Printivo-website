import React from 'react'

const Productinfo = () => {
   
  return (
  <>
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4 pt-6 px-4 sm:px-[4%] pb-6">
  <h2 className="text-[#384A62] text-2xl sm:text-3xl font-semibold font-sans">
    Popular Products
  </h2>
  <p className="text-[#D77F81] text-base sm:text-lg font-medium cursor-pointer hover:underline transition-all duration-200">
    See all products
  </p>
</div>
    
  </>
  )
}

export default Productinfo