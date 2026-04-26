import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import Menu_icon from '../../assets/Menu_icon.svg';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${sticky ? 'dark_nav' : ''}`}>
      
      {/* logo */}
      <img src={logo} alt="logo" className="logo" />

      {/* desktop menu */}
      <ul className="nav-links">
        <li><Link to='hero' smooth={true} offset={-260} duration={500}>Home</Link></li>
        <li><Link to='Programs' smooth={true} offset={-270} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-200} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li>
          <Link to="contact" smooth={true} offset={-240} duration={500} className="btn">
            Contact us
          </Link>
        </li>
      </ul>

      {/* mobile menu icon */}
      <img 
        src={Menu_icon} 
        className="menu_icon" 
        alt="menu"
        onClick={() => setMenuOpen(true)}
      />

      {/* offcanvas menu */}
      <div className={`offcanvas ${menuOpen ? 'open' : ''}`}>
        
        <button className="close_btn" onClick={closeMenu}>✕</button>

        <Link onClick={closeMenu} to='hero' smooth={true} offset={-260} duration={500}>Home</Link>
        <Link onClick={closeMenu} to='Programs' smooth={true} offset={-270} duration={500}>Program</Link>
        <Link onClick={closeMenu} to='about' smooth={true} offset={-200} duration={500}>About Us</Link>
        <Link onClick={closeMenu} to='campus' smooth={true} offset={-260} duration={500}>Campus</Link>
        <Link onClick={closeMenu} to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link>
        <Link onClick={closeMenu} to='contact' smooth={true} offset={-240} duration={500} className="btn">
          Contact us
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;