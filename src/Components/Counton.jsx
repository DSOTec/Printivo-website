import React from 'react'
 

const Counton= (props) => {
  return (
    <>
    <div>
      <img src={props.img} alt='image' />
      <div>
      <h5>{props.title}</h5>
      <p>{props.content}</p>
      </div>
       
    </div>
      
    </>
  )
}

export default Counton