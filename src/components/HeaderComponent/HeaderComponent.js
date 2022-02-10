import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

function HeaderComponent() {
  return (
      <nav className='HeaderNav' >
          <Link className='links' to="/" > Home </Link>
          <Link className='links' to="/doctor" > Doctor </Link>
          <Link className='links' to="/medicine" > Medicine </Link>
          <Link className='links' to="/message" > Message  </Link>
      </nav>
  )
}

export default HeaderComponent