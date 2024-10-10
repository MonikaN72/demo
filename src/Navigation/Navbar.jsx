import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='Navbar'>
      <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/Work"><li>Work</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          <Link to="/Todolist"><li>Todolist</li></Link>
        </ul>
      </nav>
      </div>
    </div>
  )
}

export default Navbar