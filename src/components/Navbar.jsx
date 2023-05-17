import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>Companion</a>
        <ul>
            <li>
                <a href='/PetCare'>Pet care</a>
            </li>
            <li>
                <a href='/About'>About</a>
            </li>
            <li>
                <a href='/Contact'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

