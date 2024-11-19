import { Link } from 'react-router-dom'; // Import the Link component
import './css/Navbar.css';

const Navbar = () => {

  return (
    <div className="nav-container">
      <nav>
        <ul>
          <li><Link to="/" ></Link></li> {/* Home link */}
          <li><Link to="/Home">Home</Link></li> {/* About link */}
          <li><Link to="/About">About</Link></li> {/* Services link */}
          <li><Link to="/portfolio">Portfolio</Link></li> {/* Portfolio link */}
          <li><Link to="/contact">Contact</Link></li> {/* Contact link */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
