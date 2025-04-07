import React from 'react'

const List = () => {
    const items = ["Baba", "Shade", "Doctor"];
    const listitems = items.map(item => <li>{item}</li>)
  return (
    <ul>
        {listitems}
    </ul>
  )    

}

export default List