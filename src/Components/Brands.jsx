import React from 'react'

const Brands = (props) => {
  return (
    <>
     <div>
        <img src={props.img} alt="brands" />
        <a href='#'>{props.link}</a>
     </div>
    </>
  )
}

export default Brands