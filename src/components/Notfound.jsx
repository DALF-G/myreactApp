import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
      <h1>404</h1>
      <h1>Page not Found</h1>
      <h4>Click below link to go back home</h4>
      <h3><Link to={'/'}>Home</Link></h3>
    </div>
  )
}

export default Notfound
