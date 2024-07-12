import { Link } from 'react-router-dom';

function Footer(){

    return(
        <footer>
            <div className="info">
                <h1>O&apos;Cafe</h1>
                <div className="footerList">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
            <div className="right">
                <p>&copy; 2024 O&apos;Cafe. All rights reserved</p>
                <p>Images designed by Freepik</p>
            </div>
        </footer>
    )
}

export default Footer;