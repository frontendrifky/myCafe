import { Link } from 'react-router-dom';

function Header(){

    return(
        <header>
            <h1><Link to="/">O&apos;Cafe</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;