import React, { useState } from 'react'

const Seventhcomponent = () => {
    const [height, setHeight] = useState(5.6)
  return (
    <div>
      <h1>My seventh component</h1>

      <h3>My height is: {height} </h3>
      <button onClick={() =>{setHeight(6.1)}}> Click me</button>


    </div>
  )
}

export default Seventhcomponent
