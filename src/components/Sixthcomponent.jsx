
import React, { useState } from 'react'

const Sixthcomponent = () => {

  // use state hook enables us to manage the different states of our application
  const [number, setNumber] = useState(10)
  const [weight, setWeight] = useState(50)

  let[itemNumber, setItemNumber] = useState(1)

  let price = 600

  return (
    <div>
      <h2>Welcome to my sixth component</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut non unde ea quibusdam necessitatibus sapiente nulla sint consectetur, amet aliquid! Iure eveniet quisquam aperiam sunt architecto quaerat rerum harum quam?</p>

      <h3>My number is {number}</h3>
      <button onClick={() =>{setNumber(20)}}> Click me</button>

      <h3>My Weight is {weight}</h3>
      <button onClick={() =>{setWeight(58)}}> Click me</button>

      <h3>The item number is {itemNumber}</h3>
      <h3>The total price of the item is: {itemNumber * price}</h3>
      <button onClick={() =>{setItemNumber(itemNumber = itemNumber +1)}}> Click to add </button>
      <button onClick={() =>{setItemNumber(itemNumber = itemNumber -1)}}> Click to reduce </button>
    </div>
  )
}

export default Sixthcomponent

// create a component where you shall have to use useStatehook which contains the height of a person
// and by click of a butthon, update the height of the person



