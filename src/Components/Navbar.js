import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <Link to="/">I am NavBar</Link>
    <br></br>
      <Link to="/about">About</Link>
    </div>
  )
}
