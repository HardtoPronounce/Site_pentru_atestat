import '../styles/navbar.css';

export default function Navbar() {
  const path = window.location.pathname
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>Companion</a>
        <ul>
            <li>
                <a href='./pages/PetCare'>Pet care</a>
            </li>
            <li>
                <a href='./pages/About'>About</a>
            </li>
        </ul>
    </nav>
  )
}

