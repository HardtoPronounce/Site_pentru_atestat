import React from 'react'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <nav classname='nav'>
        <a href='/' className='site-title'>Companion</a>
        <ul>
            <li>
                <a href='/petCare'>Pet care</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
        </ul>

    </nav>
  )
}
