import React from 'react'
import './styles/navbar.css'

export default function Navbar() {
  return (
    <>
    <div>I AM HEREEEEEE</div>
    <nav className='navigation'>
        <a href='/' className='brand-name'>
            Macrosoft
        </a>
        <div className='navigation-menu'>
            <ul>
                <li>
                    <a href='/home'>Home</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    </>
  )
}
